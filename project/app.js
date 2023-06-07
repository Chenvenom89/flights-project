const express = require('express')

const app = express()
app.use(express.static('public'));




app.get("/index.html",(req,res)=>{
  res.sendFile(__dirname+"/index.html")
})
app.get("/index.html",(req,res)=>{
  res.sendFile(__dirname+"/loging.html")
})
app.get("/index.html",(req,res)=>{
  res.sendFile(__dirname+"/sign-up.html")
})

app.get("/login.html",(req,res)=>{
  res.sendFile(__dirname+"/flightsTable.html")
})
app.get("/sing-up.html",(req,res)=>{
  res.sendFile(__dirname+"/login.html")
})

app.get("/login.html",(req,res)=>{
  res.sendFile(__dirname+"/flightsTable.html")
})





app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
