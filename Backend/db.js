const mongoose=require("mongoose")


const connection = mongoose.connect("mongodb+srv://shan_ali:shankhan@cluster0.lq4irhr.mongodb.net/PharmEasy?retryWrites=true&w=majority")

module.exports={
    connection
}