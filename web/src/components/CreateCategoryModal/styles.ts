import styled from "styled-components";

export const Overlay = styled.div`
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4.5px);
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ModalBody = styled.div`
  background: #fff;
  width: 480px;
  border-radius: 8px;
  padding: 32px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 24px;
    }

    button {
      background: transparent;
      border: 0;
      line-height: 0;
    }
  }

  .status-container {
    margin-top: 32px;

    input {
      width: 100%;
      padding: 12px;
      background: transparent;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-bottom: 8px;
    }

    small {
      font-size: 14px;
      opacity: 0.8;
    }

    div {
      margin-top: 8px;
      display: flex;
      align-items: center;
      gap: 8px;
    }
  }
`;

export const Actions = styled.footer`
  display: flex;
  flex-direction: column;
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

  .secondary {
    padding: 12px 24px;
    border-radius: 48px;
    color: #d73035;
    border: 0;
    background: transparent;
    margin-top: 16px;
    transition: 0.2s;

    &:hover {
      transition: 0.2s;
      transform: scale(1.05);
    }
  }
`;
