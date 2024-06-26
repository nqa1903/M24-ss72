import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { User } from "../../interfaces";
import axios from "axios";

const initialState:User[] = [];

//hàm lấy tất cả user
export const getUser:any = createAsyncThunk(
    "users/getAllUser",
    async ()=>{
        const response = await axios.get("http://localhost:8080/users");
        return response.data;
    }
)

//hàm thêm mới user
export const addUser:any = createAsyncThunk(
    "users/addUSer",
    async (user)=>{
        const response = await axios.post("http://localhost:8080/users" , user);
        return response.data;
    }
)

//hàm xóa user
export const deleteUser:any = createAsyncThunk(
    "users/deleteUser",
    async (id)=>{
        const response = await axios.delete(`http://localhost:8080/users/${id}`);
        return response.data;
    } 
)

//hàm sửa user 
export const updateUser:any = createAsyncThunk(
    "users/updateUser",
    async ({id,user}:{id:number,user:User})=>{
        const response = await axios.put(`http://localhost:8080/users/${id}`,user);
        return response.data;
    }
)

const reducerUser = createSlice({
    name: "reducerUser",
    initialState : {
        user : initialState
    },
    reducers : {
        // khai báo các action
    },
    extraReducers : (builder) => {
        builder
        .addCase(getUser.pending,(state , action)=>{
            // trạng thái chờ lấy dữ liệu
        })
        .addCase(getUser.fulfilled,(state , action)=>{
            // trạng thái lấy dữ liệu thành công
            state.user = action.payload;
        })
        .addCase(getUser.rejected,(state , action)=>{
            // trạng thái lấy dữ liệu thất bại
        })
        .addCase(addUser.fulfilled,(state , action)=>{
            state.user.push(action.payload);
        })
        .addCase(deleteUser.fulfilled,(state , action)=>{
            state.user.filter((item:any)=>{
                return item.id;
            })
        })
        .addCase(updateUser.fulfilled,(state,action)=>{
            const index = state.user.findIndex((user) => user.id === action.payload.id);
            if(index != -1){
                state.user[index] = action.payload;
            }
        })
    }
})

//export các action

//export reducer
export default reducerUser.reducer;