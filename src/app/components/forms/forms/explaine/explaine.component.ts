import { Component, OnInit } from '@angular/core';
import { CodeComponent } from '../../../../shared/code/code.component';

@Component({
  selector: 'app-explaine',
  templateUrl: './explaine.component.html',
  styleUrls: ['./explaine.component.css'],
  standalone: true,
  imports: [CodeComponent, CodeComponent],
})
export class ExplaineComponent implements OnInit {
  code: string = `{
  email:"Afnan@gmail.com",
  firstName:"Afnan",
  lastname:"Mahmoud"
  }
  `;
  code2: string = `
  userInfo:UserInfo={
  email:"",
  firstName:"",
  lastname:"",
  yearOfBirth:0,
  }
  `;
  code3: string = `
  <div class="form-field">
      <label for="name" class="name">First Name</label>
      <input
        type="text"
        id="name"
        placeholder="Enter Your Name"
        [(ngModel)]="userInfo.firstName"
        name="name"
      />
    </div>
  `;
  constructor() {}

  ngOnInit() {}
}
