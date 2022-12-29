const express =require('express')
const path=require('path')
const app=express();
const port=process.env.PORT||4000
app.use(express.urlencoded({extended:true}))
app.use(express.json())
 app.use('/download/',express.static(path.resolve('resume')))
app.use('/',(req,res,next)=>{
  console.log(req.body)
  next()
})
const resumeRouter=require('./routes/resumeRouter');
app.use(resumeRouter)

app.listen(port,()=>{console.log("server is running on 4000")})