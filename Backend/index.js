const express=require("express")
const cors=require("cors")
const {connection}=require('./db')
const {ProductController}=require('./controllers/product')
const app=express()


app.use(express.json())
app.use(cors())

// app.get("/",(req,res)=>{
//     res.send("Hme Page")
// })
app.use("/products", ProductController);

app.listen(7860,async ()=>{
    try{
        await connection
        console.log("Connected With DB")
    }catch(err){
        console.log(err)
    }
    console.log("Server is running at port 7860")
})