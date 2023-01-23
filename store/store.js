


import { configureStore } from '@reduxjs/toolkit';

import colorModeReducer from '../reducers/colorMode/colorModeSlice';

export const store = configureStore({
  reducer: {
    colorMode: colorModeReducer,
  },
});

