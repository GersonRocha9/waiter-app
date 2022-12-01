import { useEffect } from "react";
import closeIcon from "../../assets/images/close-icon.svg";
import { Actions, ModalBody, Overlay } from "./styles";

interface CreateCategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CreateCategoryModal({
  isOpen,
  onClose,
}: CreateCategoryModalProps) {
  // função de fechar modal ao apertar ESC
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        onClose();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Adicionar Categoria</strong>

          <button type="button" onClick={onClose}>
            <img src={closeIcon} alt="Botão de fechar o modal" />
          </button>
        </header>

        <form className="status-container">
          <small>Categoria: </small>
          <input type="text" />

          <small>Ícone: </small>
          <input type="text" />
        </form>

        <Actions>
          <button className="primary" type="button">
            <strong>Adicionar</strong>
          </button>

          <button className="secondary" type="button">
            <strong>Cancelar</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
