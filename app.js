const express = require('express');
const app = express();

//setting a ejs view engine
app.set('view engine','ejs');

app.listen(4000);

app.get('/',(req,res)=>{
   // res.send('<p>Express</p>')
   // res.sendFile('./view/index.html',{root: __dirname});
   const blogs = [
      {title:'Frrnje',desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, explicabo?"},
      {title:'Frrnje',desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, explicabo?"},
   ]
   res.render('index',{ title: 'Home',blogs});
})

app.get('/about',(req,res)=>{
    // res.send('<p>Express</p>')
   // res.sendFile('./view/about.html',{root: __dirname});
   res.render('about',{ title: 'About'})
 })
// redirect url
//  app.get('/about-me',(req,res)=>{
//     res.redirect('/about');
//  })
app.get('/blogs/create',(req,res)=>{
   res.render('create',{ title: 'Create a new blog'});
})

 // 404 page
 app.use((req,res)=>{
    //res.status(404).sendFile('./view/404.html',{root: __dirname});
      res.status(404).render('404',{ title: 'Error'})
   })
