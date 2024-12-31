import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-control-flow',
  imports: [FormsModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.css'
})
export class ControlFlowComponent {

  isDiv1Visible: boolean = true;
  div2Visible: string = "No";

  showHideDiv1(isShow: boolean){
    this.isDiv1Visible = isShow;
  }
}
