import { CommonModule } from '@angular/common';
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
