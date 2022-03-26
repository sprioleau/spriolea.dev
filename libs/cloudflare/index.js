import {
  ApolloClient,
  InMemoryCache,
  gql,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const fetchPageViews = async () => {
  const httpLink = createHttpLink({
    uri: "https://api.cloudflare.com/client/v4/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        "X-AUTH-EMAIL": process.env.X_AUTH_EMAIL,
        authorization: `Bearer ${process.env.CLOUDFLARE_ANALYTICS_API_TOKEN}`,
      },
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  const { data } = await client.query({
    query: gql`
      {
        viewer {
          zones(filter: {zoneTag: "${process.env.CLOUDFLARE_ZONE_ID}"}) {
            httpRequests1dGroups(limit: 10, filter: {AND: [{date_geq: "2022-01-01"}]}) {
              sum {
                pageViews
              }
            }
          }
        }
      }
  
    `,
  });

  const { pageViews } = data.viewer.zones[0].httpRequests1dGroups[0].sum;

  return { pageViews };
};

export const fetchClaps = async () => {
  const response = await fetch(process.env.CLOUDFLARE_WORKER_URL);
  const { claps } = await response.json();
  return { claps };
};
