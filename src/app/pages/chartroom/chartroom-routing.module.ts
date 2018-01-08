import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartroomComponent } from './chartroom.component';

const routes: Routes = [
  {
    path: '',
    component: ChartroomComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartroomRoutingModule { }
