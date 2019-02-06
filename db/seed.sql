DROP DATABASE IF EXISTS express_users;
CREATE DATABASE express_users;

\c express_users;

CREATE TABLE users(
  id serial primary key,
  name varchar NOT NULL,
  email varchar UNIQUE NOT NULL,
  password_digest varchar NOT NULL,
  is_admin boolean DEFAULT 'f'
  
);




-- DROP DATABASE IF EXISTS doctor;
-- CREATE DATABASE doctor;
-- \c doctor



-- CREATE TABLE patient(
--       patientID serial primary key,
--       pname varchar(50) not null, 
--       age int,
--       gender varchar(10),
--       statusOfDisease varchar(200),
--       address varchar(70), 
--       phone varchar(15) 
--       );
      

-- CREATE TABLE doctor(
--   doctorID serial primary key,
--   dname varchar(50) not null,
--   address varchar(70), 
--   phoneno varchar(15), 
--   gender varchar(10), 
--   password varchar(15),
--   dimage varchar(50),
--   );

-- CREATE TABLE appointment(
--     patientID varchar(20) not null,
--     doctorID varchar(20)not null,
--     app_no varchar(20) not null,
--     date date,
--     time time,
--     primary key(doctorID, app_no), 
--     foreign key(patientID) references patient(patientID),
--     foreign key(doctorID) references doctor(doctorID));


-- INSERT INTO patient(pname ,age ,gender,statusOfDisease ,address ,phone) VALUES
--     ('mmm', 20 , 'female','Diabetes','saudi arabia','123');
-- INSERT INTO patient(pname ,age ,gender,statusOfDisease ,address ,phone) VALUES
--     ('ddd', 20 , 'male','Diabetes','saudi arabia','456');
--    INSERT INTO doctor (dname ,address, phoneno ,gender,password , dimage ) VALUES
-- ('mmm', 'saudi arabia', '123', 'female', '123123','');

