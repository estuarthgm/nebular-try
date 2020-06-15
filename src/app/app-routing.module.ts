import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SomePageComponent } from './components/some-page/some-page.component';


const routes: Routes = [
  { path : 'some', component : SomePageComponent },
  { path : '', redirectTo : '/some', pathMatch : 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
