import { useState } from "react";
import logo from "../../assets/images/logo.svg";
import { CreateCategoryModal } from "../CreateCategoryModal";
import { CreateProductModal } from "../CreateProductModal";

import { Actions, Container, Content } from "./styles";

export function Header() {
  const [isCreateProductOpenModal, setIsCreateProductOpenModal] =
    useState(false);
  const [isCreateCategoryOpenModal, setIsCreateCategoryOpenModal] =
    useState(false);

  function handleCreateProductOpenModal() {
    setIsCreateProductOpenModal(true);
  }

  function handleCreateProductCloseModal() {
    setIsCreateProductOpenModal(false);
  }

  function handleCreateCategoryOpenModal() {
    setIsCreateCategoryOpenModal(true);
  }

  function handleCreateCategoryCloseModal() {
    setIsCreateCategoryOpenModal(false);
  }

  return (
    <Container>
      <Content>
        <CreateProductModal
          isOpen={isCreateProductOpenModal}
          onClose={handleCreateProductCloseModal}
        />

        <CreateCategoryModal
          isOpen={isCreateCategoryOpenModal}
          onClose={handleCreateCategoryCloseModal}
        />

        <img src={logo} alt="WAITERAPP Logo" />

        <div className="page-details">
          <Actions>
            <button
              className="primary"
              type="button"
              onClick={handleCreateProductOpenModal}
            >
              <strong>Adicionar Produto</strong>
            </button>

            <button
              className="primary"
              type="button"
              onClick={handleCreateCategoryOpenModal}
            >
              <strong>Adicionar Categoria</strong>
            </button>
          </Actions>
        </div>
      </Content>
    </Container>
  );
}
