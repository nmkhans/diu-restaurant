import api from "./api";

export const paymentApi = api.injectEndpoints({
  endpoints: (builder) => ({
    makePayment: builder.mutation({
      query: (data) => ({
        url: "/payment",
        method: "POST",
        body: data,
      }),
    }),
    verifyPayment: builder.query({
      query: ({ transactionId, orderId }) =>
        `/payment/verify?transactionId=${transactionId}&orderId=${orderId}`,
    }),
  }),
});

export const { useMakePaymentMutation, useVerifyPaymentQuery } =
  paymentApi;
