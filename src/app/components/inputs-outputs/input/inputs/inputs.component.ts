import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css'],
  standalone: true,
})
export class InputsComponent {
  @Input({ required: true }) msg!: string;
  @Input({ required: true }) title!: string;
}
