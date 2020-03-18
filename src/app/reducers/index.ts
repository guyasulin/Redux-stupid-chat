import { environment } from './../../environments/environment.prod';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';
import { State as UserState, reducer as userReducer, appFeatureKey } from './app.reducer';


export interface State {
    [appFeatureKey] : UserState
}

export const reducers: ActionReducerMap<State> = {
    [appFeatureKey] : userReducer
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];