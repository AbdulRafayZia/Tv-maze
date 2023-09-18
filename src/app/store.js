import { configureStore } from '@reduxjs/toolkit'

import apiSlice from './slice.js'


export default configureStore({
  reducer: {
  
    ApiSlice:apiSlice
   
  }
})