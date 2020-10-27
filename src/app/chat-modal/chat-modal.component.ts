import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-modal',
  templateUrl: './chat-modal.component.html',
  styleUrls: ['./chat-modal.component.css']
})
export class ChatModalComponent implements OnInit {
  user: string;
  constructor() { }

  ngOnInit(): void {
    this.user = 'MAIGA Abdoul-Razack';
  }


  getSelectedUser(value: string) {
    this.user = value;
  }

}
