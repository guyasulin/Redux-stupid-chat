import { createAction, props } from '@ngrx/store';

export const setRegisteredUsers = createAction(
  '[Users] set Registered Userss',
  props<{id: number , side: string}>()
);




