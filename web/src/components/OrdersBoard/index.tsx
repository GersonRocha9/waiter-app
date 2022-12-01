import { useState } from "react";
import { Order } from "../../types/Order";
import { OrderModal } from "../OrderModal";
import { Board, OrdersContainer } from "./styles";

interface OrdersBoardProps {
  icon: string;
  title: string;
  orders: Order[];
}

export function OrdersBoard({ icon, title, orders }: OrdersBoardProps) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  function handleOpenModalOrder(order: Order) {
    setIsOpenModal(true);
    setSelectedOrder(order);
  }

  function handleCloseModal() {
    setIsOpenModal(true);
    setSelectedOrder(null);
  }

  return (
    <Board>
      <OrderModal
        isOpen={isOpenModal}
        order={selectedOrder}
        onClose={handleCloseModal}
      />

      <header>
        <span>{icon}</span>
        <strong>{title}</strong>
        <span>({orders.length})</span>
      </header>

      {orders.length > 0 && (
        <OrdersContainer>
          {orders.map((order) => (
            <button
              type="button"
              key={order._id}
              onClick={() => handleOpenModalOrder(order)}
            >
              <strong>Mesa {order.table}</strong>
              <span>
                {order.products.length}
                {order.products.length === 1 ? " item" : " items"}
              </span>
            </button>
          ))}
        </OrdersContainer>
      )}
    </Board>
  );
}
