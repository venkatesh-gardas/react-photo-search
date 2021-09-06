import styled from "styled-components";

export const Wrapper = styled.div`
  column-count: 3;

  @media screen and (max-width: 600px) {
    column-count: 1;
  }
`;

export const Card = styled.div`
  display: flex;
`;

export const Image = styled.img`
  flex: 100% 1;
  margin-bottom: 1rem;
  border-radius: 1rem;
`;