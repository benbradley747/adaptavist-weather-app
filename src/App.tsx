import "./App.css";
import Header from "./components/Header";
import Search from "./components/Search"
import WeatherCardContainer from "./components/WeatherCardContainer";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Search />
      <WeatherCardContainer />
    </div>
  );
};

export default App;
