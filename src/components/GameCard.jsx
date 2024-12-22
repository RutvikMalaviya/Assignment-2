import React from "react";

function GameCard  ({ game }) {
  return (
  <div className="border rounded-xl p-4 shadow-2xl text-black">
    <h3 className="text-xl font-bold">{game.title}</h3>
    <p>Platform:{game.platform}</p>
    <p>Score: {game.score}</p>
    <p>Genre: {game.genre}</p>
    <p>Editor's Choice: {game.editors_choice}</p>
  </div>
)};

export default GameCard;
