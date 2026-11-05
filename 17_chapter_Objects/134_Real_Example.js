// Synthetic training fixture: all personal details and identifiers are fictional.
const user = {
    id: 1001,
    username: "demo-user",
    firstName: "Alex",
    middleName: "Taylor",
    lastName: "Morgan",
    fullName: "Alex Taylor Morgan",
    age: 35,
    dateOfBirth: "1990-01-23",
    gender: "Male",
    email: "alex@example.com",
    alternateEmail: "alex.alt@example.com",
    phone: "+1-202-555-0101",
    isActive: true,
    isEmailVerified: true,
    profilePicture: "https://example.com/images/demo-user.jpg",

    address: {
        houseNumber: "123",
        street: "Example Street",
        landmark: "Near Example Park",
        city: "Example City",
        state: "Example State",
        postalCode: "00000",
        country: "Exampleland",
        coordinates: {
            latitude: 0,
            longitude: 0,
        },
    },

    permanentAddress: {
        village: "Sample Village",
        district: "Example District",
        state: "Example State",
        postalCode: "00000",
        country: "Exampleland",
    },

    languages: ["English", "Hindi", "Bengali"],
    hobbies: ["Reading", "Travelling", "Gardening", "Photography"],
    skills: [
        "JavaScript",
        "Playwright",
        "API Testing",
        "SQL",
        "Git",
    ],

    education: [
        {
            degree: "Bachelor of Technology",
            specialization: "Computer Science",
            institution: "Example University",
            graduationYear: 2010,
            grade: "8.4 CGPA",
        },
        {
            degree: "Master of Business Administration",
            specialization: "Information Systems",
            institution: "Example Business School",
            graduationYear: 2012,
            grade: "Distinction",
        },
    ],

    employment: {
        company: "Example Technologies",
        jobTitle: "QA Engineer",
        department: "Quality Engineering",
        employeeId: "EMP-0001",
        employmentType: "Full-time",
        joiningDate: "2020-06-01",
        annualSalary: 90000,
        currency: "USD",
        isRemote: true,
        officeDays: ["Monday", "Wednesday"],
        manager: {
            name: "Casey Example",
            email: "casey@example.com",
        },
    },

    workExperience: [
        {
            company: "Example Labs",
            role: "Test Engineer",
            from: 2012,
            to: 2016,
        },
        {
            company: "Sample Systems",
            role: "QA Manager",
            from: 2016,
            to: 2020,
        },
    ],

    family: {
        maritalStatus: "Married",
        spouse: {
            name: "Jamie Morgan",
            age: 34,
        },
        children: [
            { name: "Sam Morgan", age: 10, occupation: "Student" },
            { name: "Riley Morgan", age: 8, occupation: "Student" },
        ],
        emergencyContact: {
            name: "Jamie Morgan",
            relationship: "Partner",
            phone: "+1-202-555-0102",
        },
    },

    socialMedia: {
        linkedIn: "https://example.com/profiles/demo-user",
        github: "https://example.com/profiles/demo-user",
        twitter: "https://example.com/profiles/demo-user",
    },

    preferences: {
        theme: "dark",
        language: "English",
        timezone: "UTC",
        notifications: {
            email: true,
            sms: false,
            push: true,
        },
        favoriteColors: ["Blue", "Black", "Green"],
    },

    bankAccounts: [
        {
            bankName: "Sample Bank",
            accountType: "Savings",
            accountNumber: "XXXX-XXXX-0000",
            isPrimary: true,
        },
    ],

    documents: {
        panCard: "EXAMPLE-PAN",
        passportNumber: "EXAMPLE-PASSPORT",
        drivingLicense: "EXAMPLE-LICENSE",
    },

    loginHistory: [
        { date: "2026-08-08T09:30:00Z", device: "Example Laptop", success: true },
        { date: "2026-08-07T17:45:00Z", device: "Example Phone", success: true },
    ],

    createdAt: "2024-01-10T10:00:00Z",
    updatedAt: "2026-08-08T09:30:00Z",
    lastLoginAt: "2026-08-08T09:30:00Z",

    getIntroduction() {
        return `Hi, I am ${this.fullName}, a ${this.employment.jobTitle} from ${this.address.city}.`;
    },

    getFullAddress() {
        return `${this.address.houseNumber}, ${this.address.street}, ${this.address.city}, ${this.address.state} - ${this.address.postalCode}`;
    },
};

console.log(user);
console.log(user.getIntroduction());
console.log(user.getFullAddress());