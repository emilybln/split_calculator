import {
    configureStore,
    EnhancedStore,
    getDefaultMiddleware,
} from "@reduxjs/toolkit";

import rootReducers from "./redux/reducers/rootReducers"

export default function configureAppStore(): EnhancedStore {
    return configureStore({
        reducer: rootReducers,
        middleware: getDefaultMiddleware(),
    });
}
