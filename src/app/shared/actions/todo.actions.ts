import {TodoModel} from './../models/todo.model'
import { StringDecoder } from 'string_decoder';
export namespace Todo {
    export class Add {
      static readonly type = '[Todo] Add';
      constructor(public payload: TodoModel) {
        payload.id =Date.now.toString()
      }
    }
  
    export class Edit {
      static readonly type = '[Todo] Edit';
      constructor(public payload: TodoModel) {}
    }
  
    export class FetchAll {
      static readonly type = '[Todo] Fetch All';
    }
  
    export class Delete {
      static readonly type = '[Todo] Delete';
      constructor(public id: string) {}
    }
  }