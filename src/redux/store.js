// Avem nevoie de functia createStore din Redux pentru a crea un STORE
import { applyMiddleware, combineReducers, createStore } from "redux";
// Crearea store-ului se face pornind de la un reducer, deci trebuie sa il importam.
// In mod normal vom avea mai multi reduceri(vom vedea la cursul urmator) si va trebui
// sa ii combinam intr-un reducer principal, dar cum acum avem un singur reducer,
// el va fi reducerul principal.
import { cartReducer } from "./reducers/cart";
import { userReducer } from "./reducers/userReducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

// Functia createStore primeste ca parametru reducerul principal si creaza store-ul.
const reducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
});
const middlewares = [thunk, logger];
const store = createStore(reducer, applyMiddleware(...middlewares));
// Store-ul are niste metode predefinite, dar pentru React vom folosi niste functii
// ajutatoare pentru a ne conecta cu store-ul.
console.log(store);

// exportam store-ul, pentru a putea fi utilizat in index.js
export default store;
