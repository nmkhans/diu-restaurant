import api from "./api";

export const statusApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getUserDashboardStatus: builder.query({
      query: ({ email, status }) =>
        `/status/dashboard/user?email=${email}&status=${status}`,
    }),
  }),
});

export const { useGetUserDashboardStatusQuery } = statusApi;
