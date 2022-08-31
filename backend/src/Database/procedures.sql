-- Procedure to get delete Project
-- CREATE PROCEDURE deleteProject(@project_id VARCHAR(200))
-- AS
-- BEGIN
--     DELETE FROM projects WHERE project_id = @project_id;
-- END

-- Procedure to assign user project
-- CREATE PROCEDURE assignUserProject( 
--     @user_id VARCHAR(80),
--     @project_id VARCHAR(200)
--     )
-- AS
-- BEGIN
--     UPDATE users
--     SET assigned_project = @project_id
--     WHERE user_id = @user_id;
-- END

-- Procedure to get all projects
-- CREATE PROCEDURE getAllProjects
-- AS
-- BEGIN
--     SELECT  
--     project_id,
--     project_name,
--     project_description,
--     project_status,
--     project_ended_at,
--     user_id,
--     user_first_name,
--     user_last_name
-- FROM 
--     projects
--     INNER JOIN users
--         ON project_id = assigned_project;
-- END

-- Procedure to get all users
-- CREATE PROCEDURE getAllUsers
-- AS
-- BEGIN
--     SELECT user_id, user_role, user_first_name, user_last_name, user_email, assigned_project FROM users WHERE user_role = 'user' AND assigned_project IS NULL;
-- END


-- Procedure to add project
-- CREATE PROCEDURE createProject(
--     @id VARCHAR(80),
--     @title VARCHAR(50),
--     @description VARCHAR(1000),
--     @completion_date DATE
-- )
-- AS
-- BEGIN
--     INSERT INTO projects
--         (
--         id,
--         title,
--         description,
--         completion_date
--         )
--     VALUES
--         (
--             @id,
--             @title,
--             @description,
--             @completion_date
--     );
-- END;



-- Procedure to add user
-- CREATE PROCEDURE createUser( 
--     @id VARCHAR(255),
--     @user_name VARCHAR(255),
--     @email VARCHAR(255), 
--     @password VARCHAR(200)
--     )
-- AS
-- BEGIN
-- INSERT INTO users(id,user_name,email,password) VALUES(@id,@user_name,@email,@password)
-- END



-- Procedure to fetch users
-- CREATE PROCEDURE fetchUser(@email VARCHAR(200))
-- AS
-- BEGIN
-- SELECT * FROM users WHERE email = @email
-- END

-- DROP PROCEDURE getUser;
