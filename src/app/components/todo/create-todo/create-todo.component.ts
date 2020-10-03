import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { Todo } from '../../../shared/actions/todo.actions';
import { TodoModel} from '../../../shared/models/todo.model';

@Component({
  selector: 'app-create-todo',
  templateUrl: './create-todo.component.html',
  styleUrls: ['./create-todo.component.less']
})
export class CreateTodoComponent implements OnInit {
  formGroup: FormGroup;
  constructor(private fb: FormBuilder, private store: Store, public dialogRef: MatDialogRef<CreateTodoComponent>) {
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
  
  addTodo() {
    let newTodo = {} as TodoModel
    newTodo.id = this.formGroup.controls['id'].value
    newTodo.title = this.formGroup.controls['title'].value
    newTodo.text = this.formGroup.controls['text'].value
    newTodo.isCompleted = this.formGroup.controls['isCompleted'].value
    let obj = new Todo.Add(newTodo)
    this.store.dispatch(obj);
    this.dialogRef.close();
  }
  cancel(){
    this.dialogRef.close();
  }
}
