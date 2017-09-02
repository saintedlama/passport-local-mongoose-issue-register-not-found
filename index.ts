import User from './user';
import * as mongoose from 'mongoose';

mongoose
  .connect('mongodb://localhost/register-not-found', {
    useMongoClient: true
  })
  .then(() => {
    User.register({ username: 'foo' }, 'bar', (err, user) => {
      console.log('User registered', err, user);
    });
  });