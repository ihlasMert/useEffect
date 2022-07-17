import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css"

const App = () => {
  const [hits, setHits] = useState([]);
  const [query, setQuery] = useState("covid19");

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `https://hn.algolia.com/api/v1/search?query=${query}`
      );
      setHits(data.hits);
    };
    fetchData();
  }, [query]);

  return (
    <div className="App">
      <input type="text" className="App" onChange={(e) => setQuery(e.target.value)} />
      <ul>
       {hits.map((hit)=>(
        <li key={hit.objectID}>{hit.title}</li>
       ))}
      </ul>
    </div>
  );
};

export default App;
//componentDidMount bir kereye mahsus bir defa çalışıyor, ilk renderden sonra

//  componentDidUpdate(){
/*  document.title = `${this.state.count} kez tıklandı`
}her tıklandığında bu olur */

//içinde bir tane effect diyebileceğimiz metod alıyor ve bize değer döndürüyor.

//clean-up gerektiren ve gerektirmeyen

/* //clean-up gerektiren useEffect(()=>{
  document.title = `${count} kez tıklandı`
}) */

//[ikinci kez çalşmıyor]

//
