CREATE DATABASE university;
USE university;

CREATE TABLE faculty
(
	id 				INT AUTO_INCREMENT 	NOT NULL,
	name 			VARCHAR(255)		NOT NULL,
	PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB
;

CREATE TABLE class
(
	id 				INT AUTO_INCREMENT 	NOT NULL,
	name 			VARCHAR(255)		NOT NULL,
    faculty_id		INT,
    FOREIGN KEY (faculty_id) REFERENCES faculty(id),
	PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB
;

CREATE TABLE student
(
	id 				INT AUTO_INCREMENT 	NOT NULL,
	surname 		VARCHAR(255)		NOT NULL,
    name 			VARCHAR(255)		NOT NULL,
    patronymic		VARCHAR(255)		NOT NULL,
    age				INT					NOT NULL,
    class_id		INT,
    FOREIGN KEY (class_id) REFERENCES class(id),
	PRIMARY KEY (id)
) DEFAULT CHARACTER SET utf8mb4
  COLLATE `utf8mb4_unicode_ci`
  ENGINE = InnoDB
;

INSERT INTO faculty (name)
VALUES 
	('ФИВТ'),
	('ФУП'),
	('ИЛП')
;

INSERT INTO class (name, faculty_id)
VALUES
	('ФИВТ-1', 1),
    ('ФИВТ-2', 1),
    ('ФИВТ-3', 1),
    ('ФУП-1', 2),
    ('ФУП-2', 2),
    ('ФУП-3', 2),
    ('ИЛП-1', 3),
    ('ИЛП-2', 3),
    ('ИЛП-3', 3)
;

INSERT INTO student (surname, name, patronymic, age, class_id)
VALUES
	('Русаков', 	   'Леонтий', 		'Альбертович', 		19, 1),
	('Иванов', 		   'Валентин', 		'Игоревич', 		19, 1),
	('Михеев', 		   'Федор', 	    'Святославович', 	20, 1),
	('Иванков', 	   'Виктор', 		'Тихонович', 		19, 1),
	('Жуков', 	       'Пантелеймон',   'Максимович', 		19, 1),
	('Горбунов', 	   'Аверьян', 		'Филатович', 		20, 2),
	('Игнатьев', 	   'Михаил', 		'Иванович', 		21, 2),
	('Никифоров', 	   'Эльдар', 		'Вениаминович', 	20, 2),
	('Бирюков', 	   'Анатолий', 	    'Тихонович', 		19, 2),
	('Кононов', 	   'Илларион', 		'Авдеевич', 		19, 2),
	('Белозёров', 	   'Ефрем', 		'Юрьевич', 			19, 3),
	('Игнатьев', 	   'Ираклий', 		'Дмитриевич', 		20, 3),
	('Ширяев',		   'Богдан', 		'Андреевич', 		19, 3),
	('Капустин', 	   'Парамон', 		'Сергеевич', 		19, 3),
	('Самойлов', 	   'Платон', 		'Дмитриевич', 		21, 3),
	('Жуков', 		   'Максим', 		'Алексеевич', 		19, 4),
	('Шилов', 		   'Макар', 		'Александрович', 	19, 4),
	('Клочко', 		   'Александр', 	'Александрович', 	20, 4),
	('Белов', 		   'Никита', 		'Васильевич', 		19, 4),
	('Дементьев', 	   'Родион', 	    'Дмитриевич', 		19, 4),
	('Смирнов', 	   'Ростислав', 	'Александрович', 	22, 5),
	('Костин', 		   'Даниил', 		'Тихонович', 		19, 5),
	('Дмитриев',       'Бронислав', 	'Александрович', 	18, 5),
	('Юдин', 		   'Игнатий', 		'Онисимович', 		19, 5),
	('Емельянов', 	   'Гордий', 		'Яковович', 		20, 5),
	('Фомичёв',  	   'Аверкий', 		'Матвеевич', 		19, 6),
	('Маслов', 		   'Иван', 		    'Андреевич', 		19, 6),
	('Шашков', 		   'Владимир', 		'Сергеевич', 		19, 6),
	('Константинов',   'Вениамин', 		'Егорович', 		19, 6),
	('Симонов', 	   'Алан', 			'Проклович', 		22, 6),
	('Попов',	       'Юлиан', 		'Викторович', 		19, 7),
	('Журавлёв', 	   'Александр', 	'Гордеевич', 		19, 7),
	('Фролов', 		   'Сергей', 		'Александрович', 	18, 7),
	('Костин ', 	   'Нисон', 		'Игоревич',			25, 7),
	('Костин', 		   'Нелли', 		'Владимирович', 	18, 7),
	('Лобанов', 	   'Алан', 			'Иосифович',		19, 8),
	('Егоров', 		   'Корнелий', 		'Олегович', 		20, 8),
	('Дементьев', 	   'Венедикт', 		'Анатольевич', 		19, 8),
	('Орлов', 		   'Архип', 		'Юрьевич', 			20, 8),
	('Данилов', 	   'Алексей',		'Андреевич', 		19, 8),
	('Соловьёв', 	   'Вилли', 		'Сергеевич', 		19, 9),
	('Никонов', 	   'Вадим', 		'Алексеевич', 		20, 9),
	('Бирюков', 	   'Владимир', 		'Владимирович', 	19, 9),
	('Стрелков', 	   'Богдан',		'Тимурович', 		19, 9),
	('Арсибеков', 	   'Артем', 		'Артурович', 		18, 9)
;

SELECT /*Для получения всех студентов в возрасте 19 лет*/
	student.surname AS Фамилия,
    student.name AS Имя,
    student.patronymic AS Отчество,
    student.age AS Возраст,
    class.name AS Группа
FROM 
	student
    INNER JOIN class ON student.class_id = class.id
WHERE
	student.age = 19;
    
SELECT  /*Для получения всех студентов из конкретной группы.*/
	student.surname AS Фамилия,
    student.name AS Имя,
    student.patronymic AS Отчество,
    class.name AS Группа
FROM 
	student
    INNER JOIN class ON student.class_id = class.id
WHERE
	class.name = 'ФИВТ-1';
    
SELECT  /*Для получения всех студентов из конкретного факультета*/
	student.surname AS Фамилия,
    student.name AS Имя,
    student.patronymic AS Отчество,
    faculty.name AS Факультет
FROM 
	student
    INNER JOIN class ON student.class_id = class.id
    INNER JOIN faculty ON faculty.id = class.faculty_id
WHERE
	faculty.name = 'ФИВТ';
    
SELECT  /*Для получения факультета и группы конкретного студента*/
	student.id,
	student.surname AS Фамилия,
    student.name AS Имя,
    student.patronymic AS Отчество,
    class.name AS Группа,
    faculty.name AS Факультет
FROM 
	student
    INNER JOIN class ON student.class_id = class.id
    INNER JOIN faculty ON faculty.id = class.faculty_id
WHERE
	student.surname = 'Данилов' AND student.name = 'Алексей';