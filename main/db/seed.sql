INSERT INTO department(dept_name)
VALUES ('Front Of House'),
       ('Back of House'),
       ('Operations'),
       ('Marketing'),
       ('Catering');

INSERT INTO role(title, salary, dept_id)
VALUES ('Director', 65000, 1),
       ('Manager', 40000, 2),
       ('Supervisor', 32000, 3),
       ('Team Member', 28000, 4);

INSERT INTO employee(first_name, last_name, role_id, manager_id)
VALUES ('Korben', 'Dallas', 1, null),
       ('Raymon', 'Reddintong', 1, null),
       ('Thomas', 'Anderson', 2, 1),
       ('Arthur', 'Fleck', 3, 2),
       ('Alfred', 'Pennyworth', 3, 1),
       ('Bruce', 'Banner', 4, 2);