import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Note: Change v1 to v2 on rapid api

const cryptoExchangesApiHeaders = {
  'x-rapidapi-host': process.env.REACT_APP_CRYPTO_EXCHANGES_HOST,
  'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
};
const createRequest = (url) => ({ url, headers: cryptoExchangesApiHeaders });

export const cryptoExchangesApi = createApi({
  reducerPath: 'cryptoExchangesApi',
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_EXCHANGES_API_URL }),
  endpoints: (builder) => ({
    getExchanges: builder.query({
      query: () => createRequest('/exchanges'),
    }),
  }),
});

export const {
  useGetExchangesQuery,
} = cryptoExchangesApi;
