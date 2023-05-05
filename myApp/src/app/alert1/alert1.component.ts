import { Component } from '@angular/core';

@Component({
  selector: 'app-alert1',
  templateUrl: './alert1.component.html',
  styleUrls: ['./alert1.component.css']
})
export class Alert1Component {

  onClick(){
    alert("Hi I'm alert1")
  }

}
