import { Component, OnInit } from '@angular/core';
import MessageService from '../message.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-messages',
  template: `<div *ngIf="messages && messages.length > 0">
    <h3>MESSAGES</h3>
    <p *ngFor="let message of messages">{{message}}</p>
  </div>`,
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  constructor(private messageService: MessageService,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.messageService.get().subscribe(msg => {
      if (msg && msg.length > 0) {
        this.snackBar.open(msg, '', { duration: 3000 });
      }
    });
  }
}
