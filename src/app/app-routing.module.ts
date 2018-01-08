import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'chartroom',
    pathMatch: 'full'
  },
  {
    // 登入
    path: 'chartroom',
    loadChildren: './pages/chartroom/chartroom.module#ChartroomModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
