
import { Injectable } from '@angular/core';
import { Actions, Effect, OnInitEffects, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EntityCollectionServiceFactory, EntityCollectionService } from '@ngrx/data'
import { User } from './user';
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()

export class UsersEffects implements OnInitEffects {

    private userService: EntityCollectionService<User>;

    @Effect({
        dispatch: false
    })
    initUsers$: Observable<User[]> = this.actions$.pipe(
        ofType("INIT_USERS"),
        mergeMap(() => {
           return this.userService.getAll();
        })
    )
    ngrxOnInitEffects(): Action {
        return {
            type: "INIT_USERS"
        }
    }
    
    constructor(private actions$: Actions, serviceFactory: EntityCollectionServiceFactory){
        this.userService = serviceFactory.create('Users')
    }
}