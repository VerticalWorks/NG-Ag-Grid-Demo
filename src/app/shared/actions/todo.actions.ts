import {TodoModel} from './../models/todo.model'
export namespace Todo {
    export class Add {
      static readonly type = '[Todo] Add';
      constructor(public payload: TodoModel) {
        
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