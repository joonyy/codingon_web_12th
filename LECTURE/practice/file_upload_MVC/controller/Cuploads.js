exports.uploads = (req,res) =>{
  console.log(req.body);
  res.render('result',{filename:req.file.originalname,id:req.body.ID, password:req.body.PW, name:req.body.name, age:req.body.age});
}