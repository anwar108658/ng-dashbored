import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLinkWithHref, RouterLink } from '@angular/router';
import { Button } from "./components/common/button/button";

interface menu{
  id:number,
  title:string,
  link:string,
  icon:string,
  secondaryIcon:string,
  children: menu[]
}
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Button, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  menus:menu[]= [
    {id:1,title:"Dashboard",link:"",icon:"fa fa-home",secondaryIcon:"",children:[]},
    {id:2,title:"Projects",link:"/projects",icon:"fa fa-briefcase",secondaryIcon:"fa fa-caret-down",children:[
      {id:1,title:"Counter App",link:"/projects/counter",icon:"fa fa-calculator",secondaryIcon:" ",children:[]},
      {id:2,title:"Todo App",link:"/projects/todo-app",icon:"fa fa-calendar-check",secondaryIcon:"",children:[]},
      {id:3,title:"Todo App 2",link:"/projects/todo-app2",icon:"fa fa-calendar-check",secondaryIcon:"",children:[]},
    ]},
    {id:3,title:"Contact",link:"/contact",icon:"fa fa-phone",secondaryIcon:"",children:[]},
  ]
  isSidebarOpen = false;
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  isMenuOpen = false
  activeMenuId: number | null = null;
  toggleMenu(id: number) {
    this.activeMenuId = this.activeMenuId === id ? null : id
  }
  protected readonly title = signal('simple-dashboard');
}
