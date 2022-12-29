import "./App.css";
import Search from "./components/Search"
import WeatherCardContainer from "./components/WeatherCardContainer";

const App = () => {
  return (
    <div className="App">
      <Search/>
      <WeatherCardContainer />
    </div>
  );
};

export default App;
