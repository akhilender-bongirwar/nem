const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const Blog  = require('./models/blog');

connection_URL="mongodb+srv://akhil:123akhil@cluster0.b5sslwv.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(connection_URL,{useNewUrlParser:true, useUnifiedTopology:true})
 .then((result)=>{
   console.log("Connected successfully to db");
   app.listen(4000);
 })
 .catch((err)=>{
   console.log(err);
 })

//setting a ejs view engine
app.set('view engine','ejs');

app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

// app.use((req,res,next)=>{
//    console.log(req.path);
//    console.log(req.method);
//    next();
// })


// app.get('/add-blog',(req,res)=>{
//    const blog = new Blog(
//       {
//          title:"New Blog 2",
//          snippet:"about my second blog",
//          body:"fekfnkewfnkew",
//       }
//    );
//    blog.save()
//    .then((result)=>{
//       res.send(result);
//    })
//    .catch((err)=>{
//       console.log(err);
//    });
// })

// app.get('/all-blog',(req,res)=>{
//    Blog.find()
//    .then((result)=>{
//       res.send(result);
//    })
//    .catch((err)=>{
//       console.log(err);
//    })
// })

// app.get('/single-blog',(req,res)=>{
//    Blog.findById('648b32a97d1a31a97977b088')
//    .then((result)=>{
//       res.send(result);
//    })
//    .catch((err)=>{
//       console.log(err);
//    })
// })

app.get('/',(req,res)=>{
   // res.send('<p>Express</p>')
   // res.sendFile('./view/index.html',{root: __dirname});
   // const blogs = [
   //    {title:'Frrnje',desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, explicabo?"},
   //    {title:'Frrnje',desc:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum, explicabo?"},
   // ]
   // res.render('index',{ title: 'Home',blogs});
   res.redirect('/blogs');
})
app.get('/blogs/create', (req, res) => {
   res.render('create', { title: 'Create a new blog' });
 });

app.get('/blogs',(req,res)=>{
   Blog.find().sort({createdAt:-1}) // this shows descending order for blogs
   .then((result)=>{
      res.render('index',{title:"All Blogs",blogs:result});
   })
   .catch((err)=>{
      console.log(err);
   })
})

app.post('/blogs',(req,res)=>{
   console.log(req.body);
  const blog = new Blog(req.body);
  blog.save()
  .then((result)=>{
   res.redirect('/')
  })
  .catch((err)=>{
   console.log(err);
  })  
})

app.get('/blogs/:id',(req,res)=>{
   const id = req.params.id;
   Blog.findById(id)
   .then((result)=>{
      res.render('details',{title:"Details", blog:result})
   })
   .catch((err)=>{
      console.log(err);
   })
})

app.delete('/blogs/:id',(req,res)=>{
   const id = req.params.id;
   Blog.findByIdAndDelete(id)
   .then((result)=>{
      res.json({ redirect:'/blogs'})
   })
   .catch((err)=>{console.log(err)})
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

 // 404 page
 app.use((req,res)=>{
    //res.status(404).sendFile('./view/404.html',{root: __dirname});
      res.status(404).render('404',{ title: 'Error'})
   })
