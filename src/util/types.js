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
    { key: '1', text: 'January', short: 'Jan', value: 1 },
    { key: '2', text: 'February', short: 'Feb', value: 2 },
    { key: '3', text: 'March', short: 'Mar', value: 3 },
    { key: '4', text: 'April', short: 'Apr', value: 4 },
    { key: '5', text: 'May', short: 'May', value: 5 },
    { key: '6', text: 'June', short: 'Jun', value: 6 },
    { key: '7', text: 'July', short: 'Jul', value: 7 },
    { key: '8', text: 'August', short: 'Aug', value: 8 },
    { key: '9', text: 'September', short: 'Sep', value: 9 },
    { key: '10', text: 'October', short: 'Oct', value: 10 },
    { key: '11', text: 'November', short: 'Nov', value: 11 },
    { key: '12', text: 'December', short: 'Dec', value: 12 },
];

export const dateFormatter = (month, year) => {
  let short = month;
   Months.forEach((val,index) => {
     if(val.value == month) {
      short = val.short;

     }
    })

    return `${short}/${year}`
}


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
  ""
]

  export {optionImages}

//Information to display on the share page
const generalInformation = {
 
      "info": {
          "id": "6063ea6cbfa3c75fb652bb05",
          "first": "Alex",
          "last": "Doe",
          "bio": "Learning from experts and from my mistakes to use my experience to create better software solutions. My background Finance - Full Stack Developer.",
          "role": "Software Developer",
          "city": "Vancouver",
          "country": "Canada",
          "picture_url": "/images/profile/staff-default.jpeg",
          "phone": "75489876789",
          "address": "1234 Avenue Street",
          "experience": [
              {
                  "id": "60a6e76a0730610015cb1792",
                  "title": "Software Developer",
                  "typeExp": "PFT",
                  "company": "Datz Solutions, Inc.",
                  "location": "Vancouver",
                  "current": true,
                  "startMonth": 4,
                  "startYear": 2020,
                  "endMonth": null,
                  "endYear": null,
                  "description": "1. Deploying software tools, processes, and metrics (GITLAB).\n2. Writing and implementing efficient code (Front & Back)\n3. Identifying areas for modification in existing programs and subsequently developing these modifications (JS, PHP (Laravel))\n4. Testing and evaluating new programs (Api's)\n5. Researching, designing, implementing, and managing software programs",
                  "createdAt": "2021-05-20T22:49:14.040Z"
              },
              {
                  "id": "609247b360dbf52eab76c88d",
                  "title": "Software Developer",
                  "typeExp": "PFT",
                  "company": "Little Chip",
                  "location": "New York, USA",
                  "current": null,
                  "startMonth": 3,
                  "startYear": 2019,
                  "endMonth": 3,
                  "endYear": 2020,
                  "description": "1. Write programs in a variety of computer languages, such as JavaScript, PHP, HTML, CSS . \n2. Update and expand existing programs \n3. Debug programs by testing for and fixing errors \n4. Build and use computer-assisted software engineering (CASE) tools to automate the writing of some code \n5. Use code libraries, which are collections of independent lines of code, to simplify the writing Jquery and React.",
                  "createdAt": "2021-05-05T07:22:27.368Z"
              },
              {
                  "id": "607d28e0fdfcaf22e281af7d",
                  "title": "Administrative Coordinator",
                  "typeExp": "PPT",
                  "company": "Day & Ross ",
                  "location": "Vancouver",
                  "current": null,
                  "startMonth": 7,
                  "startYear": 2018,
                  "endMonth": 3,
                  "endYear": 2019,
                  "description": "1. Send appointment requests via fax, email, and telephone. Update system with appointment\ninformation. Manifest and arrange appointments.\n\n2. Administrative duties including fielding telephone calls; providing assistance to outside agents and\nother terminals when necessary.\n\n3.Agent Freight: Tracking and updating system information on shipments for agent delivery.\n\n4. Driver check-in at end of day requires that you assure the drivers/brokers have all their paperwork in\norder, and to then you compile their data for a report to the manager.",
                  "createdAt": "2021-04-19T06:53:20.030Z"
              },
              {
                  "id": "60b69575ffb341001567147b",
                  "title": "Udemy Instructor",
                  "typeExp": "self-employed",
                  "company": "Udemy",
                  "location": "Bogota, Colombia",
                  "current": true,
                  "startMonth": 8,
                  "startYear": 2017,
                  "endMonth": null,
                  "endYear": null,
                  "description": "Html, Css and Javascript instructor.",
                  "createdAt": "2021-06-01T20:15:49.654Z"
              }
          ],
          "education": [
              {
                  "id": "60bfe37a23d922001572f667",
                  "school": "NorthEastern University",
                  "degree": "Master Computer Science",
                  "field": "Computer Science",
                  "endYear": 2023,
                  "startYear": 2020,
                  "description": "I just need help to find a great o b a help my family something that I have been doing since 2010 without any idea on how",
                  "order": null,
                  "createdAt": "2021-06-08T21:39:06.618Z"
              },
              {
                  "id": "60793c3cd5f15fd2ff45c55b",
                  "school": "RED Academy",
                  "degree": "Associate's degree",
                  "field": "Computer Programming, Specific Applications",
                  "endYear": 2020,
                  "startYear": 2018,
                  "description": "Studing a lot a lot",
                  "order": null,
                  "createdAt": "2021-04-16T07:26:52.837Z"
              }
          ],
          "volunteer": [
              {
                  "id": "60640dce0dae1e6df18d5fa5",
                  "organization": "Red Academy",
                  "role": "coordinator",
                  "location": "Vancouver, Canada",
                  "current": true,
                  "startMonth": 2,
                  "startYear": 2020,
                  "endMonth": null,
                  "endYear": null,
                  "description": "Help organizing the school",
                  "order": 3,
                  "createdAt": "2021-03-31T05:51:10.724Z"
              }
          ],
          "skills": [
              {
                  "id": "609f7aa43083380015d2b2e5",
                  "label": "Honest",
                  "rate": 10
              },
              {
                  "id": "606ec5caa47ba2fd9e47a19a",
                  "label": "JavaScript",
                  "rate": 9
              },
              {
                  "id": "60bfe3b023d922001572f66b",
                  "label": "React",
                  "rate": 9
              },
              {
                  "id": "60bfe3a123d922001572f669",
                  "label": "Php",
                  "rate": 8
              },
              {
                  "id": "60bfe3aa23d922001572f66a",
                  "label": "Node",
                  "rate": 8
              },
              {
                  "id": "60bfe3ba23d922001572f66d",
                  "label": "Photoshop",
                  "rate": 4
              }
          ],
          "email": "alexander@gmail.com"
      }
  
}

export {generalInformation}