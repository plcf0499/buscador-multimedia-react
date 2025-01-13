import React, { useState } from "react";
import { MediaItem } from "../types/MediaTypes";

interface MediaGridProps {
  items: MediaItem[];
}

const MediaGrid: React.FC<MediaGridProps> = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  return (
    <>
      {/* Grid de ítems */}
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
            {/* Imagen en miniatura */}
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

            {/* Información del Item */}
            <div className="p-1">
              <h3 className="text-lg font-bold truncate" title={item.title}>
                {item.title}
              </h3>

              <p className="text-sm text-white-700 line-clamp-3 mt-2">
                {item.description || "Sin descripción disponible"}
              </p>

              <p className="text-sm font-medium text-white-600 mt-2">
                Type: {item.media_type}
              </p>

              {/* Botón Ver Más */}
              <button
                onClick={() => setSelectedItem(item)}
                className="text-blue-500 hover:underline mt-4 block text-right"
              >
                Ver más
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedItem && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedItem(null)} // Cerrar al hacer clic fuera del modal
        >
          <div
            className="bg-white rounded-lg shadow-lg max-w-2xl w-full h-3/4 overflow-auto relative p-6"
            onClick={(e) => e.stopPropagation()} // Evitar cierre al hacer clic dentro del modal
          >
            {/* Botón Cerrar */}
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-300"
            >
              ✕
            </button>

            {/* Imagen */}
            <div className="mb-4">
              {selectedItem.href ? (
                <img
                  src={selectedItem.href}
                  alt={selectedItem.title}
                  className="w-full h-64 object-cover rounded-lg"
                />
              ) : (
                <div className="h-64 flex items-center justify-center bg-gray-200">
                  <span className="text-gray-500">Sin imagen</span>
                </div>
              )}
            </div>

            {/* Información Completa */}
            <h3 className="text-2xl text-gray-600 font-bold">{selectedItem.title}</h3>
            <p className="text-sm text-gray-700 mt-4">
              {selectedItem.description || "Sin descripción disponible"}
            </p>
            <p className="text-sm font-medium text-gray-600 mt-4">
              Type: {selectedItem.media_type}
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default MediaGrid;
