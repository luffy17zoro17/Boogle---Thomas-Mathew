import {createSlice } from '@reduxjs/toolkit';



const initialState = {
    value:false,
}




const colorModeSlice = createSlice({
     name:"colorMode",
     initialState,
     reducers:{
        toggleColor:(state)=>{

            if(state.value === false){
                state.value=true;
            } else {
                state.value=false;
            }
        }       
     }
});



export const selectColorMode = (state) => state?.colorMode?.value;


export const {toggleColor} = colorModeSlice.actions;


export default colorModeSlice.reducer;

