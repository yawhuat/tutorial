console.log("students are alive");

let students = [
    {
        name:'Jane',
        class: 'Year 7 Blue',
        subjects:[
            {
                Math: 50,
                English: 90,
                Science: 85
                
            }
        ],
    },
    {
        name:'Arthur',
        class: 'Year 7 Blue',
        subjects:[
            {
                Math: 70,
                English: 80,
                Science: 85
                
            }
        ],
    },
    {
        name:'Moe Ang',
        class: 'Year 7 Red',
        subjects:[
            {
                Math: 70,
                English: 80,
                Science: 65
                
            }
        ],
    }
    

]

console.log(students[0].subjects[0].Math);
