const employees = [
    {
        id: 1,
        name: "Sarah Johnson",
        title: "Senior Software Engineer",
        department: "Engineering",
        status: "active",
        email: "sarah.johnson@company.com",
        password: "SarahJ@2025!",
        phone: "+1 (555) 123-4567",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
        role: "employee",
        managerId: 2,
        loggedIn: false,
        birthDate: "1990-05-15",
        location: "Bangalore Office",
        address: {
            streetAddress: "1st Main Street",
            city: "Bangalore",
            country: "India",
            postalCode: "560001"
        },
        employmentType: "Full Time",
        dateOfJoining: "2023-07-21",
        skills: ["Frontend", "HTML", "CSS", "JS", "React"],
        achievements: ["Employee of the Month", "Completed React Migration"],
        managerNotes: [
            { body: "Excellent performance this quarter.", author: "2", date: "2023-12-15" },
            { body: "Strong client relationships.", author: "2", date: "2023-12-15" }
        ],
        roles: ["Web Developer", "Intern"],
        permissions: ["View All Leads", "Edit Deals", "Create Proposals"]
    },
    {
        id: 2,
        name: "Michael Smith",
        title: "Product Manager",
        department: "Product",
        status: "active",
        email: "michael.smith@company.com",
        password: "MikeS@2025!",
        phone: "+1 (555) 234-5678",
        image: "https://randomuser.me/api/portraits/men/45.jpg",
        role: "manager",
        managerId: null,
        loggedIn: false,
        birthDate: "1985-08-20",
        location: "Mumbai Office",
        address: {
            streetAddress: "2nd Cross Road",
            city: "Mumbai",
            country: "India",
            postalCode: "400001"
        },
        employmentType: "Intern",
        dateOfJoining: "2022-03-10",
        skills: ["Product Management", "Leadership", "Agile"],
        achievements: ["Launched new product line"],
        managerNotes: [
            { body: "Great leadership in product launch.", author: "10", date: "2023-11-01" }
        ],
        roles: ["Product Manager"],
        permissions: ["Approve Budgets", "Assign Tasks"]
    },
    {
        id: 3,
        name: "Emily Davis",
        title: "UX Designer",
        department: "Design",
        status: "inactive",
        email: "emily.davis@company.com",
        password: "EmilyD@2025!",
        phone: "+1 (555) 345-6789",
        image: "https://randomuser.me/api/portraits/women/46.jpg",
        role: "employee",
        managerId: 2,
        loggedIn: false,
        birthDate: "1992-11-30",
        location: "New York Office",
        address: {
            streetAddress: "3rd Avenue",
            city: "New York",
            country: "USA",
            postalCode: "10001"
        },
        employmentType: "Intern",
        dateOfJoining: "2024-01-15",
        skills: ["UX Design", "Figma", "Wireframing"],
        achievements: ["Designed new UI flow"],
        managerNotes: [
            { body: "Creative design work.", author: "2", date: "2024-02-10" }
            ],
        roles: ["UX Designer"],
        permissions: ["Edit Designs"]
    },
    {
        id: 4,
        name: "James Wilson",
        title: "Frontend Developer",
        department: "Engineering",
        status: "active",
        email: "james.wilson@company.com",
        password: "JamesW@2025!",
        phone: "+1 (555) 456-7890",
        image: "https://randomuser.me/api/portraits/men/47.jpg",
        role: "employee",
        managerId: 2,
        loggedIn: false,
        birthDate: "1994-02-10",
        location: "London Office",
        address: {
            streetAddress: "4th Boulevard",
            city: "London",
            country: "UK",
            postalCode: "SW1A 0AA"
        },
        employmentType: "Full Time",
        dateOfJoining: "2023-08-01",
        skills: ["Frontend", "JS", "React"],
        achievements: ["Implemented new dashboard"],
        managerNotes: [
                { body: "Quick bug fixes.", author: "2", date: "2023-09-15" }
            ],
        roles: ["Frontend Developer"],
        permissions: ["Edit UI", "Deploy Releases"]
    },
    {
        id: 5,
        name: "Sophia Martinez",
        title: "Data Scientist",
        department: "Data",
        status: "active",
        email: "sophia.martinez@company.com",
        password: "SophiaM@2025!",
        phone: "+1 (555) 567-8901",
        image: "https://randomuser.me/api/portraits/women/48.jpg",
        role: "employee",
        managerId: 7,
        loggedIn: false,
        birthDate: "1991-07-25",
        location: "Tokyo Office",
        address: {
            streetAddress: "5th Street",
            city: "Tokyo",
            country: "Japan",
            postalCode: "100-0001"
        },
        employmentType: "Full Time",
        dateOfJoining: "2023-05-10",
        skills: ["Data Science", "Python", "ML"],
        achievements: ["Built ML model"],
        managerNotes: [
            { body: "Strong analytics skills.", author: "7", date: "2023-06-20" }
        ],
        roles: ["Data Scientist"],
        permissions: ["Access Data", "Run Models"]
    },
    {
        id: 6,
        name: "Daniel Anderson",
        title: "Backend Developer",
        department: "Engineering",
        status: "inactive",
        email: "daniel.anderson@company.com",
        password: "DanA@2025!",
        phone: "+1 (555) 678-9012",
        image: "https://randomuser.me/api/portraits/men/49.jpg",
        role: "employee",
        managerId: 2,
        loggedIn: false,
        birthDate: "1988-09-05",
        location: "Sydney Office",
        address: {
            streetAddress: "6th Lane",
            city: "Sydney",
            country: "Australia",
            postalCode: "2000"
        },
        employmentType: "Full Time",
        dateOfJoining: "2022-11-01",
        skills: ["Backend", "Node.js", "APIs"],
        achievements: ["Optimized API performance"],
        managerNotes: [
                { body: "Reliable backend work.", author: "2", date: "2023-01-10" }
            ],
        roles: ["Backend Developer"],
        permissions: ["Edit APIs", "Deploy Backend"]
    },
    {
        id: 7,
        name: "Olivia Brown",
        title: "HR Manager",
        department: "Human Resources",
        status: "active",
        email: "olivia.brown@company.com",
        password: "OliviaB@2025!",
        phone: "+1 (555) 789-0123",
        image: "https://randomuser.me/api/portraits/women/50.jpg",
        role: "manager",
        managerId: null,
        loggedIn: false,
        birthDate: "1982-01-12",
        location: "Toronto Office",
        address: {
            streetAddress: "7th Crescent",
            city: "Toronto",
            country: "Canada",
            postalCode: "M5H 2N2"
        },
        employmentType: "Part Time",
        dateOfJoining: "2021-09-15",
        skills: ["HR", "Recruitment", "Employee Relations"],
        achievements: ["Improved retention"],
        managerNotes: [
            { body: "Great HR leadership.", author: "10", date: "2022-12-01" }
        ],
        roles: ["HR Manager"],
        permissions: ["Manage Employees", "Approve Leaves"]
    },
    {
        id: 8,
        name: "Ethan Lee",
        title: "DevOps Engineer",
        department: "Engineering",
        status: "active",
        email: "ethan.lee@company.com",
        password: "EthanL@2025!",
        phone: "+1 (555) 890-1234",
        image: "https://randomuser.me/api/portraits/men/51.jpg",
        role: "employee",
        managerId: 2,
        loggedIn: false,
        birthDate: "1993-03-18",
        location: "Berlin Office",
        address: {
            streetAddress: "8th Place",
            city: "Berlin",
            country: "Germany",
            postalCode: "10115"
        },
        employmentType: "Full Time",
        dateOfJoining: "2023-03-01",
        skills: ["DevOps", "CI/CD", "Cloud"],
        achievements: ["Automated deployments"],
        managerNotes: [
            { body: "Efficient DevOps work.", author: "2", date: "2023-04-15" }
        ],
        roles: ["DevOps Engineer"],
        permissions: ["Manage Servers", "Deploy Releases"]
    },
    {
        id: 9,
        name: "Ava Thompson",
        title: "Marketing Specialist",
        department: "Marketing",
        status: "inactive",
        email: "ava.thompson@company.com",
        password: "AvaT@2025!",
        phone: "+1 (555) 901-2345",
        image: "https://randomuser.me/api/portraits/women/52.jpg",
        role: "employee",
        managerId: 7,
        loggedIn: false,
        birthDate: "1995-06-22",
        location: "Paris Office",
        address: {
            streetAddress: "9th Square",
            city: "Paris",
            country: "France",
            postalCode: "75001"
        },
        employmentType: "Full Time",
        dateOfJoining: "2022-06-10",
        skills: ["Marketing", "SEO", "Content"],
        achievements: ["Launched new campaign"],
        managerNotes: [
            { body: "Creative marketing ideas.", author: "7", date: "2022-07-20" }
        ],
        roles: ["Marketing Specialist"],
        permissions: ["Edit Campaigns", "View Analytics"]
    },
    {
        id: 10,
        name: "William Garcia",
        title: "QA Engineer",
        department: "Quality Assurance",
        status: "active",
        email: "william.garcia@company.com",
        password: "WillG@2025!",
        phone: "+1 (555) 012-3456",
        image: "https://randomuser.me/api/portraits/men/53.jpg",
        role: "Admin",
        managerId: null,
        loggedIn: false,
        birthDate: "1980-12-01",
        location: "Singapore Office",
        address: {
            streetAddress: "10th Terrace",
            city: "Singapore",
            country: "Singapore",
            postalCode: "048582"
        },
        employmentType: "Full Time",
        dateOfJoining: "2020-01-01",
        skills: ["QA", "Testing", "Automation"],
        achievements: ["Reduced bugs by 30%"],
        managerNotes: [
            { body: "Thorough QA work.", author: "1", date: "2021-02-10" }
        ],
        roles: ["QA Engineer", "Admin"],
        permissions: ["Run Tests", "Manage QA"]
        }
    ];
export default employees;
