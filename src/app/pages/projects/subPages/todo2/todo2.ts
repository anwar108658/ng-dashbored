import { Component } from '@angular/core';
import {ButtonModule} from 'primeng/button'
import { TabsModule } from 'primeng/tabs';

@Component({
  selector: 'app-todo2',
  imports: [ButtonModule,TabsModule],
  templateUrl: './todo2.html',
  styleUrl: './todo2.css',
})
export class Todo2 {
  tabs = [
        { route: 'dashboard', label: 'Today', icon: 'fa fa-calendar-day' },
        { route: 'transactions', label: 'Pending', icon: 'fa fa-hourglass-half' },
        { label: 'Overdue', icon: 'fa fa-exclamation-circle' },
    ]

}
