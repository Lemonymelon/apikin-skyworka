const axios = require('axios');

const baseUrl = 'https://swapi.dev/api/';

enum Categories {
  Films = 'films',
  People = 'people,',
  Planets = 'planets',
  Species = 'species',
  Starships = 'starships',
  Vehicles = 'vehicles',
}

export const getFilms = (id: number): any => {
  let url = `${baseUrl}${Categories.Films}/`;

  if (id) {
    url += `${id}/`;
  }

  return axios.get(url);
};

export const getPeople = (id: number): any => {
  let url = `${baseUrl}${Categories.People}/`;

  if (id) {
    url += `${id}/`;
  }

  return axios.get(url);
};

export const getPlanets = (id: number): any => {
  let url = `${baseUrl}${Categories.Planets}/`;

  if (id) {
    url += `${id}/`;
  }

  return axios.get(url);
};

export const getSpecies = (id: number): any => {
  let url = `${baseUrl}${Categories.Species}/`;

  if (id) {
    url += `${id}/`;
  }

  return axios.get(url);
};

export const getStarships = (id: number): any => {
  let url = `${baseUrl}${Categories.Starships}/`;

  if (id) {
    url += `${id}/`;
  }

  return axios.get(url);
};

export const getVehicles = (id: number): any => {
  let url = `${baseUrl}${Categories.Vehicles}/`;

  if (id) {
    url += `${id}/`;
  }

  return axios.get(url);
};
