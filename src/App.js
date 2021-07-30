import { useState } from "react";
import "./App.css";
import CreateNote from "./Components/CreateNote";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Note from "./Components/Note";

function App() {
  const [addItem, setAddItem] = useState([]);
  const addNote = note => {
    setAddItem([...addItem, note]);
  };
  const deleteItem = id => {
    const newData = addItem.filter((item, index) => {
      return index !== id;
    });
    setAddItem(newData);
  };
  return (
    <>
      <Header />
      <CreateNote addNote={addNote} />
      <div className='container my-5'>
        <div className='row'>
          {addItem.map((element, index) => (
            <Note
              key={index}
              id={index}
              title={element.title}
              content={element.content}
              deleteItem={deleteItem}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
