import { Component, OnInit } from '@angular/core';
import { Store} from '@ngxs/store';
import { Observable } from 'rxjs';
import { TodoModel } from 'src/app/shared/models/todo.model';
import { CreateTodoComponent } from './../create-todo/create-todo.component'
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

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
  constructor(private store: Store, private matDialog: MatDialog) {
    this.todos$ = this.store.select(state => state.todos.todos);
    this.dataSource = this.todos$
   }

  ngOnInit(): void {
  }

  createTodo(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    let dialogRef = this.matDialog.open(CreateTodoComponent,dialogConfig);
  }

}
