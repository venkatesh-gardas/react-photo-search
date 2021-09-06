import React from "react";
import { useState } from "react";
// Components
import PhotosList, { Photo } from "../PhotosList";
// Styles
import { Form } from "./Search.styles";
// API
import API from "../../API";

const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleFormSubmit = async (e: any) => {
    e.preventDefault();

    if (query) {
      try {
        setError(false);
        setLoading(true);
        const photos = await API.searchPhotos(query);
        setPhotos(photos);
      } catch (err) {
        setError(true);
        console.log(err);
      }

      setLoading(false);
    }
  };

  return (
    <>
      <Form onSubmit={handleFormSubmit}>
        <input
          type="text"
          placeholder='Try "apple" or "cat"'
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
        />
        <button type="submit">Search</button>
      </Form>
      <PhotosList photos={photos} loading={loading} error={error} />
    </>
  );
};

export default Search;
