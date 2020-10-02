// Section 1
import { State, Action, StateContext, Selector } from '@ngxs/store';
import { patch, append, removeItem, insertItem, updateItem } from '@ngxs/store/operators';
import { TodoModel } from './../models/todo.model'
import { Todo } from './../actions/todo.actions'
import { Injectable } from '@angular/core';

// Section 2
export class TodoStateModel {
    todos: TodoModel[];
}

// Section 3
@State<TodoStateModel[]>({
    name: 'todos',
    defaults: []
})

@Injectable()
class TodosState {
    @Selector()
    static fetchAll(state: TodoStateModel) {
        return state.todos
    }

    @Action(Todo.Add)
    addTodo(ctx: StateContext<TodoStateModel>, { payload }: Todo.Add) {
        ctx.setState(
            patch({
                todos: append([payload])
            })
        );
      }

    @Action(Todo.Edit)
    editTodo(ctx: StateContext<TodoStateModel>, { payload }: Todo.Edit) {
        ctx.setState(
            patch({
                todos: updateItem<TodoModel>(TodoModel => TodoModel === payload, payload)
          })
        );
      }
    @Action(Todo.Delete)
    deleteTodo(ctx: StateContext<TodoStateModel>, { id }: Todo.Delete) {
        ctx.setState(
          patch({
            todos: removeItem<TodoModel>(TodoModel => TodoModel.id === id)
          })
        );
    }
}
