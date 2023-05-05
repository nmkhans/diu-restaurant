import api from "./api";

export const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
      }),
    }),
    getUsersAllOrder: builder.query({
      query: (email) => `/orders/${email}`,
    }),
  }),
});

export const { usePlaceOrderMutation, useGetUsersAllOrderQuery } =
  orderApi;
