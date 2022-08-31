import { Response } from "express";
import mssql from "mssql";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { v4 as uid } from "uuid";
import { sqlConfig } from "../Config/db";
import { UserLoginSchema, UserRegisterSchema } from "../Helper/userValidation";
import { UserRequest } from "../Interfaces/ExtendedRequest";
import { User } from "../Interfaces/User";

export async function createUser(req: UserRequest, res: Response) {
  try {
    const pool = await mssql.connect(sqlConfig);

    const id = uid();

    const { error, value } = UserRegisterSchema.validate(req.body);
    if (error) {
      // Bad request
      return res.status(400).json({ error: error.details[0].message });
    }
    // console.log(id)

    const hashedpassword = await bcrypt.hash(value.password, 10);

    await pool
      .request()
      .input("id", mssql.VarChar, id)
      .input("user_name", mssql.VarChar, value.user_name)
      .input("email", mssql.VarChar, value.email)
      .input("password", mssql.VarChar, hashedpassword)
      .execute("createUser");

    console.log(value);

    res.status(200).json({ message: "Registration successful!" });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ error });
  }
}

/*
  -----------------------------------------------------------------------------
  This a route to handle user login
  -----------------------------------------------------------------------------
*/
export async function loginUser(req: UserRequest, res: Response) {
  try {
    const pool = await mssql.connect(sqlConfig);

    const { error, value } = UserLoginSchema.validate(req.body);
    if (error) {
      return res.json({ error: error.details[0].message });
    }

    const user: User[] = (
      await pool
        .request()
        .input("email", mssql.VarChar, value.email)
        .execute("fetchUser")
    ).recordset;

    if (!user[0]) {
      return res.status(404).json({ message: "User Not Found" });
    }

    bcrypt.compare(value.password, user[0].password, (error, result) => {
      if (error) {
        return res.status(401).json({
          message: "Auth failed!",
        });
      }

      if (result) {
        const payload = user.map((item) => {
          const { password, ...rest } = item;
          return rest;
        });
        const token = jwt.sign(payload[0], process.env.JWT_KEY as string, {
          expiresIn: "1h",
        });

        res.status(200).json({
          message: "Auth successful!",
          user: payload[0],
          token,
        });
      } else {
        res.status(401).json({
          message: "Auth failed!",
        });
      }
    });
  } catch (error) {
    res.json({ error });
  }
}

// Get users project
export async function getUserProject(req: UserRequest, res: Response) {
  try {
    const pool = await mssql.connect(sqlConfig);
    const userProject = (
      await pool
        .request()
        .input("email", mssql.VarChar, req.params.userEmail)
        .execute("fetchUser")
    ).recordset;

    if (userProject[0].assigned_project === null) {
      res.status(404).json("User has no project");
    } else {
      let project = (
        await pool.query(
          `SELECT * FROM projects WHERE id=${userProject[0].assigned_project}`
        )
      ).recordset;

      let user = {
        id: userProject[0].id,
        role: userProject[0].role,
        user_name: userProject[0].user_name,
        email: userProject[0].email,
        assigned_project: userProject[0].assigned_project,
        project_title: project[0].title,
      };

      res.status(200).json(user);
    }
    // console.log(userProject);

    // res.json(userProject);
    // res.json(user);
  } catch (error) {
    res.status(404).json(error.message);
    console.log(error);
  }
}

// Get all users
// export async function getAllUsers(req: UserRequest, res: Response) {
//   try {
//     const pool = await mssql.connect(sqlConfig);
//     const allusers = (await pool.request().execute("getAllUsers")).recordset;
//     console.log(allusers);

//     res.json(allusers);
//   } catch (error) {
//     console.log(error);
//   }
// }

/*
  -----------------------------------------------------------------------------
  This a route to handle user login
  -----------------------------------------------------------------------------
*/
// export async function getProject(req: UserRequest, res: Response) {
//   try {
//     const pool = await mssql.connect(sqlConfig);

//     const { error, value } = UserLoginSchema.validate(req.body);
//     if (error) {
//       return res.json({ error: error.details[0].message });
//     }

//     const user: User[] = (
//       await pool
//         .request()
//         .input("user_email", mssql.VarChar, value.email)
//         .execute("fetchUser")
//     ).recordset;

//     if (!user[0]) {
//       return res.status(404).json({ message: "User Not Found" });
//     }

//     bcrypt.compare(value.password, user[0].user_password, (error, result) => {
//       if (error) {
//         return res.status(401).json({
//           message: "Auth failed!",
//         });
//       }

//       if (result) {
//         const payload = user.map((item) => {
//           const { user_password, ...rest } = item;
//           return rest;
//         });
//         const token = jwt.sign(payload[0], process.env.JWT_KEY as string, {
//           expiresIn: "1h",
//         });
//         res.status(200).json({
//           message: "Auth successful!",
//           token,
//         });
//       }
//     });
//   } catch (error) {
//     res.json({ error });
//   }
// }
