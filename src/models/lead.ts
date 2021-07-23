import { IUser } from './user';

export class Lead implements IUser {
  creation_date = '';
  title = '';
  name = '';
  email = '';
  phone = '';
  city = '';
  country = '';
  language = '';
}
