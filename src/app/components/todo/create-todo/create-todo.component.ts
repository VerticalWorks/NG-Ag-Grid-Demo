import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Todo } from 'src/app/shared/actions/todo.actions';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.less']
})
export class CreateTodoComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private fb: FormBuilder, private store: Store) {
     this.createForm()
   }

  ngOnInit(): void {
  }
  createForm() {
    let id = Date.now().toString();
    this.formGroup = this.fb.group({
      id: [id, Validators.required ],
      title: ['your title here', Validators.required ],
      text: ['your text here', Validators.required],
      isCompleted: [false, Validators.required]
   });
  }
  
  addTodo(id:string, title:string, text:string, isCompleted:boolean) {
    let obj = new Todo.Add({id, title, text, isCompleted})
    this.store.dispatch(obj);
  }
}
