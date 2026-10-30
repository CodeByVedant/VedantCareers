import { configureStore } from "@reduxjs/toolkit"

import authReducer from "./authSlice"
import jobReducer from "./jobSlice"
import companyReducer from "./companySlice"
import applicationReducer from "./applicationSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        job: jobReducer,
        company: companyReducer,
        application: applicationReducer
    }
})

export default store