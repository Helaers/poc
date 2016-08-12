import { provideRouter, RouterConfig } from '@angular/router';

import { HomeComponent } from './containers/home.component';
import { EditorComponent } from './containers/editor.component';
import { ViewerComponent } from './containers/viewer.component';
import { AddSlideComponent } from './containers/add-slide.component';

import { SlideComponent } from './components/slide.component';

const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    { 
        path: 'home', 
        component: HomeComponent, 
    },
    { 
        path: 'editor', 
        component: EditorComponent 
    },
    {
        path: 'editor/add-slide',
        component: AddSlideComponent
    },
    { 
        path: 'viewer', 
        component: ViewerComponent,
        children: [
            { 
                path: '', 
                redirectTo: 'slide/:id', 
                pathMatch: 'full' 
            },
            { 
                path: 'slide/:id', 
                component: SlideComponent 
            }
        ]
    },
];

export const appRouterProviders = [
    provideRouter(routes)
];