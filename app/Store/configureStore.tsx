import { createStore } from 'redux';
import toggleUser from './Reducers/favoriteReducer';

export default createStore(toggleUser);
