
const attendanceData = [
    {
      id: 1,
      class: "10",
      section: "A",
      name: "Mithlesh Kumar Singh",
      roll: 1,
      present: false,
      late: false,
    },
    {
      id: 2,
      class: "10",
      section: "B",
      name: "Mithlesh Kumar Singh",
      roll: 2,
      present: false,
      late: false,
    },
    {
      id: 3,
      class: "10",
      section: "C",
      name: "Mithlesh Kumar Singh",
      roll: 3,
      present: false,
      late: false,
    },
    {
        "id": 1,
        "class": "8",
        "section": "C",
        "name": "Gita Karki",
        "roll": 7,
        "present": false,
        "late": false
    },
    {
        "id": 2,
        "class": "10",
        "section": "B",
        "name": "Rajendra Mahato",
        "roll": 17,
        "present": false,
        "late": false
    },
    {
        "id": 3,
        "class": "10",
        "section": "A",
        "name": "Ram Bahadur",
        "roll": 26,
        "present": false,
        "late": false
    },
    {
        "id": 4,
        "class": "9",
        "section": "B",
        "name": "Ram Bahadur",
        "roll": 7,
        "present": false,
        "late": false
    },
    {
        "id": 5,
        "class": "10",
        "section": "A",
        "name": "Kamal Thapa",
        "roll": 5,
        "present": false,
        "late": false
    },
    {
        "id": 6,
        "class": "10",
        "section": "B",
        "name": "Manoj Adhikari",
        "roll": 26,
        "present": false,
        "late": false
    },
    {
        "id": 7,
        "class": "8",
        "section": "B",
        "name": "Ram Bahadur",
        "roll": 30,
        "present": false,
        "late": false
    },
    {
        "id": 8,
        "class": "9",
        "section": "C",
        "name": "Ramesh Gupta",
        "roll": 1,
        "present": false,
        "late": false
    },
    {
        "id": 9,
        "class": "10",
        "section": "A",
        "name": "Mithlesh Kumar Singh",
        "roll": 20,
        "present": false,
        "late": false
    },
    {
        "id": 10,
        "class": "8",
        "section": "C",
        "name": "Ramesh Gupta",
        "roll": 10,
        "present": false,
        "late": false
    },
    {
        "id": 11,
        "class": "8",
        "section": "C",
        "name": "Ramesh Gupta",
        "roll": 34,
        "present": false,
        "late": false
    },
    {
        "id": 12,
        "class": "10",
        "section": "A",
        "name": "Sita Sharma",
        "roll": 34,
        "present": false,
        "late": false
    },
    {
        "id": 13,
        "class": "9",
        "section": "A",
        "name": "Ram Bahadur",
        "roll": 26,
        "present": false,
        "late": false
    },
    {
        "id": 14,
        "class": "8",
        "section": "C",
        "name": "Krishna Acharya",
        "roll": 14,
        "present": false,
        "late": false
    },
    {
        "id": 15,
        "class": "9",
        "section": "C",
        "name": "Sita Sharma",
        "roll": 4,
        "present": false,
        "late": false
    },
    {
        "id": 16,
        "class": "8",
        "section": "C",
        "name": "Manoj Adhikari",
        "roll": 11,
        "present": false,
        "late": false
    },
    {
        "id": 17,
        "class": "8",
        "section": "A",
        "name": "Rajendra Mahato",
        "roll": 42,
        "present": false,
        "late": false
    },
    {
        "id": 18,
        "class": "8",
        "section": "A",
        "name": "Manoj Adhikari",
        "roll": 4,
        "present": false,
        "late": false
    },
    {
        "id": 19,
        "class": "8",
        "section": "B",
        "name": "Gita Karki",
        "roll": 9,
        "present": false,
        "late": false
    },
    {
        "id": 20,
        "class": "9",
        "section": "A",
        "name": "Rajendra Mahato",
        "roll": 36,
        "present": false,
        "late": false
    },
    {
        "id": 21,
        "class": "8",
        "section": "A",
        "name": "Krishna Acharya",
        "roll": 4,
        "present": false,
        "late": false
    },
    {
        "id": 22,
        "class": "8",
        "section": "C",
        "name": "Ramesh Gupta",
        "roll": 37,
        "present": false,
        "late": false
    },
    {
        "id": 23,
        "class": "9",
        "section": "B",
        "name": "Ram Bahadur",
        "roll": 43,
        "present": false,
        "late": false
    },
    {
        "id": 24,
        "class": "10",
        "section": "A",
        "name": "Gita Karki",
        "roll": 44,
        "present": false,
        "late": false
    },
    {
        "id": 25,
        "class": "8",
        "section": "B",
        "name": "Manoj Adhikari",
        "roll": 10,
        "present": false,
        "late": false
    },
    {
        "id": 26,
        "class": "9",
        "section": "C",
        "name": "Kamal Thapa",
        "roll": 12,
        "present": false,
        "late": false
    },
    {
        "id": 27,
        "class": "8",
        "section": "B",
        "name": "Rajendra Mahato",
        "roll": 35,
        "present": false,
        "late": false
    },
    {
        "id": 28,
        "class": "10",
        "section": "C",
        "name": "Rajendra Mahato",
        "roll": 9,
        "present": false,
        "late": false
    },
    {
        "id": 29,
        "class": "8",
        "section": "C",
        "name": "Rajendra Mahato",
        "roll": 38,
        "present": false,
        "late": false
    },
    {
        "id": 30,
        "class": "9",
        "section": "C",
        "name": "Sunita Rai",
        "roll": 9,
        "present": false,
        "late": false
    },
    {
        "id": 31,
        "class": "8",
        "section": "B",
        "name": "Krishna Acharya",
        "roll": 21,
        "present": false,
        "late": false
    },
    {
        "id": 32,
        "class": "9",
        "section": "B",
        "name": "Manoj Adhikari",
        "roll": 23,
        "present": false,
        "late": false
    },
    {
        "id": 33,
        "class": "8",
        "section": "A",
        "name": "Gita Karki",
        "roll": 46,
        "present": false,
        "late": false
    },
    {
        "id": 34,
        "class": "9",
        "section": "C",
        "name": "Mithlesh Kumar Singh",
        "roll": 10,
        "present": false,
        "late": false
    },
    {
        "id": 35,
        "class": "8",
        "section": "B",
        "name": "Kamal Thapa",
        "roll": 33,
        "present": false,
        "late": false
    },
    {
        "id": 36,
        "class": "9",
        "section": "A",
        "name": "Mithlesh Kumar Singh",
        "roll": 29,
        "present": false,
        "late": false
    },
    {
        "id": 37,
        "class": "8",
        "section": "C",
        "name": "Rajendra Mahato",
        "roll": 10,
        "present": false,
        "late": false
    },
    {
        "id": 38,
        "class": "10",
        "section": "B",
        "name": "Krishna Acharya",
        "roll": 28,
        "present": false,
        "late": false
    },
    {
        "id": 39,
        "class": "8",
        "section": "C",
        "name": "Ram Bahadur",
        "roll": 37,
        "present": false,
        "late": false
    },
    {
        "id": 40,
        "class": "10",
        "section": "B",
        "name": "Gita Karki",
        "roll": 21,
        "present": false,
        "late": false
    },
    {
        "id": 41,
        "class": "9",
        "section": "B",
        "name": "Gita Karki",
        "roll": 39,
        "present": false,
        "late": false
    },
    {
        "id": 42,
        "class": "8",
        "section": "C",
        "name": "Sita Sharma",
        "roll": 7,
        "present": false,
        "late": false
    },
    {
        "id": 43,
        "class": "9",
        "section": "B",
        "name": "Rajendra Mahato",
        "roll": 24,
        "present": false,
        "late": false
    },
    {
        "id": 44,
        "class": "10",
        "section": "A",
        "name": "Manoj Adhikari",
        "roll": 14,
        "present": false,
        "late": false
    },
    {
        "id": 45,
        "class": "10",
        "section": "A",
        "name": "Ram Bahadur",
        "roll": 43,
        "present": false,
        "late": false
    },
    {
        "id": 46,
        "class": "10",
        "section": "C",
        "name": "Sunita Rai",
        "roll": 46,
        "present": false,
        "late": false
    },
    {
        "id": 47,
        "class": "10",
        "section": "C",
        "name": "Gita Karki",
        "roll": 8,
        "present": false,
        "late": false
    },
    {
        "id": 48,
        "class": "10",
        "section": "B",
        "name": "Sunita Rai",
        "roll": 11,
        "present": false,
        "late": false
    },
    {
        "id": 49,
        "class": "10",
        "section": "A",
        "name": "Gita Karki",
        "roll": 30,
        "present": false,
        "late": false
    },
    {
        "id": 50,
        "class": "8",
        "section": "B",
        "name": "Sunita Rai",
        "roll": 44,
        "present": false,
        "late": false
    },
    {
        "id": 51,
        "class": "10",
        "section": "C",
        "name": "Rajendra Mahato",
        "roll": 28,
        "present": false,
        "late": false
    },
    {
        "id": 52,
        "class": "8",
        "section": "B",
        "name": "Mithlesh Kumar Singh",
        "roll": 15,
        "present": false,
        "late": false
    },
    {
        "id": 53,
        "class": "8",
        "section": "C",
        "name": "Sunita Rai",
        "roll": 21,
        "present": false,
        "late": false
    },
    {
        "id": 54,
        "class": "10",
        "section": "C",
        "name": "Manoj Adhikari",
        "roll": 28,
        "present": false,
        "late": false
    },
    {
        "id": 55,
        "class": "8",
        "section": "B",
        "name": "Rajendra Mahato",
        "roll": 47,
        "present": false,
        "late": false
    },
    {
        "id": 56,
        "class": "10",
        "section": "A",
        "name": "Ram Bahadur",
        "roll": 10,
        "present": false,
        "late": false
    },
    {
        "id": 57,
        "class": "10",
        "section": "A",
        "name": "Kamal Thapa",
        "roll": 26,
        "present": false,
        "late": false
    },
    {
        "id": 58,
        "class": "8",
        "section": "A",
        "name": "Ram Bahadur",
        "roll": 48,
        "present": false,
        "late": false
    },
    {
        "id": 59,
        "class": "8",
        "section": "C",
        "name": "Krishna Acharya",
        "roll": 10,
        "present": false,
        "late": false
    },
    {
        "id": 60,
        "class": "8",
        "section": "A",
        "name": "Gita Karki",
        "roll": 48,
        "present": false,
        "late": false
    },
    {
        "id": 61,
        "class": "8",
        "section": "C",
        "name": "Ramesh Gupta",
        "roll": 23,
        "present": false,
        "late": false
    },
    {
        "id": 62,
        "class": "8",
        "section": "B",
        "name": "Gita Karki",
        "roll": 9,
        "present": false,
        "late": false
    },
    {
        "id": 63,
        "class": "8",
        "section": "A",
        "name": "Ram Bahadur",
        "roll": 8,
        "present": false,
        "late": false
    },
    {
        "id": 64,
        "class": "9",
        "section": "C",
        "name": "Ram Bahadur",
        "roll": 38,
        "present": false,
        "late": false
    },
    {
        "id": 65,
        "class": "9",
        "section": "A",
        "name": "Ram Bahadur",
        "roll": 44,
        "present": false,
        "late": false
    },
    {
        "id": 66,
        "class": "10",
        "section": "C",
        "name": "Mithlesh Kumar Singh",
        "roll": 17,
        "present": false,
        "late": false
    },
    {
        "id": 67,
        "class": "8",
        "section": "B",
        "name": "Rajendra Mahato",
        "roll": 27,
        "present": false,
        "late": false
    },
    {
        "id": 68,
        "class": "8",
        "section": "C",
        "name": "Sita Sharma",
        "roll": 11,
        "present": false,
        "late": false
    },
    {
        "id": 69,
        "class": "8",
        "section": "C",
        "name": "Mithlesh Kumar Singh",
        "roll": 19,
        "present": false,
        "late": false
    },
    {
        "id": 70,
        "class": "8",
        "section": "C",
        "name": "Rajendra Mahato",
        "roll": 22,
        "present": false,
        "late": false
    },
    {
        "id": 71,
        "class": "9",
        "section": "C",
        "name": "Mithlesh Kumar Singh",
        "roll": 18,
        "present": false,
        "late": false
    },
    {
        "id": 72,
        "class": "8",
        "section": "B",
        "name": "Krishna Acharya",
        "roll": 22,
        "present": false,
        "late": false
    },
    {
        "id": 73,
        "class": "9",
        "section": "A",
        "name": "Kamal Thapa",
        "roll": 14,
        "present": false,
        "late": false
    },
    {
        "id": 74,
        "class": "9",
        "section": "C",
        "name": "Rajendra Mahato",
        "roll": 17,
        "present": false,
        "late": false
    },
    {
        "id": 75,
        "class": "9",
        "section": "A",
        "name": "Mithlesh Kumar Singh",
        "roll": 13,
        "present": false,
        "late": false
    },
    {
        "id": 76,
        "class": "9",
        "section": "C",
        "name": "Rajendra Mahato",
        "roll": 7,
        "present": false,
        "late": false
    },
    {
        "id": 77,
        "class": "9",
        "section": "C",
        "name": "Kamal Thapa",
        "roll": 33,
        "present": false,
        "late": false
    },
    {
        "id": 78,
        "class": "10",
        "section": "C",
        "name": "Sunita Rai",
        "roll": 34,
        "present": false,
        "late": false
    },
    {
        "id": 79,
        "class": "10",
        "section": "A",
        "name": "Krishna Acharya",
        "roll": 37,
        "present": false,
        "late": false
    },
    {
        "id": 80,
        "class": "8",
        "section": "B",
        "name": "Mithlesh Kumar Singh",
        "roll": 5,
        "present": false,
        "late": false
    },
    {
        "id": 81,
        "class": "9",
        "section": "C",
        "name": "Ram Bahadur",
        "roll": 21,
        "present": false,
        "late": false
    },
    {
        "id": 82,
        "class": "10",
        "section": "A",
        "name": "Rajendra Mahato",
        "roll": 50,
        "present": false,
        "late": false
    },
    {
        "id": 83,
        "class": "10",
        "section": "C",
        "name": "Sita Sharma",
        "roll": 19,
        "present": false,
        "late": false
    },
    {
        "id": 84,
        "class": "10",
        "section": "C",
        "name": "Ramesh Gupta",
        "roll": 15,
        "present": false,
        "late": false
    },
    {
        "id": 85,
        "class": "9",
        "section": "B",
        "name": "Kamal Thapa",
        "roll": 33,
        "present": false,
        "late": false
    },
    {
        "id": 86,
        "class": "10",
        "section": "B",
        "name": "Sita Sharma",
        "roll": 42,
        "present": false,
        "late": false
    },
    {
        "id": 87,
        "class": "9",
        "section": "B",
        "name": "Rajendra Mahato",
        "roll": 5,
        "present": false,
        "late": false
    },
    {
        "id": 88,
        "class": "9",
        "section": "C",
        "name": "Ram Bahadur",
        "roll": 27,
        "present": false,
        "late": false
    },
    {
        "id": 89,
        "class": "10",
        "section": "A",
        "name": "Manoj Adhikari",
        "roll": 45,
        "present": false,
        "late": false
    },
    {
        "id": 90,
        "class": "8",
        "section": "B",
        "name": "Gita Karki",
        "roll": 22,
        "present": false,
        "late": false
    },
    {
        "id": 91,
        "class": "8",
        "section": "C",
        "name": "Gita Karki",
        "roll": 6,
        "present": false,
        "late": false
    },
    {
        "id": 92,
        "class": "8",
        "section": "C",
        "name": "Mithlesh Kumar Singh",
        "roll": 26,
        "present": false,
        "late": false
    },
    {
        "id": 93,
        "class": "9",
        "section": "A",
        "name": "Ram Bahadur",
        "roll": 3,
        "present": false,
        "late": false
    },
    {
        "id": 94,
        "class": "10",
        "section": "C",
        "name": "Kamal Thapa",
        "roll": 5,
        "present": false,
        "late": false
    },
    {
        "id": 95,
        "class": "10",
        "section": "A",
        "name": "Ram Bahadur",
        "roll": 42,
        "present": false,
        "late": false
    },
    {
        "id": 96,
        "class": "9",
        "section": "A",
        "name": "Gita Karki",
        "roll": 27,
        "present": false,
        "late": false
    },
    {
        "id": 97,
        "class": "8",
        "section": "C",
        "name": "Ram Bahadur",
        "roll": 27,
        "present": false,
        "late": false
    },
    {
        "id": 98,
        "class": "8",
        "section": "A",
        "name": "Mithlesh Kumar Singh",
        "roll": 28,
        "present": false,
        "late": false
    },
    {
        "id": 99,
        "class": "10",
        "section": "A",
        "name": "Mithlesh Kumar Singh",
        "roll": 18,
        "present": false,
        "late": false
    },
    {
        "id": 100,
        "class": "10",
        "section": "B",
        "name": "Rajendra Mahato",
        "roll": 14,
        "present": false,
        "late": false
    },


  ];

  export default attendanceData;
  
