import React from 'react';
import { useState } from 'react';
import '../CSS/Music.css';



function Music() {
    const[tracks,setTracks]=useState([])
    const[Keyword,setKeyword]=useState("");

    const getTracks = async() =>{
        let data = await fetch(
          `https://v1.nocodeapi.com/rojo/spotify/heLuDCbMtcYkIPps/search?q=${Keyword}&type=track`

        );
        let convertedData =await data.json();
        console.log(convertedData.tracks.items);
        setTracks(convertedData.tracks.items);

    }

  return (
    <div className='centain'>
    <div className="Music">
      
      
      <div className="col">
        <input className="int"type='search'
        value={Keyword}
        onChange={(event)=>{setKeyword(event.target.value)}}
        placeholder='listen to anything'
        aria-label='search'
        
        />
        
        <button class="bg-green-500 h-[50px] w-[200px] hover:bg-green-700 text-white font-bold py-2 px-4 "onClick={getTracks}>SEARCH</button>


        </div>
        
        <div className="mains">
        {/* <div className="col">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"onClick={getTracks}>get me music</button>


        </div> */}
        {tracks.map((element)=>{
            return(
                <div key={element.id} className="cold">
                <div className='cardbox'>
                <img src={element.album.images[0].url} alt=""/>
                <div className="card-title">{element.name}</div>
                <div className='card-body'>Artist: {element.album.artists[0].name}</div>
                <div className='card-date'>Release date: {element.album.release_date}</div>
                <div className='card-audio'>
                  <audio src={element.preview_url}controls></audio>
                </div>
                
                </div>
                
                </div>
                )
        } )}



    </div>
    </div>
    </div>
  )
}

export default Music
