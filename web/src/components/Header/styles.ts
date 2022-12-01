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

export const Actions = styled.footer`
  display: flex;
  gap: 8px;
  margin-top: 32px;

  .primary {
    background: #333;
    border-radius: 48px;
    border: 0;
    color: #fff;
    padding: 12px 24px;
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: center;
    transition: 0.2s;

    &:hover {
      transition: 0.2s;
      transform: scale(1.05);
    }
  }
`;
