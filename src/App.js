import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Todo from "./components/Todo";
import Navbar from "./Navbar"
import Footer from "./Footer"

function App() {
  return (
    <>
    <Navbar />
    <div className="App">
      <div className="mini bg-light m-auto shadow-lg p-3 mb-5 bg-white rounded fw-bold">
        <p className="heading"> Welcone to Todo list</p>
        <div className="d-flex justify-content-center">
          <div className="p-3">
            <Todo />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
