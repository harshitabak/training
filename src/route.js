const express = require('express');

const router = express.Router()


router.get('/hello',(req,res)=>{
    res.send("i am get api")
})
let players =
             [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
           
       {
        "name": "gopal",
        "dob": "1/09/1995",
        "gender": "male",
        "city": "delhi",
        "sports": [
            "soccer"
        ],
    },
    {
        "name": "lokesh",
        "dob": "1/1/1990",
        "gender": "male",
        "city": "mumbai",
        "sports": [
            "soccer"
        ],
    },
]

router.post('/players', function (req, res) {

    //LOGIC WILL COME HERE
let newPlayer =req.body
let newPlayersName = newPlayer.name
let isNameRepeted = false;
for(let i=0; i < players.length ; i++){
    if(players[i].name==newPlayersName){
        isNameRepeted =true;
        break;
    }
}
if(isNameRepeted == true){
    res.send('this is player already exist')
} else{
        players.push(newPlayer)
    
    res.send(players)
    }
  
});




module.exports=router