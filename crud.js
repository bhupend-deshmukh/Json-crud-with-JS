const fs = require('fs');
const input = require('readline-sync');
var data=JSON.parse(fs.readFileSync('./crud.json'))
// console.log(data);

function insertData(){
 
    dict = {}
    dict['User_Name']=input.question('enter your user name:-')
    dict['Gmail_Address']=input.questionEMail('enter your email:-')
    dict['Mobile_No']=input.questionInt('enter your Mobile_No:-')
    let exists = false
    for (let obj of data){
        if (obj.Mobile_No == dict.Mobile_No){
            console.log("Data already exists")
            exists = true
            break
        }
    }
    
    if(!exists){
        data.push(dict)
        var j = JSON.stringify(data,null,4)
        console.log(j);
        fs.writeFileSync('./crud.json',j)
        console.log("data added successfully")
    }
}

function UpdateData(){

    var Mobile_No = input.questionInt('enter your contact number')
    var exists = false
    for (j of data){
            for (i of Object.values(j)){
                if (Mobile_No == i){
                    j['User_Name']=input.question('enter your updated user name:-')
                    j['Gmail_Address']=input.questionEMail('enter your updated email:-')
                exists = true
                }
            }
        }var m = JSON.stringify(data,null,4)
        fs.writeFileSync('crud.json',m) 
    if (!exists){
        console.log('this is mibile no not exists !!!');
    }
 }


function CheckDeta(){

    var Mobile_No = input.questionInt('enter your contact number')
    var exists = false
    for (j of data){
        for (k of Object.values(j)){
            if (k == Mobile_No){
                exists = true
                console.log(j)
            }
        }
    }
    if (!exists){
        console.log('data not exist\nyou login your detail !!!');
    }
}


function DeleteData(){
    
    var Mobile_No = input.questionInt('enter your contact number')
    var exists = false

    for (j in data){
        for (i of Object.values(data[j])){
            // console.log(data);
            if (Mobile_No == i){
                data.splice(j, 1)
                exists = true
            }
        }
        
    }
    if (!exists){
        console.log('data not exists !!!');
    }
    var m = JSON.stringify(data,null,4)
    fs.writeFileSync('crud.json',m)
}


console.log('1) Insert \n2) Update \n3) Check Detail \n4) Delete');
let user = input.questionInt('enter your answer :-');

if (user === 1){
    insertData()
}
else if(user === 2){
    UpdateData()
}
else if(user === 3){
    CheckDeta()
}
else if(user === 4){
    DeleteData()
}
else{
    console.log('invalid option !!!!');
}












