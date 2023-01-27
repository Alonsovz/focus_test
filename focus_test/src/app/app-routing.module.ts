import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'dashboard',
    loadChildren: () => import('./components/dashboard/dashboard.module').then(m => m.DashboardModule)
  },

  {
    path: 'contacts',
    loadChildren: () => import('./components/contacts/contacts.module').then(m => m.ContactsModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./components/login/login.module').then(m => m.LoginModule)
  },
  {path: '**', pathMatch: 'full', redirectTo: 'dashboard/contacts' },
  {path: '', pathMatch: 'full', redirectTo: 'dashboard/contacts' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
