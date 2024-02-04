import { useState } from "react";
import Card from "./Card";
import './App.css'

function App() {
  let desc = ["Elon Musk is a visionary entrepreneur and CEO known for founding companies like SpaceX and Tesla. His ambitious pursuits include space exploration, electric vehicles, and renewable energy innovations.","Jeff Bezos is a pioneering entrepreneur and founder of Amazon, transforming e-commerce. As a space enthusiast, he founded Blue Origin. Bezos' business acumen has made him one of the world's wealthiest."]
  return (
    <main>
      <Card name="Elon Musk" description={desc[0]} color="lightBlue" url="elon.jpg"/>
      <Card name="Jeff Bezos" description={desc[1]} color="red" url="jeff.jpg"/>
    </main>
  )
}

export default App