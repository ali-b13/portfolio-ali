const express=require('express');
const router=express.Router();
const getResume=require('../controllers/getResume')
router.get('/file',getResume.resume)
  
module.exports=router;