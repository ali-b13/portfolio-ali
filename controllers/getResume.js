const fs = require('fs');
const path=require('path')
const mainDir=require('../utils/getMainPath')
exports.resume = (req, res) => {
  const filePath=path.join(mainDir,'resume/newCV.pdf')
  printIt(filePath,res)
};
function printIt(path,res){
  res.setHeader("Content-Type","application/pdf")
  res.setHeader("Content-Disposition","attachment;filename=Resume.pdf")
    fs.readFile(path,(err,data)=>{
      res.send(data)
    })

}



// const fileUrl = 'http://localhost:4000/download/newCV.pdf';