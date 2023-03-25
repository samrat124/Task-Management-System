import {legacy_createStore} from 'redux';
import { reducer } from './Reducer/index';


export const store = legacy_createStore(reducer)