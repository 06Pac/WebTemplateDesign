import './App.css';
import React from 'react';
import './index.css';
import Select from "react-select";
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
const forecast = [
    {value: 'hour', label: 'hour'},
    {value: 'days', label: 'days'},
    {value: 'week', label: 'week'}
]

const MyComponent = () => (
    <Select
        options={options}

        // onChange ={}
        // defaultInputValue={"select city"}
            styles={{
                control: (baseStyles, state) => ({
                    ...baseStyles,
                    borderColor: state.isFocused ? 'whitesmoke' : 'black',
                    height: '5px',
                    fontSize: '25px',
                    width: '250px',
                    background: 'darkgray',
                    color: 'black',
                }),
            }}/>
)
const MyyComponent = () => (
    <Select
        options={forecast}

        // onChange ={}
        // defaultInputValue={"hour"}
        styles={{
            control: (baseStyles, state) => ({
                ...baseStyles,
                borderColor: state.isFocused ? 'whitesmoke' : 'black',
                height: '5px',
                fontSize: '20px',
                width: '150px',
                background: 'darkgray',
                color: 'black',
            }),
        }}/>
)

const data = [
    {
        "Xtime": "12:00",
        "Temperature": 5,
        "Light": 20,
        "Pressure": 2400
    },
    {
        "Xtime": "14:00",
        "Temperature": 6,
        "Light": 40,
        "Pressure": 2210,
        "Humidity": 100
    },
    {
        "Xtime": "16:00",
        "Temperature": 7,
        "Light": 60,
        "Pressure": 2290,
        "Humidity": 100

    },
    {
        "Xtime": "18:00",
        "Temperature": 4,
        "Light": 55,
        "Pressure": 2000,
        "Humidity": 100

    },
    {
        "Xtime": "20:00",
        "Temperature": 4,
        "Light": 60,
        "Pressure": 2181,
        "Humidity": 100

    },
    {
        "Xtime": "22:00",
        "Temperature": 3,
        "Light": 65,
        "Pressure": 2500,
        "Humidity": 100

    },
    {
        "Xtime": "24:00",
        "Temperature": 3,
        "Light": 75,
        "Pressure": 2100,
        "Humidity": 100

    }
]


// https://pastebin.com/GWSUYcbZ
function App() {
    let state = "Enschede"
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
          <div className={'time_select'}>
              <MyyComponent/>
          </div>
          <div className="Chart">
              <ResponsiveContainer width='100%' height={400} >
          <AreaChart  data={data}
                      padding-left={500}
                      margin={{
                          top: 5,
                          right: 500,
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
              <Area dataKey={'Temperature'} stroke={'#82ca9d'} fill="url(#color)"/>
              <XAxis dataKey="Xtime"
                     tick={{stroke: 'white',fontStyle: "Manjari Thin", fontWeight: "normal"}}
                     tickSize={15}
                     axisLine={false}
              tickLine={false}
                     tickCount={8}
                     fontSize={20}
              />

              <YAxis dataKey={'Temperature'}
                     tick={{stroke: 'white'}}
                     axisLine={false}
                     tickLine={false}
                     fontSize={20}
                     tickCount={6}
              />
              <Tooltip wrapperStyle={{ width: 200, backgroundColor: '',fontSize: 20,fontFamily:"Manjari Thin" }} />
              <Line type="monotone" dataKey="Temperature" stroke="#82ca9d" />
          </AreaChart>
              </ResponsiveContainer>
          </div>

          <div className="ButtonList">
            <div className="Buttons">
                <button className="button" role="button" >Temperature</button>
                <button className="button" role="button">Humidity</button>
                <button className="button" role="button">Pressure</button>
                <button className="button" role="button">Light</button>

            </div>
          </div>
      </div>
  );
}

export default App;
