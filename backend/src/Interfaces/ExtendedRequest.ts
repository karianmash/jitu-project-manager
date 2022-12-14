import { Request } from "express";

export interface UserRequest extends Request {
  body: {
    user_name?: string;
    email: string;
    password?: string;
  };
}

// export interface UserLoginRequest extends Request {
//   body: {
//     email: string;
//     password: string;
//   };
// }

export interface ProjectRequest extends Request {
  body: {
    title: string;
    description: string;
    completion_date: string;
  };
}
