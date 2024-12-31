import { Routes } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { AdminComponent } from './component/admin/admin.component';
import { DataBindingComponent } from './component/data-binding/data-binding.component';
import { ControlFlowComponent } from './component/control-flow/control-flow.component';

export const routes: Routes = [
  {
    path: "user-page",
    component: UserComponent
  },
  {
    path:"admin-page",
    component: AdminComponent
  },
  {
    path:"data-binding",
    component:DataBindingComponent
  },
  {
    path:"data-binding",
    component:DataBindingComponent
  },
  {
    path: "control-flow",
    component:ControlFlowComponent
  }
];
