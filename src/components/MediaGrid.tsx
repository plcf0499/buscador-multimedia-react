import React from "react";
import { MediaItem } from "../types/MediaTypes";

interface MediaGridProps {
  items: MediaItem[];
}


const MediaGrid: React.FC<MediaGridProps> = ({ items }) => (  
  <div 
    style={{ 
        display: "grid", 
        gap: "1rem", 
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", 
    }}
    className="p-4"
    >
    {items.map((item) => (
      <div 
        key={item.nasa_id} 
        style={{ border: "1px solid #ccc", padding: "1rem" }}
        className="border border-gray-300 rounded-lg shadow-md overflow-hidden"
        >
        <div className="h-48 bg-gray-200">
            {item.href ? (
            <img
                src={item.href}
                alt={item.title}
                className="h-full w-full object-cover"
            />
            ) : (
            <div className="flex items-center justify-center h-full">
                <span className="text-gray-500">Sin imagen</span>
            </div>
            )}
        </div>
        <div className="p-1">
            <h3 className="text-lg font-bold truncate" title={item.title}>
                {item.title}
            </h3> 

            <p className="text-sm text-white-700 line-clamp-5 mt-2">
                {item.description || "Sin descripción disponible"}
            </p>

            <p className="text-sm font-medium text-back-600 mt-2">
                Type: {item.media_type}
            </p>    

            <a 
            href={item.href} target="_blank" rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-4 block text-right"
            >
            Ver más
            </a>
        </div>
      </div>
    ))}
  </div>
  
  
);

export default MediaGrid;
function useState<T>(arg0: null): [any, any] {
    throw new Error("Function not implemented.");
}

