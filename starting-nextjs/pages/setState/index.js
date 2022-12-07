import {useState} from "react";

export default function App() {
  const sideMenus = [
    "감자 튀김 🍟",
    "콜라 🥤",
    "애플 파이 🥧",
    "소프트 아이스크림 🍦",
    "선택하지 않음",
  ];
  const [orders, setOrders] = useState([]);

  const onClickHandler = (selectedItem) => {
    if (selectedItem === "선택하지 않음") {
      setOrders([]);
    }

    if (orders.includes(selectedItem)) {
      setOrders(orders.filter((order) => order !== selectedItem));
      return;
    }

    if (orders.includes("선택하지 않음")) {
      setOrders(orders.filter((order) => order !== "선택하지 않음"));
    }
    setOrders([...orders, selectedItem]);
  };

  console.log(orders);

  return (
    <div className="App">
      <h3>사이드 메뉴를 선택하세요.</h3>
      <ul className="menu-group">
        {sideMenus.map((sideMenu, idx) => (
          <li
            className={
              orders.find((order) => order === sideMenu)
                ? "menu-item active"
                : "menu-item"
            }
            onClick={() => onClickHandler(sideMenu)}
            key={idx}
          >
            {sideMenu}
          </li>
        ))}
      </ul>
    </div>
  );
}
