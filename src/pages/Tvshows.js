import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Tvshows() {

const [shows, setShows] = useState([]);
const [page, setPage] = useState(1)

  useEffect(() => {
    axios.get(`https://api.tvmaze.com/shows?page=${page}`)
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [page]);
  return (
    <>
    <div className="pagination">
          <a href="#" onClick={() => {
            if(page > 1) setPage(page => page -= 1)
          }}>Prev</a>
          <span>{ page }</span>
          <a href="#" onClick={() => {
            setPage(page => page += 1)
          }}>Next</a>
        </div>
    <div className="show-list">
      {shows.map(show => (
        <div key={show.id} className="show-data">
          <img src={show.image?.medium ?? "https://static.thenounproject.com/png/1554490-200.png"}  />
          <h2>{show.name}</h2>
          <p>{show.genres} - {show.language}  </p>
          <p id="dateandtime">{show.schedule.days} , {show.schedule.time}  on <b>{show.network && `${show.network.name}`}</b></p>
          <p>Show Rating : {show.rating.average}</p>
          <a id="alinks" href={show.url}>View more info</a>
          
        </div>
      ))}
    </div>
    </>
  );
}


export default Tvshows