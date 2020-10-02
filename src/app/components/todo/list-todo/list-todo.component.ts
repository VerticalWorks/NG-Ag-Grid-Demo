import { Component, OnInit } from '@angular/core';
import { Store} from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoModel } from 'src/app/shared/models/todo.model';
import { CreateTodoComponent } from './../create-todo/create-todo.component'

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.less']
})
export class ListTodoComponent implements OnInit {
  //@Select() todos$: Observable<TodoStateModel>
  todos$: Observable<TodoModel>;
  dataSource = {}
  displayedColumns: string[] = ['id', 'title', 'text', 'isCompleted'];
  constructor(private store: Store) {
    this.todos$ = this.store.select(state => state.todos.todos);
    this.dataSource = this.todos$
   }

  ngOnInit(): void {
  }

}
