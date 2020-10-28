import Character from "./character";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

const GET_RAM_INFO = gql`
query {
  characters(page: 1, filter: { name: "rick" }) {
    info {
      count
    }
    results {
      name,
      image,
      species,
      status
    }
  }
  character(id: 1) {
    id
  }
}
`;

function Characters() {
  const { data, loading, error } = useQuery(GET_RAM_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4">
     {data.characters.results.map((character) => (
        <Character key={character.name} character={character} />
      ))}
    </div>
  );
}
export default Characters;
/*
*/