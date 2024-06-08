import "./App.css";
import MainBlock from "./countdown/mainBlock";
import NavBar from "./navBar/navBar";

function App() {
  return (
    <>
      <NavBar />

      <div className="containers">
        <MainBlock />
      </div>
    </>
  );
}

export default App;
