import React, {useState} from "react";

export const menuData = {
  title: "Menu",
  items: [
    {
      title: "Item 1",
      items: [
        {
          title: "Subitem 1",
          items: [
            {
              title: "Sub-subitem 1",
            },
            {
              title: "Sub-subitem 2",
            },
          ],
        },
        {
          title: "Subitem 2",
          items: [
            {
              title: "Sub-subitem 1",
            },
            {
              title: "Sub-subitem 2",
            },
          ],
        },
      ],
    },
    {
      title: "Item 2",
    },
    {
      title: "Item 3",
    },
  ],
};

export const Menu = (props) => {
  const [activeItem, setActiveItem] = useState(null);

  const handleClick = (item) => {
    setActiveItem(activeItem === item ? null : item);
  };

  return (
    <div>
      {props.data.title && <p>{props.data.title}</p>}
      {props.data.items &&
        props.data.items.map((item) => (
          <React.Fragment key={item.title}>
            <div onClick={() => handleClick(item)}>{item.title}</div>
            {item.items && item === activeItem && <Menu data={item} />}
          </React.Fragment>
        ))}
    </div>
  );
};
