//const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');

// var obj=new ObjectID;
// console.log(obj);



//Object Deconstructing
// var user={name:'pranali',age:22};
// var {name}=user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
  if(err){
    return console.log('Error connecting to mongodb server',err);
  }
  console.log('Sucessfully connected to mongodb server');
  const db=client.db('TodoApp');
  // db.collection('TodoApp').insertOne({
  //   text:'Something to do',
  //   completedOn:false
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert toDo');
  //   }
  //
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  // db.collection('Users').insertOne({
  //   name:'Pranali',
  //   location:'Mumbai',
  //   age:21
  // },(err,result)=>{
  //   if(err){
  //     return console.log('Unable to insert user',err);
  //   }
  //   console.log((result.ops[0]._id.getTimestamp()));
  // });


  client.close();
});
