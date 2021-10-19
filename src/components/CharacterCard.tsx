import React from 'react';
import Avatar from './Avatar';
import { Types } from './CardGrid';

export interface ICharacterProps {
  type: Types.Character;
  eyeColour: string;
  films: string[];
  gender: string;
  hairColour: string;
  height: number;
  homeworld: string;
  mass: number;
  name: string;
  skinColour: string;
  species: string[];
  starships: string[];
  vehicles: string[];
}

const CharacterCard = (
  props: ICharacterProps,
) => (
  <div>
    <Avatar
      eyeColour={props.eyeColour}
      gender={props.gender}
      hairColour={props.hairColour}
      skinColour={props.skinColour}
    />
    <div className="character__personalInfo" />
    {props.name}
    Height:{props.height}
    Species: {props.species}
    Homeworld: {props.homeworld}
    {/* lists */}
  </div>
);

export default CharacterCard;
