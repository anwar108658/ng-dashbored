import { CommonModule } from '@angular/common';
import { Component, isStandalone } from '@angular/core';
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
  templateUrl: './todo2.html',
  styleUrl: './todo2.css',
  providers: [MessageService]
})
export class Todo2 {
  constructor(private messageService:MessageService){};

  tabs = [
    { route: 'Today', label: 'Today', icon: 'fa fa-calendar-day' },
    { route: 'Pending', label: 'Pending', icon: 'fa fa-hourglass-half' },
    { route:'Overdue', label: 'Overdue', icon: 'fa fa-exclamation-circle' },
    { route:'Completed', label: 'Completed', icon: 'fa fa-check' },
  ]
  priorities = [
    { name: "Low", value: "low" },
    { name: "Medium", value: "medium" },
    { name: "High", value: "high" }
  ];

  // for Error Toast
  message:string = "InComplete / InCorrect Task";
  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: this.message });
  }

  // for add task
  addTask(form: NgForm): any {
  if (form.invalid) {
    this.showError()
  }
  console.log(form.value);
}
// for Open or Close popup
isPopupOpen:boolean = false
isOpen(val:boolean){

  this.isPopupOpen = val
  console.log(this.isPopupOpen)
}
}

