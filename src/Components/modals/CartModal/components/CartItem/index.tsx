import React from "react";
import { Item } from "Common/types/item";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import styles from "./styles.module.scss";

interface IProps {
  item: Item;
  onChangeCount: (id: number, count: number) => void;
}

const CartItem = ({ item, onChangeCount }: IProps) => {
  const { characteristics, image, name, count, id, price, listPrice } = item;

  const onIncreaseCount = () => onChangeCount(id, count + 1);
  const onDecreaseCount = () => onChangeCount(id, count - 1);

  const characteristicsSection =
    characteristics &&
    Object.keys(characteristics).map((characteristic) => (
      <span key={characteristic} className={styles.CartItem__characteristic}>
        {`${characteristic}: ${characteristics[characteristic]}`}
      </span>
    ));

  return (
    <div className={styles.CartItem}>
      <img className={styles.CartItem__logo} src={image} alt={name} />
      <div className={styles.CartItem__about}>
        <div className={styles.CartItem__name}>{name}</div>
        {characteristics && (
          <div className={styles.CartItem__characteristics}>
            {characteristicsSection}
          </div>
        )}
        <div className={styles.CartItem__quantity}>
          <div>
            <MinusOutlined onClick={onDecreaseCount} />
            {count}
            <PlusOutlined onClick={onIncreaseCount} />
          </div>
          <div className={styles.CartItem__price}>
            <span
              className={`${
                listPrice < price ? styles.CartItem__listPrice__changed : ""
              } ${styles.CartItem__listPrice}`}
            >
              {price}
            </span>
            <span>{listPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
