const axios = require('axios');

const baseUrl = 'https://swapi.dev/api/';

export enum Categories {
  Films = 'films',
  People = 'people',
  Planets = 'planets',
  Species = 'species',
  Starships = 'starships',
  Vehicles = 'vehicles',
}

export const getData = async (category: Categories, query: string = ''): Promise<any> => {
  const url = `${baseUrl}${category}/`;

  const result = await axios.get(url, { search: query });
  return result.data;
};

export const getFilms = (query: string): Promise<any> => {
  const url = `${baseUrl}${Categories.Films}/`;

  return axios.get(url, { search: query });
};

export const getPeople = (query: string): Promise<any> => {
  const url = `${baseUrl}${Categories.People}/`;

  return axios.get(url, { search: query });
};

export const getPlanets = (query: string): Promise<any> => {
  const url = `${baseUrl}${Categories.Planets}/`;

  return axios.get(url, { search: query });
};

export const getSpecies = (query: string): Promise<any> => {
  const url = `${baseUrl}${Categories.Species}/`;

  return axios.get(url, { search: query });
};

export const getStarships = (query: string): Promise<any> => {
  const url = `${baseUrl}${Categories.Starships}/`;

  return axios.get(url, { search: query });
};

export const getVehicles = (query: string): Promise<any> => {
  const url = `${baseUrl}${Categories.Vehicles}/`;

  return axios.get(url, { search: query });
};
