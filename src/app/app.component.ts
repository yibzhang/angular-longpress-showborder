import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  private borderFlag: boolean;

  counter(len: number){
    return new Array(len);
  }

  borderControl(){
    this.borderFlag = !this.borderFlag;
    console.log(this.borderFlag);
  };
}
