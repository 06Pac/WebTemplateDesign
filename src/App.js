import './App.css';
import React from 'react';
import './index.css';
import Select from "react-select";
import neon from "neon-colors"

import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
    AreaChart,
    Area
} from 'recharts';
import {ModalTitle} from "react-bootstrap";
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
                    borderColor: state.isFocused ? 'black' : 'black',
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

const meta = {
    description: 'I am a description, and I can create multiple tags',
    meta: {
        charset: 'utf-8',
        content:'width=device-width, initial-scale=1, shrink-to-fit=no',
        name: {
            keywords: 'react,meta,document,html,tags'
        }
    }}


function App() {

  return (

      <div className="background">
          <helmet>
          <title>Weather</title>
          <meta{...meta}/>
          </helmet>
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
              <ResponsiveContainer width={1000} height={350} >
          <AreaChart  data={data}
                      margin={{
                          top: 5,
                          right: 50,
                          left: 20,
                          bottom: 10,
                      }}>

              <defs>
                  <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#82ca9d" stopOpacity="0.4"/>
                      <stop offset="75%" stopColor="#82ca9d" stopOpacity="0.05"/>
                  </linearGradient>
              </defs>
              <CartesianGrid opacity={0.2}/>
              <Area dataKey={'Gronau'} stroke={'#82ca9d'} fill="url(#color)"/>
              <XAxis dataKey="name"
                     tick={{stroke: 'white',fontStyle: "Manjari Thin", fontWeight: "normal"}}
                     tickSize={15}
                     axisLine={false}
              tickLine={false}
                     tickCount={8}
                     fontSize={20}
              />

              <YAxis dataKey={'Gronau'}
                     tick={{stroke: 'white'}}
                     axisLine={false}
                     tickLine={false}
                     fontSize={20}
                     // style={'color-white'}
              />
              <Tooltip wrapperStyle={{ width: 150, backgroundColor: '',fontSize: 20,fontFamily:"Manjari Thin" }} />
              <Line type="monotone" dataKey="Humidity" stroke="#8884d8" />
              <Line type="monotone" dataKey="Gronau" stroke="#82ca9d" />
          </AreaChart>
              </ResponsiveContainer>
          </div>

          <div className="ButtonList">
            <div className="Buttons">
                <button className="button" role="button">Temperature</button>
                <button className="button" role="button">Humidity</button>
                <button className="button" role="button">Pressure</button>
                <button className="button" role="button">Light</button>

            </div>
          </div>
      </div>
  );
}

export default App;
