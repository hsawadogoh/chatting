import { Component, OnInit } from '@angular/core';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ChatModalComponent} from '../chat-modal/chat-modal.component';
import {Router} from '@angular/router';

@Component({
  selector: 'app-chatting',
  templateUrl: './chatting.component.html',
  styleUrls: ['./chatting.component.css']
})
export class ChattingComponent implements OnInit {

  constructor(
    private modal: NgbModal,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  open() {
    // const myModal = this.modal.open(ChatModalComponent, {size: 'lg', backdrop: false, centered: true});
    this.router.navigateByUrl('/chat-modal');
  }
}
