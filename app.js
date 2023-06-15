const express = require('express');
const app = express();

app.listen(4000);

//setting a ejs view engine
app.set('view engine','ejs');

app.get('/',(req,res)=>{
   // res.send('<p>Express</p>')
   res.sendFile('./view/index.html',{root: __dirname});
})

app.get('/about',(req,res)=>{
    // res.send('<p>Express</p>')
    res.sendFile('./view/about.html',{root: __dirname});
 })
// redirect url
 app.get('/about-me',(req,res)=>{
    res.redirect('/about');
 })
 // 404 page
 app.use((req,res)=>{
    res.status(404).sendFile('./view/404.html',{root: __dirname});
 })
