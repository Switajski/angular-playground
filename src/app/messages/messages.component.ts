import { Component, OnInit } from '@angular/core';
import MessageService from '../message.service';

@Component({
  selector: 'app-messages',
  template: `<div *ngIf="messages.length > 0">
    <h3>MESSAGES</h3>
    <p *ngFor="let message of messages">{{message}}</p>
  </div>`,
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
  messages: string[]
  constructor(private messageService: MessageService) { }

  ngOnInit() {
    this.messageService.get().subscribe(messages => this.messages = messages)
  }

}
