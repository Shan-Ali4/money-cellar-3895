const express=require("express")
const cors=require("cors")
const {connection}=require('./db')
const app=express()


app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Hme Page")
})

app.listen(7860,async ()=>{
    try{
        await connection
        console.log("Connected With DB")
    }catch(err){
        console.log(err)
    }
    console.log("Server is running at port 7860")
})