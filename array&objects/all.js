
let emp =[
    {id:1,name:"Gurumeshh",age:20,cno:222222222,dep:"AI&DS"},
    {id:2,name:"Ashok",age:21,cno:11111111,dep:"CSE"},
    {id:3,name:"Tamizh",age:19,cno:333333333,dep:"CSE"},
    {id:4,name:"Anu",age:22,cno:44444444444,dep:"MEDICAL"},
    {id:5,name:"Aarthi",age:18,cno:55555555,dep:"IT"},
]

//same deparment and show full details about employee

 const res = emp.filter((emp,index,arr)=>
    arr.some((item,i)=>
        i !== index && item.dep === emp.dep
    )
 )
 console.log(res);

 /////////////////////////////////////////////////////////////

 let emp1 =[
    {id:1,name:"Gurumeshh",age:20,cno:222222222,dep:"AI&DS"},
    {id:2,name:"Ashok",age:21,cno:11111111,dep:"CSE"},
    {id:3,name:"Tamizh",age:19,cno:333333333,dep:"CSE"},
    {id:4,name:"Anu",age:22,cno:44444444444,dep:"MEDICAL"},
    {id:5,name:"Aarthi",age:18,cno:55555555,dep:"IT"},
]

//emp with same dep and display the emp based on same dep