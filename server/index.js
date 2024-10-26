const express= require('express')
const bodyParser = require('body-parser')
const cors= require("cors")




const app = express()
app.use(cors())  
app.use(bodyParser.json())  // it is used for parsing the json data
app.use(bodyParser.urlencoded({ extended: true })); //passing data from from  to our server




app.get('/', (req, res)=>{
    res.send("hello world")
})


app.post('/create', (req, res)=>{
  const  user = req.body
  console.log("user", user)
  res.status(201).json({
    message: "User Created Successfully",
    data:user
  })
})




app.listen(9000, ()=>{
    console.log('server is running on port 9000')
})