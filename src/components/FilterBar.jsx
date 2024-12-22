import React from "react";

function FilterBar  ({ platformFilter, setPlatformFilter, searchQuery, setSearchQuery }) {
  return (
  <div className="flex flex-wrap justify-center gap-4 mb-6">
    <select
      className="border rounded p-2"
      value={platformFilter}
      onChange={(e) => setPlatformFilter(e.target.value)}
    >
      <option value="">All Platforms</option>
      <option value="PC">PC</option>
      <option value="Xbox 360">Xbox 360</option>
      <option value="iPad">iPad</option>
      <option value="iPhone">iPhone</option>
      <option value="Macintosh">Macintosh</option>
      <option value="Nintendo DS">Nintendo DS</option>
      <option value="PlayStation Vita">PlayStation Vita</option>
      <option value="PlayStation 3">PlayStation 3</option>
    </select>

    <input
      type="text"
      className="border rounded p-2"
      placeholder="Search games..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
    />
  </div>
)};

export default FilterBar;
