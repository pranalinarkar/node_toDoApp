//const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID}=require('mongodb');



MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
  if(err){
    return console.log('Error connecting to mongodb server',err);
  }
  console.log('Sucessfully connected to mongodb server');
  const db=client.db('TodoApp');

// db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
//   console.log(result);
// });

// db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
//   console.log(result);
// });
db.collection('Users').findOneAndDelete({_id:new ObjectID("5c28f5c63fccc76e0fc20c40")}).then((result)=>{
  console.log(result);
});
db.collection('Users').deleteMany({name:'Priyal'}).then((result)=>{
  console.log(result);
});




  //client.close();
});
