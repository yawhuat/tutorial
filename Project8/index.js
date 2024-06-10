
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
let info ="";
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
            console.log(mymaid);
        }
        else{
           let position =  mymaid.indexOf(e.target.value);
            console.log(e.target.value);
            console.log(position); // to determine the position of an array
            console.log('New Array produced')
            mymaid.splice(position,1);
            console.log(mymaid);
        }


    });

}












