//const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
  if(err){
    return console.log('Error connecting to mongodb server',err);
  }
  console.log('Sucessfully connected to mongodb server');
  const db=client.db('TodoApp');

// db.collection('Todos').findOneAndUpdate({
//   _id:new ObjectID('5c29b85accf1fe7e83cbbf8e')
// },{
//   $set:{
//     completed:true
//   }
// },{
//   returnOriginal:false
// }).then((result)=>{
//   console.log(result);
// });

db.collection('Users').findOneAndUpdate({
  _id:new ObjectID('5c29bb26ccf1fe7e83cbbf8f')
},{
$set:{
  name:'Nikhil'
},
$inc:{
  age:1
}},{
  returnOriginal:false
}).then((result)=>{
  console.log(result)
});





  //client.close();
});
