import React from 'react';
import { Categories } from '../api';

export interface IFilmProps {
  category: Categories.Films;
  title: string;
}

const FilmCard = (
  props: IFilmProps,
) => (
  <div>
    Title: {props.title}
  </div>
);

export default FilmCard;
