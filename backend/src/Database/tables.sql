-- CREATE TABLE projects (
--   project_id VARCHAR(250) NOT NULL PRIMARY KEY,
--   project_name VARCHAR(50) NOT NULL,
--   project_description VARCHAR(1000) NOT NULL,
--   project_created_at DATETIME DEFAULT GETDATE(),
--   project_ended_at DATE NOT NULL,
--   project_status VARCHAR(25) NOT NULL
-- );

-- CREATE TABLE users (
--   user_id VARCHAR(250) NOT NULL PRIMARY KEY,
--   user_role VARCHAR(15) NOT NULL,
--   user_first_name VARCHAR(20) NOT NULL,
--   user_last_name VARCHAR(20) NOT NULL,
--   user_email VARCHAR(25) NOT NULL,
--   user_password VARCHAR(200) NOT NULL,
--   assigned_project VARCHAR(250) DEFAULT NULL,
--   FOREIGN KEY (assigned_project) REFERENCES projects(project_id)
-- );


-- DROP TABLE users;
-- DROP TABLE projects;