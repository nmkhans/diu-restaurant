import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const api = createApi({
  name: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nmk-diu-restaurant.onrender.com/api/v1",
  }),
  tagTypes: ["products", "orders", "users", "request"],
  endpoints: () => ({}),
});

export default api;
