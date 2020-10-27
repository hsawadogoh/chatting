import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ChatModalComponent} from './chat-modal/chat-modal.component';


const routes: Routes = [
  {
    path: 'chat-modal',
    component: ChatModalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
