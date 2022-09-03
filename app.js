const express = require("express")
const app = express()
const cors = require("cors")
const port = process.env.PORT || 5000
const userRoute = require('./routes/v1/user.route')


app.use(express.json())
app.use(cors())


app.use('/',userRoute)

app.get('/',(req,res)=> {
    res.send("server-running")
})

app.listen(port,()=> {
    console.log("server is running");
})