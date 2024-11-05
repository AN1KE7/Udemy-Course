import express from "express";
const app = express();
const port = 3000;

app.get("/" , (req,res) => {
    res.send("Hello I am Express.")
});

app.get("/About" , (req,res) => {
    res.send("<h1>About Me </h1><p>Hi I am Aniket</p>")
});

app.listen(port , () =>{
    console.log(`Express server running on port ${port}.`)
}); 