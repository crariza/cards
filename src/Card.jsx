function Card ({name,description,color,url}) {
  return (
    <div className="card" style={{border: `4px solid ${color}`}}>
      <div className="color" style={{backgroundColor: color}}></div>
      <img src={url} alt="profile pic" className="user" />
      <div className="info">
        <h2 className="title">{name}</h2>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default Card
