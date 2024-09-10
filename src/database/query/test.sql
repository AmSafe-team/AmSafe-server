INSERT INTO
    USER (
        EMAIL,
        NAME,
        PHONE,
        DOB,
        ABOUT
    )
VALUES (
        'john.doe@example.com',
        'John Doe',
        '1234567890',
        '1990-01-15',
        'Software engineer with 5 years of experience.'
    ),
    (
        'jane.smith@example.com',
        'Jane Smith',
        '0987654321',
        '1985-07-22',
        'Graphic designer who loves creating digital art.'
    ),
    (
        'mike.jones@example.com',
        'Mike Jones',
        '1122334455',
        '1992-03-30',
        'Marketing specialist focusing on social media.'
    ),
    (
        'emily.clark@example.com',
        'Emily Clark',
        '6677889900',
        '1988-11-10',
        'Content writer and avid traveler.'
    ),
    (
        'susan.wright@example.com',
        'Susan Wright',
        '5566778899',
        '1995-06-05',
        'Data scientist with a passion for machine learning.'
    ),
    (
        'david.brown@example.com',
        'David Brown',
        '4455667788',
        '1993-02-14',
        'Project manager experienced in agile methodologies.'
    ),
    (
        'nancy.lewis@example.com',
        'Nancy Lewis',
        '3344556677',
        '1987-09-09',
        'HR professional with a background in tech recruitment.'
    ),
    (
        'kevin.martin@example.com',
        'Kevin Martin',
        '2233445566',
        '1991-12-25',
        'Full-stack developer who enjoys coding in JavaScript.'
    ),
    (
        'linda.thomas@example.com',
        'Linda Thomas',
        '9988776655',
        '1982-04-19',
        'Financial analyst specializing in data-driven insights.'
    ),
    (
        'robert.moore@example.com',
        'Robert Moore',
        '8877665544',
        '1994-08-03',
        'UX/UI designer passionate about creating intuitive interfaces.'
    );

INSERT INTO
    MEDICAL_RECORD (
        USER_EMAIL,
        BLOOD_GROUP,
        BIRTH_MARK
    )
VALUES (
        'john.doe@example.com',
        'A+',
        'Small mole on left wrist.'
    ),
    (
        'jane.smith@example.com',
        'O-',
        'Scar on right knee.'
    ),
    (
        'mike.jones@example.com',
        'B+',
        'Freckle on left cheek.'
    ),
    (
        'emily.clark@example.com',
        'AB-',
        'Birthmark on back of neck.'
    ),
    (
        'susan.wright@example.com',
        'A-',
        'Dark spot on right shoulder.'
    ),
    (
        'david.brown@example.com',
        'O+',
        'Tattoo on left forearm.'
    ),
    (
        'nancy.lewis@example.com',
        'B-',
        'Small birthmark on left ankle.'
    ),
    (
        'kevin.martin@example.com',
        'AB+',
        'Scar on lower abdomen.'
    ),
    (
        'linda.thomas@example.com',
        'A+',
        'Light mole on upper arm.'
    ),
    (
        'robert.moore@example.com',
        'O+',
        'Birthmark below the collarbone.'
    );

INSERT INTO
    CONTACTS (HOST_EMAIL, CONTACT_EMAIL)
VALUES
    -- Contacts for John Doe
    (
        'john.doe@example.com',
        'jane.smith@example.com'
    ),
    (
        'john.doe@example.com',
        'mike.jones@example.com'
    ),
    (
        'john.doe@example.com',
        'emily.clark@example.com'
    ),
-- Contacts for Jane Smith
(
    'jane.smith@example.com',
    'john.doe@example.com'
),
(
    'jane.smith@example.com',
    'susan.wright@example.com'
),
(
    'jane.smith@example.com',
    'david.brown@example.com'
),
-- Contacts for Mike Jones
(
    'mike.jones@example.com',
    'emily.clark@example.com'
),
(
    'mike.jones@example.com',
    'nancy.lewis@example.com'
),
(
    'mike.jones@example.com',
    'kevin.martin@example.com'
),
-- Contacts for Emily Clark
(
    'emily.clark@example.com',
    'john.doe@example.com'
),
(
    'emily.clark@example.com',
    'linda.thomas@example.com'
),
(
    'emily.clark@example.com',
    'robert.moore@example.com'
),
-- Contacts for Susan Wright
(
    'susan.wright@example.com',
    'jane.smith@example.com'
),
(
    'susan.wright@example.com',
    'mike.jones@example.com'
),
(
    'susan.wright@example.com',
    'david.brown@example.com'
),
-- Contacts for David Brown
(
    'david.brown@example.com',
    'nancy.lewis@example.com'
),
(
    'david.brown@example.com',
    'kevin.martin@example.com'
),
(
    'david.brown@example.com',
    'linda.thomas@example.com'
),
-- Contacts for Nancy Lewis
(
    'nancy.lewis@example.com',
    'emily.clark@example.com'
),
(
    'nancy.lewis@example.com',
    'john.doe@example.com'
),
(
    'nancy.lewis@example.com',
    'robert.moore@example.com'
),
-- Contacts for Kevin Martin
(
    'kevin.martin@example.com',
    'linda.thomas@example.com'
),
(
    'kevin.martin@example.com',
    'john.doe@example.com'
),
(
    'kevin.martin@example.com',
    'jane.smith@example.com'
),
-- Contacts for Linda Thomas
(
    'linda.thomas@example.com',
    'mike.jones@example.com'
),
(
    'linda.thomas@example.com',
    'robert.moore@example.com'
),
(
    'linda.thomas@example.com',
    'john.doe@example.com'
),
-- Contacts for Robert Moore
(
    'robert.moore@example.com',
    'kevin.martin@example.com'
),
(
    'robert.moore@example.com',
    'nancy.lewis@example.com'
),
(
    'robert.moore@example.com',
    'susan.wright@example.com'
);