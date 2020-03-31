import React, {useEffect, useState} from "react"
import axios from "axios"
import MonsterCard from "./MonsterCard"
import "./monsters.scss"
import "../monsters.json"

export default function Dashboard(){
  const [monsterList, setMonsterList] = useState([])



  setMonsterList()
  console.log(monsterList)
  
  let monsterCount = 0;
  return(
    <div className="monster-grid">
      {
        monsterList.map(monster => {
          monsterCount++;
          if(monsterCount < 20){
          return <MonsterCard index={monster.index}/>
          }
        })
      }
    </div>
  )
}