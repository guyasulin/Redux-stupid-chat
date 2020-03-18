import { User } from './../user';
import { Action, createReducer, on } from '@ngrx/store';
import { setRegisteredUsers } from '../actions/users.actions';


export const usersFeatureKey = 'users';

export interface State {
  rightUser: number;
  leftUser: number;
}

export const initialState: State = {
  rightUser: null,
  leftUser: null
};

const usersReducer = createReducer(
  initialState,
  on(setRegisteredUsers, (state, action) => ({...state, [action.side + 'User']: action.id }))
);

export function reducer(state: State | undefined, action: Action) {
  return usersReducer(state, action);
}
