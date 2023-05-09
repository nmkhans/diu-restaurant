import api from "./api";

export const requestApi = api.injectEndpoints({
  endpoints: (builder) => ({
    placeRequest: builder.mutation({
      query: (data) => ({
        url: "/food-request",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { usePlaceRequestMutation } = requestApi;
