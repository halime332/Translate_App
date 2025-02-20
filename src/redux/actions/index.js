import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getLanguages = createAsyncThunk(
    "language/getLanguages",
    async () => {
        //api isteği 
        const res = await api.get("/getLanguages");
        //fulfiled aksiyonunun payloadı nı  belirle
        return res.data.data.languages;
    }
);

//apiden çeviri sonucunu al
export const translateText = createAsyncThunk("translate/translateText", async () => {
    //api a gönderilecek parametreleri ayarla 
    const params = new URLSearchParams();
    params.set("source_language", translate.sourceLang.value);
    params.set("target_language", translate.targetLang.value);
    params.set("text", translate.textToTranslate);

    //apiaya istek at
    const res = await api.post("translate", params);
    console.log(res);
}
);