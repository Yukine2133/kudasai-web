import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Data, RootData } from "../interface/interface";

export const animeApi = createApi({
  reducerPath: "animeApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.jikan.moe/v4/top/" }),
  endpoints: (builder) => ({
    getAnime: builder.query<Data[], { filter: string; page: number }>({
      query: ({ filter, page }) => ({
        url: `anime`,
        params: {
          filter: filter,
          page: page.toString(),
        },
      }),
      transformResponse: (response: RootData<Data>) => response.data,
    }),
  }),
});

export const { useGetAnimeQuery } = animeApi;
