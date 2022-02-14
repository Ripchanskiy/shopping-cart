import React, { useState } from "react";
import "antd/dist/antd.min.css";
import "Styles/index.scss";
import items from "Utils/mockData/items.json";
import CartModal from "Components/modals/CartModal";
import { Item } from "Common/types/item";
import styles from "./styles.module.scss";

function App() {
  const [cartItems, setCartItems] = useState<Item[]>(items);

  const onReinitializeItems = () => setCartItems(items);

  return (
    <div className={styles.App}>
      <CartModal
        items={cartItems}
        onReinitializeItems={onReinitializeItems}
        setCartItems={setCartItems}
      />
    </div>
  );
}

export default App;
