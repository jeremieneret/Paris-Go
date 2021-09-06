import './App.css';
import {React, useEffect, useState} from 'react';
import axios from 'axios';


function App() {
  const [cover, setCover] = useState();
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://opendata.paris.fr/api/records/1.0/search/?dataset=que-faire-a-paris-&q=&facet=category&facet=tags&facet=address_name&facet=address_zipcode&facet=address_city&facet=pmr&facet=blind&facet=deaf&facet=access_type&facet=price_type&facet=description'
      );
      setCover(result.data.records[0].fields.cover_url);
      console.log(result.data.records[0].fields.title)
      console.log(result.data.records[0].fields.description)
      console.log(result.data.records[0].fields.cover_url)
    }
    fetchData();
  }, [])
  return (
    <div className="App">
      <h1>Hello</h1>
      <img src={cover} alt='cover'/>
    </div>
  );
}

export default App;