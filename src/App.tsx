//import Message from "./Message";
import ListGroup from "./components/ListGroup";
function App() {
  let listItems = ["Piyush", "Ayush", "Yash", "Riya"]!;
  let heading = "Names";
  const handleSelectItem = (item: String) => console.log(item);
  return (
    <div>
      <ListGroup
        groupItems={listItems}
        heading={heading}
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
