import { useEffect, useState } from "react";
import Select from "react-select";
import "./App.css";

function App() {
  const [datas, setDatas] = useState([]);
  const [Eshow, setEshow] = useState("");
  const [tempSelect, setTempSelect] = useState(null);

  const SetBerries = async () => {
    const Berries = await fetch("https://pokeapi.co/api/v2/berry/");
    const value = await Berries.json();
    const result = value.results;
    const mapped = result
      .sort((a, b) => a.name.localeCompare(b.name))
      .map((item) => ({
        value: item.name,
        label: item.name,
      }));
    setDatas(mapped);
  };

  const handleChange = (event) => {
    setTempSelect(event);
  };

  const handleShow = () => {
    if (tempSelect) {
      setEshow(tempSelect.label);
    }
  };

  useEffect(() => {
    SetBerries();
  }, []);

  return (
    <>
      <Select options={datas} onChange={handleChange} />
      <br />
      <button onClick={() => handleShow()}>Show Data</button>
      <h1>{Eshow}</h1>
      <br />
      <p>assigment front end for ridho</p>
    </>
  );
}

export default App;
