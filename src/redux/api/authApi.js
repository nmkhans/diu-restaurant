import api from "./api.js";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        body: data,
      }),
    }),
    getAllUsers: builder.query({
      query: () => "/auth/users/all",
      providesTags: ["users"],
    }),
    promoteUser: builder.mutation({
      query: (id) => ({
        url: `/auth/user/promote/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetAllUsersQuery,
  usePromoteUserMutation,
} = authApi;
