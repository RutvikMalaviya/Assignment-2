import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";
import FilterBar from "./components/FilterBar";
import GameList from "./components/GameList";


function App () {
  const [games, setGames] = useState([]);
  const [platformFilter, setPlatformFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await fetch("https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json");
        const data = await response.json();
        setGames(data);
      } catch (error) {
        alert("Error fetching game data:", error);
      }
    };

    fetchGames();
  }, []);

  const filteredGames = games.filter((game) => {
    const matchesPlatform = platformFilter
      ? game.platform?.toLowerCase() === platformFilter.toLowerCase()
      : true;
    const matchesSearch = searchQuery
      ? game.title?.toLowerCase().includes(searchQuery)
      : true;
    return matchesPlatform && matchesSearch;
  });

  return (
    <div className="main min-h-screen bg-gray-100 p-6 "
    >
      
      <div className="container mx-auto" >
        <h1 className="text-3xl font-bold text-center mb-6">Game Listing</h1>
        <FilterBar
          platformFilter={platformFilter}
          setPlatformFilter={setPlatformFilter}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <GameList games={filteredGames} />
      </div>
    </div>
  );
};

export default App;
