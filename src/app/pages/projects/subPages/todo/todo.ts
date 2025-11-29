import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
    todos: { id: number; todo: string }[] = []; // start empty safely
    
  addTodo(input:HTMLInputElement) {
    const val = input.value;
    const id = Math.random()*1000;
    if (!this.todos.some(item => item?.id == id) && val.trim().length>0) {
      this.todos.push({id:id,todo:val});
    }
    console.log(this.todos,val)
    input.value = '';
  }
  deleteTodo(id:number) {
    this.todos = this.todos.filter(item => item.id !== id);
  }
}
