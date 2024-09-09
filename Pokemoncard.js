export const Pokemoncard=({data})=>{
    console.log(data)
    return( 
        <>
        <li className="card">
        <section className="Pokemon-card">
          <img
            className="pokemon-image"
            src={data.sprites.other.dream_world.front_default}
            alt={data.name}
          />

          <h1 className="name">{data.name}</h1>
          <div >
            <p className="pokemon-info-highlight">{data.types.map((curr)=>(curr.type.name)).join(', ')
            }</p>
          </div>
          <div className="Pokemon-grid">
            <p className="Pokemon-info"> Weight:<span>{data.weight}</span></p>
            <p className="Pokemon-info"> Height:<span>{data.weight}</span></p>
            <p className="Pokemon-info"> Speed:<span>{data.stats[5].base_stat}</span></p>
          </div>
          <div className="Pokemon-grid">
            <p className="Pokemon-info"> Experience:<span>{data.base_experience}</span></p>
            <p className="Pokemon-info"> Attack:<span>{data.stats[1].base_stat}</span></p>
            <p className="Pokemon-info"> Ability:<span>{data.abilities.map((curr) => (curr.ability.name)).slice(0,1)}</span></p>
          </div>
        </section>
        </li>
        </>
    
    )
}