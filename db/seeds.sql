INSERT INTO departments (name)
VALUES
  ('Engineering'),
  ('Human Resources'),
  ('Quality Assurance');

INSERT INTO roles (title, salary, department_id)
VALUES
  ('System Engineer', 100000, 1),
  ('Mechanical Engineer', 120000, 1),
  ('Manager', 150000, 1),
  ('Software Engineer', 140000, 1),
  ('QA Engineer', 110000, 3)
  ('HR', 85000, 2);

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
  ('James', 'Fraser', 1, null),
  ('Jack', 'London', 2, 3),
  ('Robert', 'Bruce', 3, null),
  ('Peter', 'Greenaway', 4, 3),
  ('Derek', 'Jarman', 5, 9),
  ('Paolo', 'Pasolini', 6, 9),
  ('Heathcote', 'Williams', 4),
  ('Sandy', 'Powell', 5, 9),
  ('Emil', 'Zola', 3, null),
  ('Sissy', 'Coalpits', 2, 9),
  ('Antoinette', 'Capet', 1, 9),
  ('Samuel', 'Delany', 2, 3);
