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
    getRequestListForUser: builder.query({
      query: (email) => `/food-request/all/${email}`,
      providesTags: ["request"],
    }),
    getAllRequestedFood: builder.query({
      query: () => "/food-request/all",
      providesTags: ["request"],
    }),
    approveRequest: builder.mutation({
      query: ({ id, cafeteria }) => ({
        url: `/food-request?id=${id}&cafeteria=${cafeteria}`,
        method: "PATCH",
      }),
      invalidatesTags: ["request"],
    }),
    declineRequest: builder.mutation({
      query: (id) => ({
        url: `/food-request/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["request"],
    }),
  }),
});

export const {
  usePlaceRequestMutation,
  useGetRequestListForUserQuery,
  useGetAllRequestedFoodQuery,
  useApproveRequestMutation,
  useDeclineRequestMutation,
} = requestApi;
