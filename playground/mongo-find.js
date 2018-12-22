//const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
  if(err){
    return console.log('Error connecting to mongodb server',err);
  }
  console.log('Sucessfully connected to mongodb server');
  const db=client.db('TodoApp');

  // db.collection('Todos').find({_id:new ObjectID('5c19dc528e69410f6c04458a')}).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Error in fetching',err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log('Todos');
  //   console.log(`count: ${count}`);
  // },(err)=>{
  //   console.log('Error in fetching',err);
  // });

  db.collection('Users').find({name:'Pranali'}).toArray().then((docs)=>{
    console.log('Todos');
    console.log(JSON.stringify(docs,undefined,2));
  },(err)=>{
    console.log('Error in fetching',err);
  });



  //client.close();
});
