"use client"

import HomePage from "../../pages/Home";

export default function Page() {
  //return <p>Buscador</p>
  return <HomePage></HomePage>
}

/* import React, { useState } from "react";
import Header from "../../components/Header";
import SearchBar from "../../components/SearchBar";
import MediaGrid from "../../components/MediaGrid";
import { fetchMedia } from "../../services/api";
import { MediaItem } from "../../types/MediaTypes";

const Home: React.FC = () => {
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([]);

  const handleSearch = async (query: string) => {
    const results = await fetchMedia(query);
    setMediaItems(results);
  };

  return (
    <div>
      <Header />
      <SearchBar onSearch={handleSearch} />
      <MediaGrid items={mediaItems} />
    </div>
  );
};

export default Home; */
