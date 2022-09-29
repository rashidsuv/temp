const express =require("express");
const app=express();
const path=require("path")
const cors=require("cors")


app.use(cors());
app.use(express.json())

const basicPath=(path.join(__dirname,"public"))
app.use(express.static(basicPath))

app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"./public/NotFound.html"))
    res.status(404);
})
const PORT=process.env.PORT|5000;
app.listen(PORT,()=>console.log(`server running on port${PORT}`));