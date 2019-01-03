var mongoose=require('mongoose');

var Todo= mongoose.model('Todo',{
  text:{
    type:String,
    required: true,
    trim:true,
    minLength:1},
  completed: {
    type:Boolean,
  default: false},
  completedAt: {
    type:Number,
  default:null
}
});



module.exports={
  Todo:Todo
};

// var newToDo= new Todo({
//   text:'Cook dinner'
// });
//
// newToDo.save().then((doc)=>{
//   console.log('Saved todo',doc);
// },(e)=>{
//   console.log('Unable to save');
// });

// var newToDo=new Todo({
//   text:'Eat lunch',
//   completed:false,
//   completedAt:Date.now()
// });

// var newToDo=new Todo({
//   text:'Edit a video'
// });
//
// newToDo.save().then((doc)=>{
//   console.log('Saved todo',doc);
// },(e)=>{
//   console.log('Unable to save');
// });
