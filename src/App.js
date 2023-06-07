import React from "react";
import "./App.css";
import Card from "./components/Card";
import Header from "./components/Header"
import axios from "axios";
import { useEffect, useState } from "react"

function App() {
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]);
const [arr, setArr] = useState([]);
  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);

  };
   useEffect(() => {
 
  
    let url = `https://api.nasa.gov/planetary/apod?api_key=O7TfO9IpmOWyYRUKSPZ8G3zhd2fLQ4zlwL8Edv0b&start_date=2023-05-27=&end_date=${selectedDate}`;
   
      const gelenveri = axios.get(url);
      gelenveri.then((res) => {
        const items = res.data.map((item,index)=>{
          const newItem = {
            src: item.hdurl,
            altText: item.title,
            caption: item.date,
            key: index,
          }
          return newItem;
        });
        setArr(items);
        setData(res.data[res.data.length-1]);
       
      }).catch((err) => {
        console.log(err)
      })
    }, [selectedDate]);
  

  return (
    <div className="App">
     <Header handleDateChange={handleDateChange} selectedDate={selectedDate} />
      {data.url ? <Card data={data} arr={arr} /> : <p>Yükleniyor</p>}
      
    </div>
  );
}

export default App;
