const expect=require('expect');
const request=require('supertest');

const {app}=require('./../server.js');
const {Todo}=require('./../models/todo.js');

const todos=[{
  text:'Dummy to do 1'
},{
  text:'Dummy to do 2'
}];

beforeEach((done)=>{
  Todo.remove({}).then(()=>{
  return  Todo.insertMany(todos)
}).then(()=>done());
});

describe('It should create new post',()=>{
  it('it should check',(done)=>{
    var text='Some test text';

    request(app)
    .post('/todos')
    .send({text})
    .expect(200)
    .expect((res)=>{
      expect(res.body.text).toBe(text);
    })
    .end((err,res)=>{
      if(err){
        return done(err);
      }
      Todo.find({text}).then((todos)=>{
        expect(todos.length).toBe(1);
        expect(todos[0].text).toBe(text);
        done()
      }).catch((e)=>done(e));

    });
  });

  it('it should not addd bad data',(done)=>{
    request(app)
    .post('/todos')
    .send({})
    .expect(400)
    .end((err,res)=>{
      if(err){
        return done(err);
      }
      Todo.find().then((todos)=>{
        expect(todos.length).toBe(2);
        done()
      }).catch((e)=>done(e));
    });

  });

});

describe('Check GET routes',()=>{
  it('Get route /todos',(done)=>{
    request(app)
    .get('/todos')
    .expect(200)
    .expect((res)=>{
      expect(res.body.todos.length).toBe(2)
    })
    .end(done);
  });
});
