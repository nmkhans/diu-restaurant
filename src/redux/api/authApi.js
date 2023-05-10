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
    promoteUserToAdmin: builder.mutation({
      query: (id) => ({
        url: `/auth/user/promote-to-admin/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["users"],
    }),
    promoteUserToTeacher: builder.mutation({
      query: (id) => ({
        url: `/auth/user/promote-to-teacher/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["users"],
    }),
    promoteUserToManager: builder.mutation({
      query: ({ id, data }) => ({
        url: `/auth/user/promote-to-manager/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["users"],
    }),
    getProfileInfo: builder.query({
      query: (email) => `/auth/get-profile/${email}`,
    }),
    updateProfile: builder.mutation({
      query: ({ id, data }) => ({
        url: `/auth/update-profile/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterMutation,
  useLoginMutation,
  useGetAllUsersQuery,
  usePromoteUserToAdminMutation,
  usePromoteUserToTeacherMutation,
  usePromoteUserToManagerMutation,
  useGetProfileInfoQuery,
  useUpdateProfileMutation,
} = authApi;
