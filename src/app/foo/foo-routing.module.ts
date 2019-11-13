import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooComponent } from './foo.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: "foo", component: FooComponent }

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
 
})
export class FooRoutingModule { }
