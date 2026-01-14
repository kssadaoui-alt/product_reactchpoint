import React from 'react';

class players extends React.Component {
    state = {
        players: [
            {
                name: "Lionel Messi",
                age: 36,
                nationalty: "Argentina",
                 jerseyNumber: 10,   
                team: "Inter Miami CF",
                Image: "https://example.com/messi.jpg",

            },              
        ]};
                
  render() {
    return (
        <div>
            {players.map((player) => (
                <div key={player.id} style={{border: '1px solid black', margin: '10px', padding: '10px'}}>
                    <h2>{player.name}</h2>
                    <img src={player.URL} alt={player.name} style={{width: '150px'}} />
                    <p>Team: {player.team}</p>
                    <p>
                        age: {player.age}
                    </p>
                    <p>: {player.position}</p>
                </div>
            ))}
        </div>
    );
  }
}

export default players;

