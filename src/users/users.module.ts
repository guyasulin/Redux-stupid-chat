import { EffectsModule } from '@ngrx/effects';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { ENTITY_METADATA_TOKEN, PLURAL_NAMES_TOKEN } from '@ngrx/data';
import { UsersEffects } from './users.effects';
import { reducer } from './reducers/users.reducer';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature('users', reducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
  providers: [
    {provide: ENTITY_METADATA_TOKEN, multi: true, useValue: {
      Users: {},
    }},

     { provide: PLURAL_NAMES_TOKEN, multi: true, useValue: {
      'Users': 'Users'
     }}
 ]
})
export class UsersModule { }
