import React from "react";
import { MediaItem } from "../types/MediaTypes";

interface MediaGridProps {
  items: MediaItem[];
}

const MediaGrid: React.FC<MediaGridProps> = ({ items }) => (
  <div style={{ display: "grid", gap: "1rem", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))" }}>
    {items.map((item) => (
      <div key={item.nasa_id} style={{ border: "1px solid #ccc", padding: "1rem" }}>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <p>Tipo: {item.media_type}</p>
        <a href={item.href} target="_blank" rel="noopener noreferrer">
          Ver más
        </a>
      </div>
    ))}
  </div>
);

export default MediaGrid;
