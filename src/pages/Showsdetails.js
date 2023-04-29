import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios';

function Showsdetails() {
    const { id } = useParams();
    const [show, setShow] = useState(null);
    const [cast, setCast] = useState();
  
    useEffect(() => {
      axios.get(`https://api.tvmaze.com/shows/${id}`)
        .then(response => {
          setShow(response.data);
          console.log(response.data)
        })
        .catch(error => {
          console.log(error);
        });
    }, [id]);
  
    return (
        <>
      <div>
      {show &&
         <div key={show.id} className="show-data-nohover">
          <img src={show.image?.medium ?? "https://static.thenounproject.com/png/1554490-200.png"}  />
          <h2>{show.name}</h2>
        
          <p>{show.genres} - {show.language}  </p>
          <p id="dateandtime">{show.schedule.days} , {show.schedule.time}  on <b>{show.network && `${show.network.name}`}</b></p>
          <p>Episodes run time {show.runtime} min</p>
          <p>Show Rating : {show.rating.average}</p>
          <p><b>Premiered was in {show.premiered} - Ended in {show.ended}</b> - Current status {show.status}  </p>
          <p>{show.summary}</p>
          
        </div>}
    </div>
      </>
    );
  }
export default Showsdetails