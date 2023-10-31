//import Message from "./Message";
import ListGroup from "./components/ListGroup";
function App() {
  let listItems = ["Piyush", "Ayush", "Yash", "Riya"];
  let heading = "Names";
  return (
    <div>
      <ListGroup groupItems={listItems} heading={heading} />
    </div>
  );
}

export default App;
