const leaves = [
    // Sarah Johnson (id: 1), managerId: 2
    {
        "id": 1,
        "employeeId": 1,
        "type": "Annual",
        "startDate": "2025-01-10",
        "endDate": "2025-01-12",
        "status": "Approved",
        "reason": "Vacation",
        "appliedOn": "2025-01-02",
        "approvedBy": 2,
        "selected": false,
        "halfDay": false
    },
    {
        "id": 2,
        "employeeId": 1,
        "type": "Sick",
        "startDate": "2025-03-05",
        "endDate": "2025-03-05",
        "status": "Approved",
        "reason": "Flu",
        "appliedOn": "2025-03-05",
        "approvedBy": 2,
        "selected": false,
        "halfDay": true
    },
    {
        "id": 3,
        "employeeId": 1,
        "type": "Casual",
        "startDate": "2025-06-15",
        "endDate": "2025-06-16",
        "status": "Pending",
        "reason": "Personal",
        "appliedOn": "2025-06-10",
        "approvedBy": 2,
        "selected": false,
        "halfDay": false
    },

    // Michael Smith (id: 2), manager
    {
        "id": 4,
        "employeeId": 2,
        "type": "Annual",
        "startDate": "2025-02-20",
        "endDate": "2025-02-25",
        "status": "Approved",
        "reason": "Conference",
        "appliedOn": "2025-02-10",
        "approvedBy": 10,
        "selected": false,
        "halfDay": false
    },
    {
        "id": 5,
        "employeeId": 2,
        "type": "Sick",
        "startDate": "2025-05-10",
        "endDate": "2025-05-10",
        "status": "Approved",
        "reason": "Migraine",
        "appliedOn": "2025-05-10",
        "approvedBy": 10,
        "selected": false,
        "halfDay": true
    },

    // Emily Davis (id: 3), managerId: 2
    {
        "id": 6,
        "employeeId": 3,
        "type": "Sick",
        "startDate": "2025-01-20",
        "endDate": "2025-01-21",
        "status": "Approved",
        "reason": "Cold",
        "appliedOn": "2025-01-20",
        "approvedBy": 2,
        "selected": false,
        "halfDay": false
    },
    {
        "id": 7,
        "employeeId": 3,
        "type": "Annual",
        "startDate": "2025-04-01",
        "endDate": "2025-04-05",
        "status": "Rejected",
        "reason": "Project deadline",
        "appliedOn": "2025-03-15",
        "approvedBy": 2,
        "selected": false,
        "halfDay": false
    },
    {
        "id": 8,
        "employeeId": 3,
        "type": "Maternity",
        "startDate": "2025-08-01",
        "endDate": "2025-11-01",
        "status": "Pending",
        "reason": "Maternity Leave",
        "appliedOn": "2025-07-01",
        "approvedBy": 2,
        "selected": false,
        "halfDay": false
    },

    // James Wilson (id: 4), managerId: 2
    {
        "id": 9,
        "employeeId": 4,
        "type": "Annual",
        "startDate": "2025-02-14",
        "endDate": "2025-02-18",
        "status": "Approved",
        "reason": "Family trip",
        "appliedOn": "2025-02-01",
        "approvedBy": 2,
        "selected": false,
        "halfDay": false
    },
    {
        "id": 10,
        "employeeId": 4,
        "type": "Sick",
        "startDate": "2025-06-20",
        "endDate": "2025-06-20",
        "status": "Approved",
        "reason": "Fever",
        "appliedOn": "2025-06-20",
        "approvedBy": 2,
        "selected": false,
        "halfDay": true
    },
    {
        "id": 11,
        "employeeId": 4,
        "type": "Casual",
        "startDate": "2025-09-10",
        "endDate": "2025-09-11",
        "status": "Approved",
        "reason": "Personal appointment",
        "appliedOn": "2025-09-05",
        "approvedBy": 2,
        "selected": false,
        "halfDay": false
    },

    // Sophia Martinez (id: 5), managerId: 7
    {
        "id": 12,
        "employeeId": 5,
        "type": "Casual",
        "startDate": "2025-03-10",
        "endDate": "2025-03-10",
        "status": "Approved",
        "reason": "Bank work",
        "appliedOn": "2025-03-08",
        "approvedBy": 7,
        "selected": false,
        "halfDay": true
    },
    {
        "id": 13,
        "employeeId": 5,
        "type": "Annual",
        "startDate": "2025-07-01",
        "endDate": "2025-07-10",
        "status": "Pending",
        "reason": "Trip to home country",
        "appliedOn": "2025-06-01",
        "approvedBy": 7,
        "selected": false,
        "halfDay": false
    },
    {
        "id": 14,
        "employeeId": 5,
        "type": "Sick",
        "startDate": "2025-10-05",
        "endDate": "2025-10-06",
        "status": "Approved",
        "reason": "Food poisoning",
        "appliedOn": "2025-10-05",
        "approvedBy": 7,
        "selected": false,
        "halfDay": false
    },

    // Daniel Anderson (id: 6), managerId: 2
    {
        "id": 15,
        "employeeId": 6,
        "type": "Annual",
        "startDate": "2025-04-15",
        "endDate": "2025-04-20",
        "status": "Approved",
        "reason": "Holiday",
        "appliedOn": "2025-04-01",
        "approvedBy": 2,
        "selected": false,
        "halfDay": false
    },
    {
        "id": 16,
        "employeeId": 6,
        "type": "Sick",
        "startDate": "2025-08-01",
        "endDate": "2025-08-02",
        "status": "Rejected",
        "reason": "Insufficient notice",
        "appliedOn": "2025-08-01",
        "approvedBy": 2,
        "selected": false,
        "halfDay": false
    },
    {
        "id": 17,
        "employeeId": 6,
        "type": "Casual",
        "startDate": "2025-11-11",
        "endDate": "2025-11-11",
        "status": "Pending",
        "reason": "Family function",
        "appliedOn": "2025-11-05",
        "approvedBy": 2,
        "selected": false,
        "halfDay": true
    },

    // Olivia Brown (id: 7), manager
    {
        "id": 18,
        "employeeId": 7,
        "type": "Annual",
        "startDate": "2025-05-01",
        "endDate": "2025-05-07",
        "status": "Approved",
        "reason": "Personal time off",
        "appliedOn": "2025-04-15",
        "approvedBy": 10,
        "selected": false,
        "halfDay": false
    },
    {
        "id": 19,
        "employeeId": 7,
        "type": "Sick",
        "startDate": "2025-09-01",
        "endDate": "2025-09-01",
        "status": "Approved",
        "reason": "Headache",
        "appliedOn": "2025-09-01",
        "approvedBy": 10,
        "selected": false,
        "halfDay": true
    },

    // Ethan Lee (id: 8), managerId: 2
    {
        "id": 20,
        "employeeId": 8,
        "type": "Sick",
        "startDate": "2025-02-01",
        "endDate": "2025-02-01",
        "status": "Approved",
        "reason": "Doctor's appointment",
        "appliedOn": "2025-02-01",
        "approvedBy": 2,
        "selected": false,
        "halfDay": true
    },
    {
        "id": 21,
        "employeeId": 8,
        "type": "Annual",
        "startDate": "2025-08-10",
        "endDate": "2025-08-20",
        "status": "Approved",
        "reason": "Europe trip",
        "appliedOn": "2025-07-10",
        "approvedBy": 2,
        "selected": false,
        "halfDay": false
    },
    {
        "id": 22,
        "employeeId": 8,
        "type": "Casual",
        "startDate": "2025-12-24",
        "endDate": "2025-12-24",
        "status": "Approved",
        "reason": "Christmas Eve",
        "appliedOn": "2025-12-01",
        "approvedBy": 2,
        "selected": false,
        "halfDay": false
    },

    // Ava Thompson (id: 9), managerId: 7
    {
        "id": 23,
        "employeeId": 9,
        "type": "Annual",
        "startDate": "2025-01-02",
        "endDate": "2025-01-03",
        "status": "Approved",
        "reason": "New Year holiday",
        "appliedOn": "2024-12-20",
        "approvedBy": 7,
        "selected": false,
        "halfDay": false
    },
    {
        "id": 24,
        "employeeId": 9,
        "type": "Sick",
        "startDate": "2025-05-20",
        "endDate": "2025-05-21",
        "status": "Pending",
        "reason": "Viral infection",
        "appliedOn": "2025-05-19",
        "approvedBy": 7,
        "selected": false,
        "halfDay": false
    },
    {
        "id": 25,
        "employeeId": 9,
        "type": "Casual",
        "startDate": "2025-10-31",
        "endDate": "2025-10-31",
        "status": "Approved",
        "reason": "Personal work",
        "appliedOn": "2025-10-25",
        "approvedBy": 7,
        "selected": false,
        "halfDay": true
    }
];

export default leaves;