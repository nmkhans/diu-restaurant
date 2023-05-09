import api from "./api";

export const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (data) => ({
        url: "/orders",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["orders", "products"],
    }),
    getUsersAllOrder: builder.query({
      query: (email) => `/orders/${email}`,
    }),
    getAllOrders: builder.query({
      query: () => "/orders",
      providesTags: ["orders"],
    }),
    getSingleOrder: builder.query({
      query: (id) => `/orders/order-detail/${id}`,
    }),
    updateStatus: builder.mutation({
      query: ({ id, status }) => ({
        url: `/orders/update-status?id=${id}&status=${status}`,
        method: "PATCH",
      }),
      invalidatesTags: ["orders"],
    }),
  }),
});

export const {
  usePlaceOrderMutation,
  useGetUsersAllOrderQuery,
  useGetAllOrdersQuery,
  useGetSingleOrderQuery,
  useUpdateStatusMutation,
} = orderApi;
