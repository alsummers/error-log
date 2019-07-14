import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
import { MainLayoutComponent } from './views/main-layout/main-layout.component';
import { PanelLayoutComponent } from './views/panel-layout/panel-layout.component';

const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
      path: 'main',
      component: MainLayoutComponent,
    },
    {
      path: 'main/:view',
      component: MainLayoutComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
