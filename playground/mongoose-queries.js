var ObjectID=require('mongodb');
const {mongoose}=require('./../server/db/mongoose.js');
const {Todo}=require('./../server/models/todo.js');
const {User}=require("./../server/models/user.js")

var id='5c472eb68588b8f889a4017e';
// if(ObjectID.isValid(id)){
//   console.log("Record i not valid");
// }

// Todo.find({
//   _id:id
// }).then((todos)=>{
//   console.log("Todos are:",todos);
// });
//
// Todo.findOne({
//   _id:id
// }).then((todo)=>{
//   console.log("Todo is:",todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log("Record not found");
//   }
//   console.log("Todo by id is:",todo);
// }).catch((e)=>{console.log(e)});

User.findById(id).then((user)=>{
  if(!user){
    return console.log("user not found");
  }
  console.log("User is:",user);
}).catch((e)=>{
  console.log(e)
});
