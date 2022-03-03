import { useState, useEffect } from 'react'
import axios, { Axios } from 'axios'
import './App.css'

const App = () =>  {
  const [playerName, setPlayerName] = useState([])
  const [playerImage, setPlayerImage] = useState([])

  const fetchData = () =>{
    const playerApi = 'https://www.balldontlie.io/api/v1/players/237'
    const playerImage = ' https://nba-players.herokuapp.com/players-stats/james/lebron'

    const getNBAPlayer = axios.get(playerApi)
    const getPlayerPic = axios.get(playerImage)
    axios.all([getNBAPlayer, getPlayerPic]).then(
      axios.spread((...allData) =>
      {
        const allDataPlayer = allData[0].data.first_name
        const getAllPlayerPic = allData[1].config.url

        console.log("Player", allDataPlayer);
        console.log("Pictures", getAllPlayerPic);
       
        setPlayerName(allDataPlayer);
        setPlayerImage(getAllPlayerPic);
        
      })
    )
  }


  useEffect(() => {
     fetchData()
  }, [])
  

  return (
    <div className="App">
      <h2>{playerName}</h2>
      <img src={playerImage} />
    </div>
  )
}

export default App
