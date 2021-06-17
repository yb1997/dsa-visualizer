import React from "react";
import {
  Bar, BarChart, Tooltip, XAxis, YAxis
} from "recharts";
import { bubbleSort } from "./algo";
import "./App.css";
import { ArrayInput, Button, Center, Output } from "./components/common-components";


function App() {
  const [inputText, setInputText] = React.useState("");
  const [arr, setArr] = React.useState([5, 4, 3, 2, 1]);
  const [data, setData] = React.useState([
    { name: "1", val: 1 },
    { name: "2", val: 2 },
    { name: "3", val: 3 },
    { name: "4", val: 4 },
  ]);

  React.useEffect((_) => {
    const arrClone = [...arr];
    bubbleSort(arrClone);
    setArr(arrClone);
  }, []);

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();

    // 1. highlight values that are going to be swapped
    // 2. swap the values
    setTimeout((_) => {
      const newData = [data[3], data[2], data[1], data[0]];
      setData(newData);
    }, 2000);
  };

  return (
    <div className="App">
      <form onSubmit={handleOnSubmit}>
        <ArrayInput
          type="text"
          value={inputText}
          onChange={handleChange}
          placeholder="Enter items..."
        />

        <Button type="submit">Sort</Button>
      </form>

      <h3>Output</h3>
      <Center>
        <Output>
          <ul>
            {arr.map((a) => (
              <li key={a}>{a}</li>
            ))}
          </ul>
        </Output>
      </Center>
            
      <br/>

      <Output>
        <BarChart width={500} height={300} data={data}>
          <XAxis stroke="white" dataKey="val" />
          <YAxis stroke="white" dataKey="val" />
          <Bar fill="dodgerblue" dataKey="val" />
        </BarChart>
      </Output>
    </div>
  );
}

export default App;
