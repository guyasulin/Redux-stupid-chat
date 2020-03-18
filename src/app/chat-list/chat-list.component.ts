import { User } from './../../users/user';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Dictionary } from '@ngrx/entity';
import { map } from 'rxjs/operators';
import { Message } from '../../messages/message';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent implements OnInit {

  @Input() userId: number;

  constructor(private store: Store<any>) { }

  public messages$: Observable<Message[]> = this.store.pipe(
    select('entityCache', 'Messages', 'entities' ),
    map((messages: Dictionary<Message>) => {
      const messageArray: Message[] = [];
      for(let message of Object.values(messages)) {
        if (message.userId === this.userId) {
          messageArray.push(message)
        }
      }
      return messageArray
    })
  )

  public user$: Observable<User> = this.store.pipe(
    select('entityCache', 'Users', 'entities' ),
    map((users: Dictionary<User>) => users[this.userId])
    )

  ngOnInit(): void {
  }

}
