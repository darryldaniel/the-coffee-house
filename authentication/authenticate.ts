import * as passport from 'koa-passport';
import { Strategy as LocalStrategy } from 'passport-local';

passport.serializeUser((user: User, callback) => {
  callback(null, user.id);
});

passport.deserializeUser((user: User, callback) => {
  callback(null, user);
});

export const setupAuthentication = () => {
  passport.use(
    new LocalStrategy(
      (username: string, password: string, callback: Function) => {
        const validUser = users.filter(
          (user: User) => user.username === username
        )[0];

        if (!validUser) {
          return callback(null, false, {
            success: false,
            message: `User doesn't exist`
          });
        }

        if (validUser.password !== password) {
          return callback(null, false, {
            success: false,
            message: `Password invalid`
          });
        }

        return callback(null, validUser, { success: true, roles: validUser.roles });
      }
    )
  );
};

const users: Array<User> = [
  {
    id: 1,
    username: 'darryl',
    password: 'test',
    roles: ['admin']
  },
  {
    id: 2,
    username: 'candice',
    password: 'test',
    roles: ['customer']
  }
];

interface User {
  id: number;
  username: string;
  password: string;
  roles: Array<string>;
}
