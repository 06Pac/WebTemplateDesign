import './App.css';
import React from 'react';
import './index.css';
import Select from "react-select";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
const options = [
    { value: 'enschede', label: 'Enschede' },
    { value: 'wierden', label: 'Wierden' },
    { value: 'gronau', label: 'Gronau' }
]

const MyComponent = () => (
    <Select
        options={options}
        // defaultInputValue={"select city"}
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? '' : '',
                    background: 'darkgray',
                    color: 'black',

                }),
            }}/>
)

const data = [
    {
        "name": "12:00",
        "Enschede": 4000,
        "Gronau": 20,
        "amt": 2400
    },
    {
        "name": "14:00",
        "Enschede": 3000,
        "Gronau": 40,
        "amt": 2210
    },
    {
        "name": "16:00",
        "Enshede": 2000,
        "Gronau": 60,
        "amt": 2290
    },
    {
        "name": "18:00",
        "Enshede": 2780,
        "Gronau": 55,
        "amt": 2000
    },
    {
        "name": "20:00",
        "Enshede": 1890,
        "Gronau": 60,
        "amt": 2181
    },
    {
        "name": "22:00",
        "Enschede": 2390,
        "Gronau": 65,
        "amt": 2500
    },
    {
        "name": "24:00",
        "Enshede": 3490,
        "Gronau": 75,
        "amt": 2100
    }
]


function App() {

  return (

      <div className="background">
        <div className={'header'}>
          WEATHER
          <br/>
          PROJECT
            <div className="List">
                <MyComponent/>
            </div>
        </div>
          <div className="Line">

          <hr/>
        </div>
          <div className="Chart">
          <LineChart width={1400} height={400} data={data}
                     margin={{ top: 40, right: 60, left: 500, bottom: 30 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis tickSize={10} dataKey="name" tick={{stroke: 'white', strokeWidth: 1}}/>
              <YAxis tick={{stroke: 'white', strokeWidth: 1}} />
              <Tooltip />
              <Line type="monotone" dataKey="Humidity" stroke="#8884d8" />
              <Line type="monotone" dataKey="Gronau" stroke="#82ca9d" />
          </LineChart>
          </div>
          <div className="ButtonList">
            <div className="Buttons">
                <button className="button" role="button">Humidity</button>
                <button className="button" role="button">Pressure</button>
                <button className="button" role="button">Light</button>

            </div>
          </div>
      </div>
  );
}

export default App;
