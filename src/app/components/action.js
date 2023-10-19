import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getAnime = createAsyncThunk("post/getanime", async () => {
  const options = {
    method: "GET",
    url: "https://random-anime-img.p.rapidapi.com/anime",
    headers: {
      "X-RapidAPI-Key": "31d66ee191msh4e4f35900248206p174288jsn33f10bcc88a2",
      "X-RapidAPI-Host": "random-anime-img.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
});
