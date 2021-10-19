import React from 'react';
import CharacterCard, { ICharacterProps } from './CharacterCard';
import FilmCard, { IFilmProps } from './FilmCard';

type CardProps = ICharacterProps[] | IFilmProps[];

export enum Types {
  Character = 'character',
  Film = 'film',
}

const CardGrid = (cardProps: CardProps) => (
  <div>
    {cardProps.map((card) => {
      switch (card.type) {
        case Types.Character:
          return <CharacterCard {...cardProps as unknown as ICharacterProps} />;
          break;
        case Types.Film:
          return <FilmCard {...cardProps as unknown as IFilmProps} />;
          break;
        default:
          return null;
      }
    })}
  </div>
);

export default CardGrid;
