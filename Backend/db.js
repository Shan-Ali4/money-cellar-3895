const mongoose=require("mongoose")


const connection = mongoose.connect("mongodb+srv://devilshankhan:shanali@cluster0.scffujt.mongodb.net/PharmEasy?retryWrites=true&w=majority")

module.exports={
    connection
}