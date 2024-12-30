import { Routes } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { AdminComponent } from './component/admin/admin.component';

export const routes: Routes = [
  {
    path: "user-page",
    component: UserComponent
  },
  {
    path:"admin-page",
    component: AdminComponent
  }
];
