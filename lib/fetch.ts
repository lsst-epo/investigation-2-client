import { GraphQLClient, RequestDocument } from "graphql-request";

export async function queryAPI<T = any>({
  query,
  variables = {},
  token,
  previewToken,
}: {
  query: RequestDocument;
  variables?: object;
  token?: string | null;
  previewToken?: string;
}): Promise<T> {
  let API_URL = process.env.NEXT_PUBLIC_API_URL as string;
  // Check to see if the environment variable DOCKER_GATEWAY_IP is populated, if so
  // then the URL should be constructed for a Docker static build
  if (
    process.env.DOCKERIZED &&
    process.env.DOCKER_GATEWAY_IP &&
    parseInt(process.env.DOCKER_GATEWAY_IP) !== -1 && // The getApiGatewayURL script returns -1 if an error occurs grabbing the IP
    process.env.DOCKER_GATEWAY_PORT
  ) {
    API_URL = `http://${process.env.DOCKER_GATEWAY_IP}:${process.env.DOCKER_GATEWAY_PORT}/api`;
  }

  const url = previewToken ? `${API_URL}?token=${previewToken}` : API_URL;
  const client = new GraphQLClient(url);
  const headers = {
    ...(token && { authorization: `JWT ${token}` }),
  };

  return client
    .request(query, variables, headers)
    .then((data) => data)
    .catch((error) => {
      process.exitCode = 1;
      console.warn("Error in fetch.js :");
      console.warn(error);
      return error.response;
    });
}
