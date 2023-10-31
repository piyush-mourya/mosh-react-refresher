import { useState } from "react";

interface Props {
  groupItems: String[];
  heading: String;
  onSelectItem: (item: String) => void;
}

function ListGroup({ groupItems, heading, onSelectItem }: Props) {
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // Fragment <></> for surrounding multiple blocks
    <>
      <h1>{heading}</h1>
      {groupItems.length === 0 && <p>No items Found</p>}
      <ul className="list-group">
        {groupItems.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
