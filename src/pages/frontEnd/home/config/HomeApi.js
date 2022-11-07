import { createAsyncThunk } from "@reduxjs/toolkit";
import apiInstance from "../../../../config/AxiosInstance";

const config = {
  headers: {
    "content-type": "multipart/form-data",
  },
};

export const GetSingleRole = createAsyncThunk(
  "userRoles/GetSingleRole",
  async (id) => {
    let result = await apiInstance
      .get(`view-role/${id}`)
      .then((response) => {
        return response;
      })
      .catch((error) => {
        return error.response;
      });

    return result;
  }
);