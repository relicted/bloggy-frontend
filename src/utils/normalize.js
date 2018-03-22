import {schema} from 'normalizr';


export const USER = new schema.Entity('USERS');


export const POST = new schema.Entity('POSTS', {
  author: USER,
});