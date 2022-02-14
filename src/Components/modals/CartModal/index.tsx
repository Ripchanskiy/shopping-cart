import React, { useState } from "react";
import { Modal as AntModal, Button } from "antd";
import { CloseCircleFilled } from "@ant-design/icons";

import { Item } from "Common/types/item";
import styles from "./styles.module.scss";
import useModal from "../hooks/useModal";
import CartItem from "./components/CartItem";

interface IProps {
  items: Item[];
  onReinitializeItems: () => void;
  setCartItems: (items: Item[]) => void;
}

const CartModal = ({ items, onReinitializeItems, setCartItems }: IProps) => {
  const { isModalVisible, showModal, handleOk, handleCancel } = useModal();

  const onShowModal = () => {
    onReinitializeItems();
    showModal();
  };

  const onChangeCount = (id: number, count: number) => {
    const modifiedItems = items.map(
      (item): Item => ({
        ...item,
        count: item.id === id ? count : item.count,
      })
    );
    const filtredItems = modifiedItems.filter((item) => item.count !== 0) || [];
    setCartItems(filtredItems);
  };

  return (
    <div>
      <Button type="primary" onClick={onShowModal}>
        Open Cart
      </Button>
      <AntModal
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            type="primary"
            onClick={handleOk}
            className={styles.CartModal__button}
            style={{ borderRadius: "20px" }}
          >
            Order
          </Button>,
        ]}
        closeIcon={<CloseCircleFilled />}
      >
        <div className={styles.CartModal__items}>
          {items.length === 0 ? (
            <p>Your Shopping cart is empty.</p>
          ) : (
            items.map((item) => (
              <CartItem
                item={item}
                key={item.id}
                onChangeCount={onChangeCount}
              />
            ))
          )}
        </div>
      </AntModal>
    </div>
  );
};

export default CartModal;
