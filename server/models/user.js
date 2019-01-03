var mongoose=require('mongoose');

var user= mongoose.model('Users',{
  email:{
    type:String,
    required:true,
    minLength:1
  },
  name:{
    type:String
  },
  age:{
    type:Number
  }
});



module.exports={
  user:user
};

// var newUser= new user({
//   email:'pnarkar19@gmail.com',
//   name:'Pranali',
//   age:22
// });
// newUser.save().then((doc)=>{
//   console.log(doc);
// },(e)=>{
//   console.log('Unable to save');
// });
