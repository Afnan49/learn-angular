import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InputsComponent } from './components/inputs-outputs/input/inputs/inputs.component';
import { MessageComponent } from './components/inputs-outputs/input/message/message.component';
import { SignalsComponent } from './components/signals/signals.component';
import { ChangeDetectionComponent } from './components/change-detection/change-detection.component';
import { FormsComponent } from './components/forms/forms/forms.component';

export const routes: Routes = [
  {
    path: '',
    component: MessageComponent,
    title: 'inputs and outputs',
  },
  {
    path: 'inputs',
    component: MessageComponent,
    title: 'inputs and outputs',
  },
  {
    path: 'changedetection',
    component: ChangeDetectionComponent,
    title: 'change detection',
  },
  {
    path: 'signal',
    component: SignalsComponent,
    title: 'signal',
  },
  {
    path: 'forms',
    component: FormsComponent,
    title: 'forms',
  },
];
