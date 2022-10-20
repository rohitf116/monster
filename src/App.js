import { useState, useEffect } from "react";
import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

const App = () => {
  const [searchedField, setSearchedField] = useState("");
  const [monster, setMonster] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monster);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((user) => setMonster(user));
  }, []);
  useEffect(() => {
    const newFiletered = monster.filter((mon) => {
      return mon.name.toLocaleLowerCase().includes(searchedField);
    });
    setFilteredMonsters(newFiletered);
  }, [monster, searchedField]);
  console.log(searchedField);

  const searchChange = (event) => {
    const searchedFieldString = event.target.value.toLocaleLowerCase();
    setSearchedField(searchedFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monster's Rolodex</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={searchChange}
        placeholder="search monster"
      />
      <CardList monster={filteredMonsters} />
    </div>
  );
};

export default App;
