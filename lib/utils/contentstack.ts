import axios from "axios";

const BASE_URL = "https://eu-cdn.contentstack.com/v3";

const apiKey = process.env.CONTENTSTACK_API_KEY;
const deliveryToken = process.env.CONTENTSTACK_DELIVERY_TOKEN;
const environment = process.env.CONTENTSTACK_ENVIRONMENT;

if (!apiKey || !deliveryToken || !environment) {
  throw new Error("Missing Contentstack environment variables");
}

const client = axios.create({
  baseURL: BASE_URL,
  headers: {
    api_key: apiKey,
    access_token: deliveryToken,
  },
});

export const fetchEntries = async (contentType: string) => {
  try {
    const response = await client.get(`/content_types/${contentType}/entries`, {
      params: {
        environment,
      },
    });
    return response.data.entries;
  } catch (error) {
    console.error("Error fetching entries", error);
    throw error;
  }
};
