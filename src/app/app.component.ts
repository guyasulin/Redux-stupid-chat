import { Observable } from 'rxjs';
import { Component } from '@angular/core';
import { EntityCollectionServiceFactory, EntityCollectionService } from '@ngrx/data'
import { User } from './../users/user';
import { Store, select } from '@ngrx/store';
import { setRegisteredUsers } from '../users/actions/users.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  private usersService:EntityCollectionService<User>;
  public rightUserId$ : Observable<number> = this.store$.pipe(
    select('users', 'rightUser')
  )
  public leftUserId$ : Observable<number> = this.store$.pipe(
    select('users', 'leftUser')
  )

  constructor(serviceFactory: EntityCollectionServiceFactory, private store$: Store<any> ) {
    this.usersService = serviceFactory.create('Users')
  }

  registerUser(values: any, side: string) {
    this.usersService.add(values).subscribe((user: User) => {
      this.store$.dispatch(setRegisteredUsers({id : user.id, side}))
    })
  }
}
