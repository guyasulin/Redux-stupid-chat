import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EntityCollectionServiceFactory, EntityCollectionService } from '@ngrx/data'
import { Message } from 'src/messages/message';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss']
})
export class CreateMessageComponent implements OnInit {

  @Input() userId: number;
  private messageService: EntityCollectionService<Partial<Message>>;

  constructor(serviceFactory:EntityCollectionServiceFactory) {
    this.messageService = serviceFactory.create('Messages')
   }

  ngOnInit(): void {
  }

  createMessage(createForm: NgForm) {
    this.messageService.add({message: createForm.value.message, userId: this.userId})
  }
}
