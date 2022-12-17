import { configureStore } from '@reduxjs/toolkit'
import mapsReducer from './mapsSlice'

export const store = configureStore({
  reducer: {
    maps: mapsReducer
  },
})