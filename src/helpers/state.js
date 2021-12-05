const state = {
  days: [
    {
    id: 1,
    name: "Monday",
    appointments: [
    1,
    2,
    3,
    4,
    5
    ],
    interviewers: [
    2,
    3,
    4,
    5,
    8
    ],
    spots: 2
    },
    {
    id: 2,
    name: "Tuesday",
    appointments: [
    6,
    7,
    8,
    9,
    10
    ],
    interviewers: [
    4,
    5,
    6,
    8,
    10
    ],
    spots: 4
    },
    {
    id: 3,
    name: "Wednesday",
    appointments: [
    11,
    12,
    13,
    14,
    15
    ],
    interviewers: [
    2,
    3,
    4,
    5,
    8
    ],
    spots: 4
    },
    {
    id: 4,
    name: "Thursday",
    appointments: [
    16,
    17,
    18,
    19,
    20
    ],
    interviewers: [
    1,
    2,
    4,
    6,
    8
    ],
    spots: 2
    },
    {
    id: 5,
    name: "Friday",
    appointments: [
    21,
    22,
    23,
    24,
    25
    ],
    interviewers: [
    2,
    3,
    4,
    6,
    9
    ],
    spots: 3
    }
    ],
  appointments: {
    1: {
    id: 1,
    time: "12pm",
    interview: null
    },
    2: {
    id: 2,
    time: "1pm",
    interview: {
    student: "Archie Cohen",
    interviewer: 8
    }
    },
    3: {
    id: 3,
    time: "2pm",
    interview: {
    student: "Chad Takahashi",
    interviewer: 5
    }
    },
    4: {
    id: 4,
    time: "3pm",
    interview: null
    },
    5: {
    id: 5,
    time: "4pm",
    interview: {
    student: "Jamal Jordan",
    interviewer: 4
    }
    },
    6: {
    id: 6,
    time: "12pm",
    interview: null
    },
    7: {
    id: 7,
    time: "1pm",
    interview: null
    },
    8: {
    id: 8,
    time: "2pm",
    interview: null
    },
    9: {
    id: 9,
    time: "3pm",
    interview: null
    },
    10: {
    id: 10,
    time: "4pm",
    interview: {
    student: "Leopold Silvers",
    interviewer: 6
    }
    },
    11: {
    id: 11,
    time: "12pm",
    interview: null
    },
    12: {
    id: 12,
    time: "1pm",
    interview: null
    },
    13: {
    id: 13,
    time: "2pm",
    interview: {
    student: "Liam Martinez",
    interviewer: 5
    }
    },
    14: {
    id: 14,
    time: "3pm",
    interview: null
    },
    15: {
    id: 15,
    time: "4pm",
    interview: null
    },
    16: {
    id: 16,
    time: "12pm",
    interview: {
    student: "Lydia Miller-Jones",
    interviewer: 2
    }
    },
    17: {
    id: 17,
    time: "1pm",
    interview: null
    },
    18: {
    id: 18,
    time: "2pm",
    interview: null
    },
    19: {
    id: 19,
    time: "3pm",
    interview: {
    student: "Maria Boucher",
    interviewer: 2
    }
    },
    20: {
    id: 20,
    time: "4pm",
    interview: {
    student: "Michael Chan-Montoya",
    interviewer: 4
    }
    },
    21: {
    id: 21,
    time: "12pm",
    interview: null
    },
    22: {
    id: 22,
    time: "1pm",
    interview: {
    student: "Richard Wong",
    interviewer: 2
    }
    },
    23: {
    id: 23,
    time: "2pm",
    interview: {
    student: "Yuko Smith",
    interviewer: 2
    }
    },
    24: {
    id: 24,
    time: "3pm",
    interview: null
    },
    25: {
    id: 25,
    time: "4pm",
    interview: null
    }
    },
  interviewers: {
    1: {
    id: 1,
    name: "Sylvia Palmer",
    avatar: "https://i.imgur.com/LpaY82x.png"
    },
    2: {
    id: 2,
    name: "Tori Malcolm",
    avatar: "https://i.imgur.com/Nmx0Qxo.png"
    },
    3: {
    id: 3,
    name: "Mildred Nazir",
    avatar: "https://i.imgur.com/T2WwVfS.png"
    },
    4: {
    id: 4,
    name: "Cohana Roy",
    avatar: "https://i.imgur.com/FK8V841.jpg"
    },
    5: {
    id: 5,
    name: "Sven Jones",
    avatar: "https://i.imgur.com/twYrpay.jpg"
    },
    6: {
    id: 6,
    name: "Susan Reynolds",
    avatar: "https://i.imgur.com/TdOAdde.jpg"
    },
    7: {
    id: 7,
    name: "Alec Quon",
    avatar: "https://i.imgur.com/3tVgsra.jpg"
    },
    8: {
    id: 8,
    name: "Viktor Jain",
    avatar: "https://i.imgur.com/iHq8K8Z.jpg"
    },
    9: {
    id: 9,
    name: "Lindsay Chu",
    avatar: "https://i.imgur.com/nPywAp1.jpg"
    },
    10: {
    id: 10,
    name: "Samantha Stanic",
    avatar: "https://i.imgur.com/okB9WKC.jpg"
    }
    }
};

export { state };