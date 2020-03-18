import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { AppEffects } from './app.effects';
import { entityConfig } from './entity-metadata';
import { EntityDataModule, DefaultDataServiceConfig } from '@ngrx/data';
import { HttpClientModule } from '@angular/common/http';
import { UsersModule } from '../users/users.module';
import { reducers, metaReducers } from './reducers';
import { MessagesModule } from '../messages/messages.module';
import { AuthsModule } from './../../projects/auths/src/lib/auths.module';
import { ChatListComponent } from './chat-list/chat-list.component';
import { CreateMessageComponent } from './create-message/create-message.component';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    ChatListComponent,
    CreateMessageComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    StoreModule.forRoot(reducers, {metaReducers}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([AppEffects]),
    EntityDataModule.forRoot(entityConfig),
    HttpClientModule,
    UsersModule,
    MessagesModule,
    AuthsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  providers: [
    {provide: DefaultDataServiceConfig, useValue: {
      root: 'https://academeez-chat.herokuapp.com/api'   
    }}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
