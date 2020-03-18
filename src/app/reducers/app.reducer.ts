import { Action, createReducer, on } from '@ngrx/store';


export const appFeatureKey = 'app';

export interface State {
}

export const initialState: State = {
};

const appReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return appReducer(state, action);
}
