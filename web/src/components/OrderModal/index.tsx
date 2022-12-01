import closeIcon from "../../assets/images/close-icon.svg";
import { Order } from "../../types/Order";
import { formatCurrency } from "../../utils/formatCurrency";
import { Actions, ModalBody, OrderDetails, Overlay } from "./styles";

interface OrderModalProps {
  isOpen: boolean;
  order: Order | null;
}

export function OrderModal({ isOpen, order }: OrderModalProps) {
  if (!isOpen || !order) {
    return null;
  }

  const total = order.products.reduce((acc, { product, quantity }) => {
    return acc + product.price * quantity;
  }, 0);

  return (
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa 2</strong>

          <button type="button">
            <img src={closeIcon} alt="Botão de fechar o modal" />
          </button>
        </header>

        <div className="status-container">
          <small>Status do pedido</small>

          <div>
            <span>
              {order.status === "WAITING" && "🕒"}
              {order.status === "IN_PRODUCTION" && "👨‍🍳"}
              {order.status === "DONE" && "✅"}
            </span>
            <strong>
              {order.status === "WAITING" && "Fila de espera"}
              {order.status === "IN_PRODUCTION" && "Em preparação"}
              {order.status === "DONE" && "Pronto!"}
            </strong>
          </div>
        </div>

        <OrderDetails>
          <strong>Itens</strong>

          <div className="order-items">
            {order.products.map(({ _id, product, quantity }) => {
              return (
                <div className="item" key={_id}>
                  <img
                    width={56}
                    height={28.51}
                    src={`http://localhost:3001/uploads/${product.imagePath}`}
                    alt={product.name}
                  />

                  <span className="quantity">{quantity}x</span>

                  <div className="product-details">
                    <strong>{product.name}</strong>
                    <span>{formatCurrency(product.price)}</span>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="total">
            <span>Total</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </OrderDetails>

        <Actions>
          <button className="primary" type="button">
            <span>👨‍🍳</span>
            <strong>Iniciar Produção</strong>
          </button>

          <button className="secondary" type="button">
            <strong>Cancelar Pedido</strong>
          </button>
        </Actions>
      </ModalBody>
    </Overlay>
  );
}
