import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessagesEffects } from './messages.effects';
import { EffectsModule } from '@ngrx/effects';
import { ENTITY_METADATA_TOKEN, PLURAL_NAMES_TOKEN } from '@ngrx/data';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EffectsModule.forFeature([MessagesEffects]),
  ],
  providers: [
    {provide: ENTITY_METADATA_TOKEN, multi: true, useValue: {
      Messages: {},
    }},

     { provide: PLURAL_NAMES_TOKEN, multi: true, useValue: {
       Messages: 'Messages'
     }}
 ]
})
export class MessagesModule { }
