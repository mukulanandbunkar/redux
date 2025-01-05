import { configureStore } from "@reduxjs/toolkit";
import { dataReducer } from "./reducer";

export const store = configureStore ({
    reducer: {
        data: dataReducer
    }
})


// create a slice usin useSlice from ""@reduxjs/toolkit""
//