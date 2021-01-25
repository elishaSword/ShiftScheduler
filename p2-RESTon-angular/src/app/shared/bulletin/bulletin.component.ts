import { Component, OnInit } from '@angular/core';

import { BulletinMessage } from 'src/app/models/bulletin-message';
import { BulletinServiceService } from 'src/app/services/bulletin-service.service';
import { MessageService } from 'src/app/services/message-service.service';

@Component({
  selector: 'rev-bulletin-component',
  templateUrl: './bulletin.component.html',
  styleUrls: ['./bulletin.component.scss']
})
export class BulletinComponent implements OnInit {

  messages: Array<BulletinMessage>;

  constructor(private messageService: MessageService, private bulletinService: BulletinServiceService) { }

  ngOnInit(): void {
    //Query for Bulletin Messages
    // this.getBulletinMessages();
    this.bulletinService.buletinMessages.subscribe(messages => this.messages = messages);
  }

  // getBulletinMessages(): void {
  //   this.messageService.getBulletinMessages().subscribe(messages => this.messages = messages);
  // }
}
