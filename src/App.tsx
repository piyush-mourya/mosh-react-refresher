//import Message from "./Message";
import ListGroup from "./components/ListGroup";
import Alert from "./components/Alert";
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
      <Alert>
        Successful <b>Alert</b>
      </Alert>
    </div>
  );
}

export default App;
