import { configureStore } from '@reduxjs/toolkit'
import parametersReducer from '../features/parameters/parametersSlice'

export default configureStore({
  reducer: {
    parameters: parametersReducer,
  },
})