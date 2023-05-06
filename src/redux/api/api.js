import {
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const api = createApi({
  name: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:9000/api/v1",
  }),
  tagTypes: ["products", "orders"],
  endpoints: () => ({}),
});

export default api;
