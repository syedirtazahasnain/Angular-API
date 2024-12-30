import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { UserComponent } from './component/user/user.component';
import { AdminComponent } from './component/admin/admin.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,UserComponent,AdminComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-demo';
}
