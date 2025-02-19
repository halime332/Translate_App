import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getLanguages = createAsyncThunk(
    "language/getLanguages",
    async () => {
        const res = await api.get("/getLanguages")
        console.log(res.data);
    }
);