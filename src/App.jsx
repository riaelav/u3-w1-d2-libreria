import "./App.css";
import AllTheBooks from "./components/AllTheBooks.jsx";
import MyFooter from "./components/MyFooter";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome.jsx";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <AllTheBooks />
      <MyFooter />
    </>
  );
}

export default App;
