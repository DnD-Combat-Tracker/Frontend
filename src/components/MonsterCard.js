import React, {useState, useEffect} from "react"
import axios from "axios"
import "./monsters.scss"

export default function MonsterCard(props){
  const [monsterStatistics, setMonsterStatistics] = useState({})
  console.log("monster")
  useEffect(() => {
    axios
    .get(`https://cors-anywhere.herokuapp.com/http://dnd5eapi.co/api/monsters/${props.index}`)
    .then( results => {
      console.log("Monster Stats:", results)
      setMonsterStatistics(results.data)
    })
  })

  return(
    <div className="monster_card">
      <h2>{monsterStatistics.name}</h2>
      <p>{monsterStatistics.challenge_rating}</p>
    </div>
  )
}