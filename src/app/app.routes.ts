import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InputsComponent } from './components/inputs-outputs/input/inputs/inputs.component';
import { MessageComponent } from './components/inputs-outputs/input/message/message.component';

export const routes: Routes = [
  {
    path: 'inputs',
    component: MessageComponent,
    title: 'inputs and outputs',
  },
  {
    path: '',
    component: HomeComponent,
    title: 'Home',
  },
];
