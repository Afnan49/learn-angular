import { AfterViewChecked, Component, OnInit, signal } from '@angular/core';
import { InputsComponent } from '../inputs/inputs.component';
import '../../../../../prims';
import { MainCodeComponent } from '../../../../shared/main-code/main-code.component';
import { CodeComponent } from '../../../../shared/code/code.component';
import { Code } from '../../../../shared/main-code/code';
declare var Prism: any;

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
  standalone: true,
  imports: [InputsComponent, MainCodeComponent, CodeComponent],
})
export class MessageComponent implements OnInit, AfterViewChecked {
  msg = 'Hello from Message Component';
  title1 = 'Input Decorator';
  title2 = 'Input Signal';

  codeData1: any = {
    htmlCode: `<!-- inputs.component.html -->
    <div class="card">
      <h1 class="title">{{title}}</h1>
      <p class="para">{{msg}}</p>
    </div>
    <!-- message.component.html -->
<app-inputs
  [msg]="msg"
  [title]="title"
/>
`,
    tsCode: `
// input.component.ts

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  @Input({ required: true }) msg!: string = '';
  @Input({ required: true }) title!: string = '';
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
      title = 'Input Decorator';
  }
`,
  };
  codeData2: Code = {
    htmlCode: `<!-- inputs.component.html -->
    <div class="card">
      <h1 class="title">{{title()}}</h1>
      <p class="para">{{msg()}}</p>
    </div>
    <!-- message.component.html -->
<app-inputs
  [msg]="msg"
  [title]="title"
/>
`,
    tsCode: `
// input.component.ts

import { Component, input } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
msg=input<string>();
title=input<string>();
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
      title = 'Input Decorator';
  }
`,
  };

  ngOnInit() {
    this.highlightCode();
  }

  ngAfterViewChecked() {
    this.highlightCode();
  }

  private highlightCode() {
    if (typeof Prism !== 'undefined') {
      Prism.highlightAll();
    }
  }
}
