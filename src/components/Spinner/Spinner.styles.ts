import styled from "styled-components";

export const Spinner = styled.div`
  width: 5rem;
  height: 5rem;
  border: 0.5rem solid #eee;
  border-top: 0.5rem solid #353535;
  border-radius: 50%;
  margin: 20px auto;
  animation: spin 0.8s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(odeg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;
