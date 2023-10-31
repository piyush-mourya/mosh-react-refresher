import { useState } from "react";

function ListGroup() {
  let listItems = ["Piyush", "Ayush", "Yash", "Riya"];
  // Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    // Fragment <></> for surrounding multiple blocks
    <>
      <h1>List</h1>
      {listItems.length === 0 && <p>No items Found</p>}
      <ul className="list-group">
        {listItems.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
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
