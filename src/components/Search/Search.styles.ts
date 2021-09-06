import styled from "styled-components";

export const Form = styled.form`
  display: grid;
  margin-bottom: 2rem;

  input {
    background: #fff;
    padding: 0.5rem 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
    border-radius: 20px;
    margin-bottom: 1.2rem;
  }

  button {
    background-color: rgba(0, 0, 0, 0.75);
    font-size: 1.4rem;
    padding: 1rem 2rem;
    border-radius: 20px;
    background: #000;
    color: #fff;
    cursor: pointer;
    border: none;
    transition: background-color 250ms;

    :hover {
      background-color: rgba(0, 0, 0, 0.85);
    }
  }

  @media screen and (min-width: 768px) {
    grid-template-columns: 1fr auto;
    grid-gap: 1.2rem;

    input {
      margin-bottom: 0;
    }
  }
`;
