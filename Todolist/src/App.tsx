import "./App.css";
import Header from "./components/Header";
import Slider from "./components/Slider";
import InputBar from "./components/InputBar";
import Tasklist from "./components/Tasklist";
import EllipsisMenu from "./components/EllipsisMenu";

function App() {
  return (
    <>
      <div className=" app">
        <Header />
        <Slider />
        <InputBar />
        <Tasklist />
        <Tasklist />
        <Tasklist />
        <Tasklist />
        <Tasklist />
        <Tasklist />
        <Tasklist />
      </div>
    </>
  );
}

export default App;
