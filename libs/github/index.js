/* eslint-disable import/prefer-default-export */

import {
  ApolloClient,
  InMemoryCache,
	gql,
	createHttpLink
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const fetchContributions = async () => { 
  const httpLink = createHttpLink({
    uri: "https://api.github.com/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCESS_TOKEN}`,
      }
    }
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  const date = new Date();
  date.setFullYear(date.getFullYear() - 1);

  const { data } = await client.query({
    query: gql`
      {
        user(login: "sprioleau") {
          contributionsCollection(from: "${date.toISOString()}") {
            contributionCalendar {
              totalContributions
            }
          }
        }
      }
  
    `
  });

  const contributionsInLastYear = data.user.contributionsCollection.contributionCalendar.totalContributions;

  return { contributionsInLastYear };
}
