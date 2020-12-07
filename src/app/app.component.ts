import { Component } from '@angular/core';
import { WebInterfaceService } from '../web-interface.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rtl';

  var inp=document.getElementById('in');
  var rtl=document.getElementById('rtl');
  var out=document.getElementById('out');

  displayResults(): void{
  	this.webInterfaceService.getData()
  }

  onSuccess(): void{
    alert('Your feedback was submitted successfully :)')
  }

  onClick(): void {
    console.log(this.inp.value);
    this.webInterfaceService.submitData(this.inp.value).subscribe(() => this.onSuccess());
  }
}
