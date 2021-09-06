import React from "react";
// Components
import Spinner from "../Spinner";
// Styles
import { Wrapper, Card, Image } from "./PhotosList.styles";
// Types
export type Photo = {
  id: string;
  alt_description: string;
  urls: {
    regular: string;
  };
};
type Props = {
  photos: Photo[];
  loading: boolean;
  error: boolean;
};

const PhotosList: React.FC<Props> = ({ photos, loading, error }) => {
  return (
    <>
      {error && <h2>Something went wrong ...</h2>}
      {(loading && <Spinner />) || (
        <Wrapper>
          {photos.map((photo) => (
            <Card key={photo.id}>
              <Image
                src={photo.urls.regular}
                alt={photo.alt_description}
                width="50%"
                height="50%"
              />
            </Card>
          ))}
        </Wrapper>
      )}
    </>
  );
};

export default PhotosList;
