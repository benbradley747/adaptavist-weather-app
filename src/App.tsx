import { CircularProgress } from "@mui/material";
import "./App.css";
import Search from "./components/Search"
import { useAppSelector } from "./store/hooks";

const App = () => {
  return (
    <div className="App">
      <Search/>
    </div>
  );
};

export default App;
