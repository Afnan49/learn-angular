import { Component, OnInit } from '@angular/core';
import { TemplateFormsComponent } from '../template-forms/template-forms.component';
import { MainCodeComponent } from '../../../shared/main-code/main-code.component';
import { Code } from '../../../shared/main-code/code';
import { ExplaineComponent } from './explaine/explaine.component';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css'],
  standalone: true,
  imports: [TemplateFormsComponent, MainCodeComponent, ExplaineComponent],
})
export class FormsComponent implements OnInit {
  codeData2: Code = {
    htmlCode: `<div class="container">
  <span class="check">
    <pre>{{ userInfo | json }}</pre>
  </span>
  <form>
    <div class="form-field">
      <label for="name" class="name">First Name</label>
      <input
        type="text"
        id="name"
        placeholder="Enter Your Name"
        [(ngModel)]="userInfo.firstName"
        [ngModelOptions]="{ updateOn: 'submit' }"
        name="name"
      />
    </div>
    <div class="form-field">
      <label for="last-name" class="last-name">Last Name</label>
      <input
        type="text"
        id="last-name"
        placeholder="Enter Your Last Name"
        [(ngModel)]="userInfo.lastName"
        name="last-name"
      />
    </div>
    <div class="form-field">
      <label for="nick-name" class="nick-name">Nick Name</label>
      <input
        type="text"
        id="nick-name"
        placeholder="Comp up with a nick name"
        [(ngModel)]="userInfo.nickName"
        name="nick-name"
      />
    </div>
    <div class="form-field">
      <label for="email" class="email">Email</label>
      <input
        type="email"
        id="email"
        placeholder="Provide your email"
        [(ngModel)]="userInfo.email"
        name="email"
      />
    </div>
    <div class="form-field-inline-group">
      <div class="form-field form-field-small">
        <label for="year" class="year">Year of birth</label>
        <select name="year" id="year" [(ngModel)]="userInfo.yearOfBirth">
          @for(item of year;track $index){
          <option [value]="item">{{ item }}</option>
          }
        </select>
      </div>
      <div class="form-field form-field-small">
        <label for="passport" class="passport">Pasport Number</label>
        <input
          type="text"
          id="passport"
          name="passport"
          placeholder="Provide passport Data"
          [(ngModel)]="userInfo.passport"
          name="passport"
        />
      </div>
    </div>
    <fieldset>
      <legend>Address</legend>
      <div class="form-field">
        <label for="full-address">Full Address</label>
        <input
          type="text"
          id="full-address"
          [(ngModel)]="userInfo.fullAdress"
          name="full-address"
          placeholder="Street name and house number"
        />
      </div>
      <div class="form-field">
        <label for="city">City</label>
        <input
          type="text"
          id="city"
          [(ngModel)]="userInfo.city"
          name="city"
          placeholder="City"
        />
      </div>
      <div class="form-field">
        <label for="post-code">Post Code</label>
        <input
          type="number"
          id="post-code"
          [(ngModel)]="userInfo.postCode"
          name="post-code"
          placeholder="Post code"
        />
      </div>
    </fieldset>
    <button type="submit">Save</button>
  </form>
</div>`,
    tsCode: `import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserInfo } from '../user-info';

@Component({
  selector: 'app-template-forms',
  templateUrl: './template-forms.component.html',
  styleUrls: ['./template-forms.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class TemplateFormsComponent implements OnInit {
  userInfo: UserInfo = {
    firstName: '',
    lastName: '',
    nickName: '',
    email: '',
    yearOfBirth: 0,
    passport: '',
    fullAdress: '',
    city: '',
    postCode: 0,
  };

  get year() {
    const now = new Date().getUTCFullYear();
    return Array(now - (now - 40))
      .fill('')
      .map((_, idx) => now - idx);
  }

  constructor() {}

  ngOnInit() {}
}
`,
  };
  constructor() {}

  ngOnInit() {}
}
