import{configureStore} from "@reduxjs/toolkit"
import categoryReducer  from "./ReduxSlice/CategorySlice";

const store=configureStore({
  reducer:{
          category:categoryReducer, 
  }  
})

export default store;