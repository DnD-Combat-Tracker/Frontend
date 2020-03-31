import react, { useState } from "react"

export default function PartyInput(){
  const [levelState, setLevelState] = useState({
    level: ''
  })

  const handleChange = e => {
    setLevelState(e.target.vlaue)
  }

  return(
    <div>
      {/*
      Form to input party levels/number of players
        Selector for difficulty of encounter
      */}
      <form>
        <input 
        type="number" 
        name="character-level" 
        id="character-level" 
        value={levelState.level} 
        onChange={handleChange} />
      </form>
    </div>
  )
}