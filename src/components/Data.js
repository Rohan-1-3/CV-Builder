import { v4 as uuid } from "uuid";

// Sample data for Personal Details
const personalDetail = {
    fullName: "John Doe",
    phone: "123-456-7890",
    email: "john.doe@example.com",
    address: "123 Main Street, City, Country",
    summary: "Experienced professional seeking new opportunities in the tech industry."
};

// Sample data for Education
const educationData = [
    {
        name: "Bachelor of Science in Computer Science",
        institution: "XYZ University",
        startDate: "2016-09",
        endDate: "2020-05",
        location: "City, Country",
        id: uuid(),
        active: false,
        visibility: true
    },
    {
        name: "Master of Business Administration",
        institution: "ABC Business School",
        startDate: "2018-08",
        endDate: "2020-06",
        location: "City2, Country2",
        id: uuid(),
        active: false,
        visibility: true
    }
]

// Sample data for Skills
const skillData = [
    {
        id: uuid(),
        skillName: "JavaScript",
        active: false,
        visibility: true
    },
    {
        id: uuid(),
        skillName: "Python",
        active: false,
        visibility: true
    },
    {
        id: uuid(),
        skillName: "React",
        active: false,
        visibility: true
    },{
        id: uuid(),
        skillName: "Node.js",
        active: false,
        visibility: true
    },
    {
        id: uuid(),
        skillName: "SQL",
        active: false,
        visibility: true
    },
    {
        id: uuid(),
        skillName: "Git",
        active: false,
        visibility: true
    },{
        id: uuid(),
        skillName: "Node.js",
        active: false,
        visibility: true
    },
    {
        id: uuid(),
        skillName: "SQL",
        active: false,
        visibility: true
    },
    {
        id: uuid(),
        skillName: "Git",
        active: false,
        visibility: true
    },
];

// Sample data for Experience
const experienceData = [
    {
        position: "Software Engineer",
        company: "Tech Solutions Inc.",
        startDate: "2020-06",
        endDate: "2022-09",
        location: "City, Country",
        description: "Developed scalable web applications using React and Node.js.",
        id: uuid(),
        active: false,
        visibility: true
    },
    {
        position: "Data Analyst",
        company: "Data Insights Co.",
        startDate: "2019-03",
        endDate: "2020-05",
        location: "City3, Country3",
        description: "Analyzed large datasets to derive insights for business decisions.",
        id: uuid(),
        active: false,
        visibility: true
    }
];

export {experienceData, personalDetail, educationData, skillData}
