import styled from "styled-components";

export const Container = styled.header`
  background-color: #d73035;
  height: 198px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 1216px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .page-details {
    h1 {
      font-size: 2rem;
      color: #fff;
    }

    h2 {
      font-weight: 400;
      font-size: 1rem;
      opacity: 0.9;
      color: #fff;
    }
  }
`;
