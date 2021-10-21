import React from 'react';
import Avatar from './Avatar';
import { Categories } from '../api';

export interface ICharacterProps {
  category: Categories.People;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: number;
  homeworld: string;
  mass: number;
  name: string;
  skin_color: string;
  species: string[];
  starships: string[];
  vehicles: string[];
}

const CharacterCard = (
  props: ICharacterProps,
) => (
  <div className="character-card">
    <div className="character-card__name">{props.name}</div>
    <div className="character-card__mass">{props.mass}kg</div>
    <Avatar
      eye_color={props.eye_color}
      gender={props.gender}
      hair_color={props.hair_color}
      skin_color={props.skin_color}
    />
    <div className="character-card__height">{props.height}cm</div>
    <div className="character__personalInfo" />

    {/* lists */}
  </div>
);

export default CharacterCard;
