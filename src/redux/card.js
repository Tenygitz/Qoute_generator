import { createSlice } from "@reduxjs/toolkit";
const initialState={
    cardQoute:[],
    cardAuthor:[]
    
}
const cardSlice= createSlice({
    name:"card",
    initialState,
    reducers:{
         addQoute:(state,action)=>{
          return {
            ...state,
            cardQoute: [...state.cardQoute, action.payload]
          }
         
        },
         addAuthor:(state,action)=>{
            return{
              ...state,
              cardAuthor:[...state.cardAuthor, action.payload]
            }
            
 
          }
    }

})

export const {addQoute,addAuthor}=cardSlice.actions;
export default cardSlice.reducer