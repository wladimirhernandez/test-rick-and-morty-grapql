function Character(props) {
  return (
    <div className="col mb-4">
      <div className="card h-100">
        <img
          src={props.character.image}
          className="card-img-top"
          alt={props.character.name}
        />
        <div className="card-body">
          <h5 className="card-title">{props.character.name}</h5>
          <p className="card-text">
            Especie:
            {props.character.species === "Human"
              ? "Humano"
              : props.character.species}
            <br />
            Status: {props.character.status === "Alive" ? "Vivo" : ""}
            {props.character.status === "Dead" ? "Muerto" : ""}
            {props.character.status === "unknown" ? "Desconocido" : ""}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Character;
