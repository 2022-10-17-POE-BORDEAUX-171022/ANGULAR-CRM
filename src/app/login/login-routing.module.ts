import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageResetComponent } from './pages/page-reset/page-reset.component';
import { PageSignInComponent } from './pages/page-sign-in/page-sign-in.component';
import { PageSignUpComponent } from './pages/page-sign-up/page-sign-up.component';

const routes: Routes = [
  { path: 'sign-in', component: PageSignInComponent },
  { path: 'sign-up', component: PageSignUpComponent },
  { path: 'reset', component: PageResetComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
