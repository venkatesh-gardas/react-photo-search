import { Photo } from "./components/PhotosList";
import { ACCESS_KEY, SEARCH_PHOTOS_URL } from "./config";

const defaultConfig = {
  headers: {
    Authorization: `Client-ID ${ACCESS_KEY}`,
  },
};

const API = {
  searchPhotos: async (query: string): Promise<Photo[]> => {
    return await (
      await (await fetch(`${SEARCH_PHOTOS_URL}${query}`, defaultConfig)).json()
    ).results;
  },
};

export default API;
