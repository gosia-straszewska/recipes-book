import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component ({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent {
  @Input() message: string;
  @Output() toclose = new EventEmitter<void>();

  onClose() {
    this.toclose.emit();
  }
}