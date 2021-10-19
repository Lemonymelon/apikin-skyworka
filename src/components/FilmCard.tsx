import React from 'react';
import Avatar from './Avatar';

export interface IFilmProps {
  type: 'film';
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
