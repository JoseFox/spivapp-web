import { cacheExchange, query } from "@urql/exchange-graphcache";
import { ClientOptions, dedupExchange, fetchExchange } from "urql";
import {
  LogoutMutation,
  MeDocument,
  MeQuery,
  LoginMutation,
  RegisterMutation,
} from "../generated/graphql";

export const createUrqlClient = (ssrExchange: any): ClientOptions => ({
  url: "http://localhost:4000/graphql",
  fetchOptions: { credentials: "include" },
  exchanges: [
    dedupExchange,
    cacheExchange({
      updates: {
        Mutation: {
          logout: (result: LogoutMutation, args, cache, info) => {
            cache.updateQuery({ query: MeDocument }, (): MeQuery => {
              return { me: null };
            });
          },

          login: (result: LoginMutation, args, cache, info) => {
            cache.updateQuery({ query: MeDocument }, (): MeQuery => {
              if (result.login.errors) {
                return query as MeQuery;
              } else {
                return { me: result.login.user };
              }
            });
          },

          register: (result: RegisterMutation, args, cache, info) => {
            cache.updateQuery({ query: MeDocument }, (): MeQuery => {
              if (result.register.errors) {
                return query as MeQuery;
              } else {
                return { me: result.register.user };
              }
            });
          },
        },
      },
    }),
    ssrExchange,
    fetchExchange,
  ],
});
