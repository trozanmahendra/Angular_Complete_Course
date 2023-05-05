import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-alert2',
  templateUrl: './alert2.component.html',
  styleUrls: ['./alert2.component.css']
})
export class Alert2Component {
  focus:boolean = false;
  allowClick = true;
  userName: string="Mg";
  appComp: AppComponent = new AppComponent();

  ifClicked(){
    this.userName='';
    this.appComp.setName('');

  }
  emptyUserName():boolean{
    if(this.userName == ''){
      return false;
    }else{
      return true;
    }
  }
  allowClicking():boolean{
    return false;
  }
  returnFocus(){
    return this.focus;
  }
  onClick(){
    console.log('clicked me!!!!!!!!!!!!!.............................');
  }
onFocus(){
  alert(`hi I'm alert2 `);
}
}
