import app from '../src/index';
import supertest, { SuperTest, Test } from 'supertest';

describe('app', () => {
  let request: SuperTest<Test>;
  beforeEach(() => {
    request = supertest(app);
  });
  it('should return a successful response for GET /', done => {
    request.get('/')
      .expect(200, done);
  });
  it('should return a successful response for GET /users', done => {
    request.get('/users')
      .expect(200, done);
  });
  it('should return a successful response for GET /user', done => {
    request.get('/user')
      .expect(200, done);
  });
});