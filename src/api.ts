const axios = require('axios');

const baseUrl = 'https://swapi.dev/api/';

export enum Categories {
  Films = 'films',
  People = 'people',
  // Planets = 'planets',
  // Species = 'species',
  // Starships = 'starships',
  // Vehicles = 'vehicles',
}

export const getCategoryData = async (category: Categories, query: string = ''): Promise<any> => {
  const url = `${baseUrl}${category}?search=${query}`;

  // config search query not working - appended string less easily extensible
  const result = await axios.get(url);
  return result.data;
};

export const getDataViaUrl = async (url: string) => {
  const result = await axios.get(url);
  return result.data;
};
