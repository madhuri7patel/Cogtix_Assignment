import React, { useState } from "react";
import {
  MultiLevelContextProvider,
  useMultiLevelContext,
} from "../multiLevel.context";

const DropdownItem = ({ item, active, onClick }) => {
  const hasChildren = item.children && item.children.length > 0;

  const [activeIndex, setActiveIndex] = useState(-1);
  const { setSelectedVal } = useMultiLevelContext();

  return (
    <li className="menuItem">
      <button
        className={`${hasChildren ? "has-children" : ""}${
          active ? " active" : ""
        }`}
        onClick={() => {
          hasChildren && onClick();
          !hasChildren && setSelectedVal(item.name);
        }}
      >
        {item.name}
      </button>
      {hasChildren && active && (
        <ul className="submenu">
          {item.children.map((child, index) => (
            <DropdownItem
              key={child.id}
              item={child}
              active={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
            />
          ))}
        </ul>
      )}
    </li>
  );
};

const Input = ({ onClick }) => {
  const { selectedVal } = useMultiLevelContext();

  return (
    <div className="input-wrapper">
      <input
        type="text"
        value={selectedVal}
        placeholder="Select an item"
        readOnly
        className="input"
        onClick={onClick}
      />
    </div>
  );
};

const MultiLevelDropdown = ({ menuItems }) => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [activeMenu, setMenuActive] = useState(false);
  //console.log("madhuri");

  return (
    <MultiLevelContextProvider>
      <Input onClick={() => setMenuActive(!activeMenu)} />
      {activeMenu && (
        <ul className="menu">
          {menuItems.map((item, index) => (
            <DropdownItem
              key={item.id}
              item={item}
              active={activeIndex === index}
              onClick={() => setActiveIndex(activeIndex === index ? -1 : index)}
            />
          ))}
        </ul>
      )}
    </MultiLevelContextProvider>
  );
};

export default MultiLevelDropdown;
