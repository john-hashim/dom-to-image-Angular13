import { Component } from '@angular/core';
import domtoimage from 'dom-to-image';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dom-to-image';
  converToImg(){
    domtoimage.toPng((<HTMLElement>document.getElementById('container')))
    .then(function (data) {
      console.log(data)
    });
  }
}
