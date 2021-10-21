import React from 'react';
import CharacterCard, { ICharacterProps } from './CharacterCard';
import FilmCard, { IFilmProps } from './FilmCard';
import { Categories } from '../api';

export type CardArray = ICharacterProps[] | IFilmProps[];

export interface ICardProps {
  cardArray: CardArray;
}

const CardGrid = (props: ICardProps) => (
  <div className="card-grid">
    {props.cardArray.map((card, index) => {
      // console.log(card);
      switch (card.category) {
        case Categories.People:
          return <CharacterCard {...card as unknown as ICharacterProps} key={index} />;
          break;
        case Categories.Films:
          return <FilmCard {...card as unknown as IFilmProps} key={index} />;
          break;
        default:
          return null;
      }
    })}
  </div>
);

export default CardGrid;
