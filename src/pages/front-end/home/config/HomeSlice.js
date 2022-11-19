import { createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-toastify";

const RolesSlice = createSlice({
  name: "userRoles",
  initialState: {
    rolesList: [],
    permissionsList: [],
  },
  reducers: {
    handlePermissions: (state, action) => {
      state.permissionsList = action.payload;
    },
  },
  extraReducers: {
    ["userRoles/GetSingleRole/fulfilled"]: (
      state,
      {
        payload: {
          data: { data },
          status,
        },
      }
    ) => {
      if (status === 200) {
        state.permissionsList = data?.permission;
      }
    },
  },
});

export const { handlePermissions } = RolesSlice.actions;

export default RolesSlice.reducer;
