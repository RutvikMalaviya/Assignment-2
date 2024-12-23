import React from "react";
import GameCard from "./GameCard";

function GameList  ({ games }) {
  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    {games ? (games.map((game, index) => <GameCard key={index} game={game} />)
    ) : (
      <p className="text-center text-red-500">No games found.</p>
    )}
  </div>
)};

export default GameList;
