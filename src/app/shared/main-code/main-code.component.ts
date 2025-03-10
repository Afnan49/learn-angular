import { CommonModule } from '@angular/common';
import { Component, inject, input } from '@angular/core';
import { ToastModule } from 'primeng/toast';

import '../../../prims';
import { MessageService } from 'primeng/api';
declare var Prism: any;
type TabType = 'html' | 'ts';

@Component({
  selector: 'app-main-code',
  templateUrl: './main-code.component.html',
  styleUrls: ['./main-code.component.css'],
  standalone: true,
  imports: [CommonModule, ToastModule],
  providers: [MessageService],
})
export class MainCodeComponent {
  messageService = inject(MessageService);
  data = input<any>();

  activeTab: TabType = 'html';

  tabs: TabType[] = ['html', 'ts'];
  ngOnInit() {
    setTimeout(() => {
      Prism.highlightAll();
    }, 0);
  }
  setActiveTab(tab: TabType) {
    this.activeTab = tab;
    setTimeout(() => {
      Prism.highlightAll();
    }, 0);
  }
  copy() {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: 'Copied',
    });
  }
  copyCode(text: string) {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        this.copy();
      })
      .catch((err) => {
        console.error('Failed to copy code:', err);
      });
  }
}
