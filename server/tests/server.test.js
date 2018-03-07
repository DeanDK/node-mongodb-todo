const expect = require('expect');
const request = require('supertest');

const { app } = require('./../server');
const { Todo } = require('./../models/todo');

// beforeEach(done => {
//   Todo.remove({}).then(() => {
//     done();
//   });
// });

//
// describe('POST /todos', () => {
//   it('should create a new todo', done => {
//     var text = 'Test todo text';
//
//     request(app)
//       .post('/todos')
//       .send({ text })
//       .expect(200)
//       .expect(res => {
//         expect(res.body.text).toBe(text);
//       })
//       .end((err, res) => {
//         if (err) {
//           return done(err);
//         }
//
//         Todo.find({text: text})
//           .then(todos => {
//             expect(todos.length).toBe(1);
//             expect(todos[0].text).toBe(text);
//             done();
//           })
//           .catch(e => done(e));
//       });
//   });
// });
const todos = [
  {
    text: 'First text todo'
  },
  {
    text: 'Second text todo'
  }
];

beforeEach(done => {
  Todo.insertMany(todos).then(() => done());
});

describe('GET /todos', () => {
  it('should get all todos', done => {
    request(app)
      .get('/todos')
      .expect(200)
      .expect(res => {
        expect(res.body.todos.length).toBe(2);
      })
      .end(done);
  });
});
