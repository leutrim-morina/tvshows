import React, { useEffect, useState } from 'react'; 
import axios from 'axios';


function Home() {
  const [search , setSearch] = useState('')
    const [data, setData] = useState()

    const getSearch = (str) => {
      setSearch(str)
    } 
    useEffect(() => {
        axios.get(`https://api.tvmaze.com/search/shows?q=${search}`)
          .then(response => {
            setData(response.data);
            console.log(data)
            
          })
          .catch(error => {
            console.log(error);
          });
      }, [search]);

      const handleSearch = (e) => {
        e.preventDefault();
        getSearch(e.target.value)
    }
  return (
    <>
    <div className="search">
            <h1>TVSHOWS.COM</h1><br />
            <h3>Get instant information over 3000 Series in the world</h3>
            <input type="search"   onKeyUp={handleSearch} placeholder='Search your fav TV Show ...' />
        </div>
      <div className="show-list">
          {data && data.map( dat => (
            <div key={dat.show.id} className="show-data">
              <img src={dat.show.image?.medium ?? "https://static.thenounproject.com/png/1554490-200.png"}  />
              <h2>{dat.show.name}</h2>
              <p>{dat.show.genres} - {dat.show.language}  </p>
              <p >{dat.show.schedule.days} , {dat.show.schedule.time}  on <b>{dat.show.network && `${dat.show.network.name}`}</b></p>
              <a id="alinks" href={dat.show.url}>View more info</a>
              
            </div>
          ))}
        </div>
  </>
  )
};
export default Home
