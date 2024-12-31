import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  courseName : string = "Angular Demo";
  courseDuration : number = 2;
  minTextLength : number = 5;
  placeHolder : string = "Data Binding";

  showMessage(){
    alert('Welcome to Learning Partner');
  }

  onStateChange(event : any){
    const name = event.target?.['value'];
    alert('State changed =?' +name);
  }

  onMouseEnter(){
    alert("Mouse is entered");
  }

  onMouseLeft(){
    alert("Mouse is moved Left");
  }

  showLanguageName(name : string){
    alert(name);
  }
}
