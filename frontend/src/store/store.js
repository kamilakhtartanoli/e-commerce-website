import {configureStore} from '@reduxjs/toolkit'
import cartReducer from '../store/createslice.js'

export const store = configureStore({
    reducer:{
         allcart: cartReducer
    },
})