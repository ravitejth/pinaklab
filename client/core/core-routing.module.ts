import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from '../shared/components/header/header.component';
import { FooterComponent } from '../shared/components/footer/footer.component';



// Route Configuration
export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
    {
        path: 'about',
        children: [
            {
                path: '',
                component: HeaderComponent,
                outlet: 'Header',
            }, {
                path: '',
                component: AboutComponent
            }, {
                path: '',
                component: FooterComponent,
                outlet: 'Footer',
            },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class CoreRoutingModule {}
