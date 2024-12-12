import React from "react";

const CharacterTable = ({ characters }) => {
  if (characters.length === 0) {
    return <p>No characters found.</p>;
  }

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>status</th>
          <th>species</th>
          <th>type</th>
          <th>gender</th>
          <th>origin</th>
          <th>location</th>
          <th>episode</th>
          <th>image</th>
          <th>createdAt</th>
        </tr>
      </thead>
      <tbody>
        {characters.map((char) => (
          <tr key={char.id}>
            <td>{char.id}</td>
            <td>{char.name}</td>
            <td>{char.status}</td>
            <td>{char.species}</td>
            <td>{char.type || "N/A"}</td>
            <td>{char.gender}</td>
            <td>{char.origin.name}</td>
            <td>{char.location.name}</td>
            <td>{char.episode.length}</td>
            <td>
              <img src={char.image} alt={char.name} width="50" />
            </td>
            <td>{new Date(char.created).toLocaleDateString()}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CharacterTable;
