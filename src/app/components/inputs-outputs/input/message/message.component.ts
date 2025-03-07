import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { InputsComponent } from '../inputs/inputs.component';
import { NgFor, NgIf, NgSwitch, NgSwitchCase } from '@angular/common';
import '../../../../../prims';

type TabType = 'html' | 'ts';
declare var Prism: any;

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  standalone: true,
  imports: [InputsComponent, NgIf, NgFor, NgSwitchCase, NgSwitch],
})
export class MessageComponent implements OnInit, AfterViewChecked {
  show: boolean = false;
  activeTab: TabType = 'html';

  tabs: TabType[] = ['html', 'ts'];
  msg = 'Hello from Message Component';
  title = 'Input Decorator';

  htmlCode = `<!-- inputs.component.html -->
<div class="card">
  <h1 class="title">Input Component</h1>
  <p class="para">{{msg}}</p>
</div>

<!-- message.component.html -->
<app-inputs
  [msg]="'Hello , I Am A Parent Input'"
  (displayCod)="onDisplayCode($event)"
/>
<app-inputs [msg]="msg" />
`;
  tsCode = `
// input.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  @Input() msg: string = '';
}
  
//message.component.ts

import { Component } from '@angular/core';
@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  standalone: true,
})
  export class MessageComponent{
      msg = 'Hello from Message Component';
  }
`;

  ngOnInit() {
    this.highlightCode();
  }

  ngAfterViewChecked() {
    this.highlightCode();
  }
  setActiveTab(tab: TabType) {
    this.activeTab = tab;
    setTimeout(() => {
      Prism.highlightAll();
    }, 0);
  }

  copyCode(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        // You can replace this with a more elegant notification
        alert('Code copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy code:', err);
      });
  }
  private highlightCode() {
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll();
    }
  }

  onDisplayCode($event: any) {
    this.show = !this.show;
    setTimeout(() => {
      Prism.highlightAll();
    }, 0);
  }
}
