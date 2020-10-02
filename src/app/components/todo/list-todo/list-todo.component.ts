import { Component, OnInit } from '@angular/core';
import { Select, Store} from '@ngxs/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/shared/actions/todo.actions';
import { TodoModel } from 'src/app/shared/models/todo.model';
import { TodoStateModel, TodoState } from '../../../shared/state/todo.state';


@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.less']
})
export class ListTodoComponent implements OnInit {
  @Select() todos$: Observable<TodoStateModel>;
  
  constructor(private store: Store) {
     
   }

  ngOnInit(): void {
  }

}
