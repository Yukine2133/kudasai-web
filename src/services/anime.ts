import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Data, RootData } from "../interface/interface";

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4/" }),
  endpoints: (builder) => ({
    getAnime: builder.query<
      Data[],
      { filter: string; page: number; limit: number }
    >({
      query: ({ filter, page, limit }) => ({
        url: `top/anime`,
        params: {
          filter: filter,
          page: page.toString(),
          limit: limit.toString(),
        },
      }),
      transformResponse: (response: RootData<Data>) => response.data,
    }),
    getAnimeById: builder.query<Data[], { id: number }>({
      query: ({ id }) => ({
        url: `anime/${id}`,
      }),
      transformResponse: (response: RootData<Data>) => response.data,
    }),
  }),
});

export const { useGetAnimeQuery, useGetAnimeByIdQuery } = animeApi;
