import { Routes } from '@angular/router';
import { Dashboard } from './pages/dashboard/dashboard';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { Is404 } from './pages/is404/is404';
import { Counter } from './pages/projects/subPages/counter/counter';
import { Todo } from './pages/projects/subPages/todo/todo';
import { Todo2 } from './pages/projects/subPages/todo2/todo2';

export const routes: Routes = [
    {path:"",component:Dashboard},
    {
        path:"projects",
        component:Projects,
        children:[
            {path:"counter",component:Counter},
            {path:"todo-app",component:Todo},
            {path:"todo-app2",component:Todo2}
        ]
    },
    {path:"contact",component:Contact},
    {path:"**",component:Is404},
];
