import { createSlice } from "@reduxjs/toolkit";
 
const bookSlice=createSlice({
 
name:'book',
 
initialState:{
java:10,
dsa:20
 
},
reducers:
{
returnBookdsa:(state)=>
{
    state.dsa+=1
},
issueBookdsa:(state)=>
{
    state.dsa-=1
}
 
 
}
 
 
 
 
 
 
 
})
 
export const {returnBookdsa,issueBookdsa}=bookSlice.actions
export default  bookSlice.reducer;