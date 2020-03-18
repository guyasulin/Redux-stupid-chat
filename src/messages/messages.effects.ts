import { Message } from 'src/messages/message';

import { Injectable } from '@angular/core';
import { Actions, Effect, OnInitEffects, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { EntityCollectionServiceFactory, EntityCollectionService } from '@ngrx/data'
import { Observable } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

@Injectable()

export class MessagesEffects implements OnInitEffects {

    private messageService: EntityCollectionService<Message>;

    @Effect({
        dispatch: false
    })
    initMessages$: Observable<Message[]> = this.actions$.pipe(
        ofType("INIT_MESSAGES"),
        mergeMap(() => {
           return this.messageService.getAll();
        })
    )
    ngrxOnInitEffects(): Action {
        return {
            type: "INIT_MESSAGES"
        }
    }
    
    constructor(private actions$: Actions, serviceFactory: EntityCollectionServiceFactory){
        this.messageService = serviceFactory.create('Messages')
    }
}