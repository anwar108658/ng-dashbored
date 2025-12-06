import { CommonModule } from '@angular/common';
import { Component, isStandalone, OnInit, signal, Signal, WritableSignal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import {ButtonModule} from 'primeng/button'
import { TabsModule } from 'primeng/tabs';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabel } from 'primeng/floatlabel';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { TextareaModule } from 'primeng/textarea';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';


type todo2 = {
  id:number,
  title:string,
  priority:string,
  deadline:Date,
  comments:string,
  isComplete:boolean,
}

type tabItem = {
  route: string;
  label: string;
  icon: string;
  todos: WritableSignal<todo2[]>;
};


@Component({
  selector: 'app-todo2',
  imports: [
    ButtonModule,
    TabsModule,
    InputTextModule,
    FloatLabel,
    DatePickerModule,
    SelectModule,
    TextareaModule,
    CommonModule,
    FormsModule,
    ToastModule,
],
standalone:true,
  templateUrl: './todo2.html',
  styleUrl: './todo2.css',
  providers: [MessageService]
})


export class Todo2 {
  constructor(private messageService:MessageService){};
  today: Date = new Date();

  ngOnInit(){
    setInterval(() => {

    }, 2000);
  }

  tabs:tabItem[] = [
    { route: 'Today', label: 'Today', icon: 'fa fa-calendar-day',todos:signal([])},
    { route: 'Pending', label: 'Pending', icon: 'fa fa-hourglass-half',todos:signal([])},
    { route:'Overdue', label: 'Overdue', icon: 'fa fa-exclamation-circle',todos:signal([])},
    { route:'Completed', label: 'Completed', icon: 'fa fa-check',todos:signal([])},
  ]
  priorities = [
    { name: "Low", value: "low"},
    { name: "Medium", value: "medium"},
    { name: "High", value: "high"}
  ];

// for Error Toast 
  message:string = "InComplete/InCorrect Task";
  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: this.message });
  }

// for get tabs
getTab(route: string) {
  return this.tabs.find(tab => tab.route === route);
}

// for set task and todos in tabs
setTask(route:string,todo:todo2){
  const tab = this.getTab(route)
  if (!tab || !todo) {
    return
  }

  tab.todos.update(item => [...item,todo])
}

// for add task/todo function
  addTask(form: NgForm): any {
    const title = form.value.title.trim()
    const comments = form.value.comments.trim()
    const date = new Date()
    const taskDeadLine = form.value.deadline

  if (form.invalid || !title || title.length < 5 || !comments || comments.length < 10) {
   return this.showError()
  }

  const newTodo: todo2 = {
  id: Date.now(),
  title,
  priority: form.value.priority,
  deadline: taskDeadLine,
  comments,
  isComplete: false,
};

  if (date.toLocaleDateString() === taskDeadLine.toLocaleDateString()) {
      this.setTask('Today',newTodo)
  } else if (date < taskDeadLine){
      this.setTask('Pending',newTodo)
  } else if (date > taskDeadLine) {
      this.setTask('Overdue',newTodo)
  }

  console.log("name",this.tabs[0].todos(),this.tabs[1].todos(),this.tabs[2].todos())
}

// for Open or Close popup function
isPopupOpen:boolean = false
isOpen(val:boolean){
  this.isPopupOpen = val
}
}

