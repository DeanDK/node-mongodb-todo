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

// const todos = [
//   {
//     text: 'First text todo'
//   },
//   {
//     text: 'Second text todo'
//   }
// ];
//
// beforeEach(done => {
//   Todo.insertMany(todos).then(() => done());
// });
//
// describe('GET /todos', () => {
//   it('should get all todos', done => {
//     request(app)
//       .get('/todos')
//       .expect(200)
//       .expect(res => {
//         expect(res.body.todos.length).toBe(2);
//       })
//       .end(done);
//   });
// });

const todos = [
  {
    text: 'This is just a test :)',
    _id: '5aa01a60adc9f36c0796bc3c'
  },
  {
    text: 'This is yet another test :)'
  }
];

beforeEach(done => {
  Todo.insertMany(todos).then(() => done());
});

describe('GET /todos/:id', () => {
  var id = '5aa01a60adc9f36c0796bc3c';
  it('should find todo by id', done => {
    request(app)
      .get('/todos/:id')
      .expect(200)
      .expect(res => {
        expect(res.body._id).toBe(id);
      })
      .end((err, res) => {
        if (err) {
          return done(err);
        }
      });

    Todo.find({ _id: id })
      .then(todos => {
        expect(todos.length).toBe(1);
        done();
      })
      .catch(e => done(e));
  });
});
