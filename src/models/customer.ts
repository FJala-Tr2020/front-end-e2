import { IUser } from './user';

export class Customer implements IUser {
  creation_date = '';
  title = '';
  name = '';
  email = '';
  phone = '';
  city = '';
  country = '';
  language = '';
}
