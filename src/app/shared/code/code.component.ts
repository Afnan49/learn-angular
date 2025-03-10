import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css'],
  standalone: true,
})
export class CodeComponent implements OnInit {
  @Input() code!: string;
  constructor() {}

  ngOnInit() {}
}
