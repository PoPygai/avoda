import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RequestParaments} from "../../utils/types.ts";

const initialState:RequestParaments= {
    title:"",
    region:"",
    salary:0,
    employmentType:[],
    experience:[],
    payoutFrequency:[],
};

export const requestParamentsSlice = createSlice({
    name:"RequestParaments",
    initialState,
    reducers:{
        setAllParaments:(state,action:PayloadAction<RequestParaments>)=>{
            return action.payload;
        },
        setFieldParaments: <K extends keyof RequestParaments>(state:RequestParaments, action: PayloadAction<{ field: K; value: RequestParaments[K] }>) => {

            state[action.payload.field] = action.payload.value;
        },
        reset:()=>  initialState
    }
})

