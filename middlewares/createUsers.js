const fs = require('fs')
let rawdata = fs.readFileSync('../database/users.json');
let newUsers = []
const bcrypt = require('bcrypt')
db = JSON.parse(rawdata);
console.log(db)
console.log(typeof db)
    for(let i = 0; i<11;i++){
        let user = {}
        user.number = i;
        user.email = (''+i+'th@email.com');
        user.password = (''+i*i*i);
        user.passwordHashed = bcrypt.hashSync(user.password, 10)
        newUsers.push(user)
    }
    console.log(newUsers)
    fs.writeFileSync("../database/users.JSON", JSON.stringify(newUsers))

    //add element
    