import Background from '../assets/images/gamesroom.jpg'

import { useEffect, useState } from "react";
// import "./styles.css";

const Games = () => {
 const [ games, setGames ] = useState([]);
 const [ isError, setError ] = useState(false);

 const fetchData = () => {
    fetch('https://thingproxy.freeboard.io/fetch/http://freetogame.com/api/games',
      {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
            'Origin': 'localhost',
            'Access-Control-Allow-Origin': '*',
            "X-Requested-With": "XMLHttpRequest",
        }
      }
    ).then(response => {
      return response.json()
      return (isError)
    })
    .then(result => {
      console.log(result);
      setGames(result)
      //use only 3 sample data
      //setGames( result );

    })
    .catch(error => {
      setError(true)
      console.log("There is an error: " + error)
    });
    
    
  };


useEffect(() => {
 console.log("Games has changed")
 if(games.length == 0) {
  console.log("Games is zero length we will update the games")
  fetchData()
 }
}, [games])





  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed'
      >
        <div className='flex place-items-center h-screen'>
          {/* <h3 className='p-5 bg-white bg-opacity-90 text-black rounded'>The Games App List lets you create a list of free to play games</h3> */}
        </div>
         <div className="App">
             {/* <h1>List of Games</h1> */}
             <table className='p-5 bg-white bg-opacity-90 text-black rounded'>
             <thead>
                 <tr>
                 <th>ID</th>
                 <th>Title</th>
                 <th>Thumbnail</th>
                 <th>Description</th>
                 <th>Game URL</th>
                 <th>Genre</th>
                 <th>Platform</th>
                 <th>Publisher</th>
                 <th>Developer</th>
                 <th>Release Date</th>
                 <th>FreeToGame Profile URL</th>
                 </tr>   
             </thead>   
             <tbody>
                 {
                  games.length > 0 && (
                    games.map( (game,key) => (
                      <tr key={key}>
                      <td className='table-data pr-10'>{game['id'] }</td>
                      <td className='table-data pr-10'>{game['title'] }</td>
                      <td className='table-data pr-10'><img width='100px' height='10px'src={ game['thumbnail'] } alt="flag" /></td>
                      <td className='table-data pr-10'>{game['short_description'] }</td>
                      <td className='table-data pr-10'>{game['game_url'] }</td>
                      <td className='table-data pr-10'>{game['genre'] }</td>
                      <td className='table-data pr-10'>{game['platform'] }</td>
                      <td className='table-data pr-10'>{game['publisher'] }</td>
                      <td className='table-data pr-10'>{game['developer'] }</td>
                      <td className='table-data pr-10'>{game['release_date'] }</td>
                      <td className='table-data pr-10'>{game['freetogame_profile_url'] }</td>

                      </tr>
                    ))
                  )
                }
            
            </tbody>
            </table>
        </div>
    </div>
  );
}

export default Games;