
let maids =[
       {

        name:'Hannah',
        age: 25,
        gender:'female',
        height:'160cm',
        occupation:'Housewife',
        country: 'Malaysia',
        bloodtype: 'AB+',
        married: 'No',
        salary: 5000
        },
        {
            name:'Joan',
            age: 25,
            gender:'female',
            height:'160cm',
            occupation:'Housewife',
            country: 'Malaysia',
            bloodtype: 'AB+',
            married: 'No',
            salary: 5000
            },
            {
                name:'Blippi',
                age: 25,
                gender:'male',
                height:'160cm',
                occupation:'Housewife',
                country: 'Malaysia',
                bloodtype: 'AB+',
                married: 'No',
                salary: 7000
                },
                {
                    name:'Kam Kun Kap',
                    age: 18,
                    gender:'female',
                    height:'160cm',
                    occupation:'student',
                    country: 'Thailand',
                    bloodtype: 'AB+',
                    married: 'No',
                    salary: 6000
                    },
                    {
                        name:'Jojo Supranto',
                        age: 25,
                        gender:'male',
                        height:'160cm',
                        occupation:'Housewife',
                        country: 'Malaysia',
                        bloodtype: 'AB+',
                        married: 'No',
                        salary: 3000
                        }
];

let tbody = document.getElementById('tbody');
let selectmaid = document.getElementsByClassName('selectmaid');
let hiremaid = document.getElementById('hiremaid');
let total= document.getElementById('total');
let print = document.getElementById('print');
let info ="";
let totalsalary = [];
let mymaid = [];


let infomaid = maids.map((maids)=>{

    info = info + `<tr>
    <td>${maids.name}</td>
    <td>${maids.age}</td>
    <td>${maids.gender}</td>
    <td>${maids.height}</td>
    <td>${maids.occupation}</td>
    <td>${maids.country}</td>
    <td>${maids.bloodtype}</td>
    <td>${maids.married}</td>
    <td>${maids.salary}</td>
    <td> <input type="checkbox" class='selectmaid' value="${maids.name}"></td>
   
  
</tr>`;

})

tbody.innerHTML = info;



for(let i=0;i<selectmaid.length;i++){
    selectmaid[i].addEventListener('click',function(e){
        

        if(e.target.checked){

            mymaid.push(e.target.value); // to push the value into an array
            hiremaid.innerHTML = `<span> ${mymaid}</span></br>`;

            totalsalary.push(maids[i].salary); // to push the value of the salary into array
        

            
        }
        else{
           let position =  mymaid.indexOf(e.target.value);
            mymaid.splice(position,1);                  // remove the value from array
            hiremaid.innerHTML = `<span> ${mymaid}</span></br>`;

            totalsalary.splice(position,1); // remov the salary from the array

            if(mymaid.length == 0){
                hiremaid.innerHTML = 'No Maid Selected';
            }
        }

        let sumsalary = 0;
        for(let i=0;i<totalsalary.length;++i){
            sumsalary = sumsalary + totalsalary[i]; 
        }
        console.log(sumsalary);
        total.value = sumsalary;
        


    });

}
print.addEventListener('click',()=>{
    console.log('You are printing');
    window.print();
})
