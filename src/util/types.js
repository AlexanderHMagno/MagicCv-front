export   const employmentOptions = [
    { key: 'employmentType:1', text: 'Self-employed', value: 'self-employed' },
    { key: 'employmentType:2', text: 'Freelance', value: 'freelance' },
    { key: 'employmentType:3', text: 'Internship', value: 'internship' },
    { key: 'employmentType:4', text: 'Apprenticeship', value: 'apprenticeship'},
    { key: 'employmentType:5', text: 'Permanent Full-time', value: 'PFT' },
    { key: 'employmentType:6', text: 'Permanent Part-time', value: 'PPT' },
    { key: 'employmentType:7', text: 'Contract Full-time', value: 'CFT' },
    { key: 'employmentType:8', text: 'Contract Part-time', value: 'CPT' },
    { key: 'employmentType:9', text: 'Seasonal', value: 'Seasonal' },
    { key: 'employmentType:10', text: 'Casual / On-call', value: 'Casual' },
    { key: 'employmentType:11', text: 'Co-op', value: 'coop' },
  ]


  export   const Months = [
    { key: '1', text: 'January', value: 1 },
    { key: '2', text: 'February', value: 2 },
    { key: '3', text: 'March', value: 3 },
    { key: '4', text: 'April', value: 4 },
    { key: '5', text: 'May', value: 5 },
    { key: '6', text: 'June', value: 6 },
    { key: '7', text: 'July', value: 7 },
    { key: '8', text: 'August', value: 8 },
    { key: '9', text: 'September', value: 9 },
    { key: '10', text: 'October', value: 10 },
    { key: '11', text: 'November', value: 11 },
    { key: '12', text: 'December', value: 12 },
];



// Year Passed array get year 60 years in the past
const currentYear = new Date();
let year = currentYear.getFullYear();
let YearArray = [];
let i = 0
while (i < 60) {
    
    YearArray.push({key: year, text: year, value: year});
    year--;
    i++;
}

export {YearArray};


const YearEducation = () => {
  const currentYear = new Date();
  let year = currentYear.getFullYear() + 5;
  let YearArray = [];
  let i = 0
  while (i < 60) {
      YearArray.push({key: year, text: year, value: year});
      year--;
      i++;
  }

  return YearArray;
}

export {YearEducation}



//Images 

const optionImages = [
  "https://react.semantic-ui.com/images/avatar/large/matthew.png",
  "https://react.semantic-ui.com/images/avatar/large/elliot.jpg",
  "https://react.semantic-ui.com/images/avatar/large/daniel.jpg",
  "https://react.semantic-ui.com/images/avatar/large/molly.png",
  "https://react.semantic-ui.com/images/avatar/large/jenny.jpg",
  "/images/woman1.jpeg",
  "/images/woman2.jpeg",
  "/images/woman3.jpeg",
  "/images/man1.png",
  "/images/man2.png",
  ""
]

  export {optionImages}
