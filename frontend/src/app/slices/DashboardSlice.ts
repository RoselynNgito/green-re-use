import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  createProductService,
  getProductsService,
} from "../services/product-service";
import { ProductType } from "../../types/types";

interface InitialStateType {
  loading: boolean;
  sub_loading: boolean;
  success: boolean;
  error: string | undefined | unknown;
  sideBarCollapse: boolean;
  products: ProductType[];
}

const initialState: InitialStateType = {
  sideBarCollapse: false,
  loading: false,
  sub_loading: false,
  success: false,
  error: "",
  products: [],
};

const DashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    toggleSideBar(state) {
      state.sideBarCollapse = !state.sideBarCollapse;
    },
  },
  extraReducers: (builder) => {
    builder

      //add/create product
      .addCase(createProductService.pending, (state) => {
        state.sub_loading = true;
        state.success = false;
        state.error = "";
      })

      .addCase(createProductService.fulfilled, (state, action) => {
        state.sub_loading = false;
        state.success = true;
        toast.success("Product added successfully", {
          position: "bottom-right",
        });
        state.products = [action.payload.data.product, ...state.products];
      })

      .addCase(createProductService.rejected, (state, action: any) => {
        state.sub_loading = false;
        toast.error("Unable to add Product, please re-try", {
          position: "bottom-right",
        });
        state.error =
          action.error.message ??
          action?.payload?.response?.data?.msg ??
          "An error occured processing your request, Please retry";
      })

      //get products
      .addCase(getProductsService.pending, (state) => {
        state.loading = true;
        state.error = "";
      })

      .addCase(getProductsService.fulfilled, (state, action) => {
        state.loading = false;
        state.products = action.payload.data.products;
      })

      .addCase(getProductsService.rejected, (state, action: any) => {
        state.loading = false;
        state.error =
          action.error.message ??
          action?.payload?.response?.data?.msg ??
          "An error occured processing your request, Please retry";
      });
  },
});

export const { toggleSideBar } = DashboardSlice.actions;

export default DashboardSlice.reducer;
