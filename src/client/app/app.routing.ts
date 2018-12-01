import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserComponent } from './containers/user/user.component';
import { LoginComponent } from './containers/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';

const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'user', component: UserComponent, canActivate: [AuthGuard] }, // <-- delete this line
  { path: '**', redirectTo: '/user', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
