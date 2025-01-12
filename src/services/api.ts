// src/services/api.ts
export const fetchMedia = async (query: string) => {
    const response = await fetch(`https://images-api.nasa.gov/search?q=${query}`);
    const data = await response.json();
    return data.collection.items.map((item: any) => ({
      nasa_id: item.data[0].nasa_id,
      title: item.data[0].title,
      description: item.data[0].description,
      media_type: item.data[0].media_type,
      href: item.links ? item.links[0].href : "",
    }));
  };
  