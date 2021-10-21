import './style/App.scss';
import React, { ChangeEvent, useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CardGrid, { ICardProps } from './components/CardGrid';
import CharacterCard, { ICharacterProps } from './components/CharacterCard';
import FilmCard, { IFilmProps } from './components/FilmCard';
import {
  Categories, getCategoryData, getDataViaUrl,
} from './api';

enum Direction {
  Prev = 'prev',
  Next = 'next',
}

function App() {
  const [searchCategory, setSearchCategory] = useState<Categories>(Categories.People);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState<ICharacterProps[] | IFilmProps[] >([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);

  function tidyCharacterProps(characters: ICharacterProps[]) {
    return characters.map((character) => {
      const letterRegex = /^([a-z]+)[^a-z]+.*$/i;

      // eslint-disable-next-line @typescript-eslint/naming-convention
      let { eye_color, hair_color, skin_color } = character;

      if (letterRegex.test(eye_color) && eye_color !== 'n/a') {
        // eslint-disable-next-line prefer-destructuring
        eye_color = eye_color.match(letterRegex)![1];
      }

      if (letterRegex.test(hair_color) && hair_color !== 'n/a') {
        // eslint-disable-next-line prefer-destructuring
        hair_color = hair_color.match(letterRegex)![1];
      }
      if (letterRegex.test(skin_color) && skin_color !== 'n/a') {
        // eslint-disable-next-line prefer-destructuring
        skin_color = skin_color.match(letterRegex)![1];
      }

      if (hair_color === 'blond') {
        hair_color = 'yellow';
      }

      if (skin_color === 'fair' || skin_color === 'light') {
        skin_color = 'lightgrey';
      }

      console.log(eye_color, hair_color, skin_color);
      return {
        ...character, eye_color, hair_color, skin_color,
      };
    });
  }

  function handleResults(resultsObject: any, category: Categories) {
    if (resultsObject.hasOwnProperty('detail')) {
      // handle error - results not found
      return;
    }
    const { next, previous, results } = resultsObject;
    const typedResults = results.map((result: object) => {
      const typedResult = { ...result, category };

      return typedResult;
    });

    const tidiedResults = tidyCharacterProps(typedResults);

    setNextPage(next);
    setPreviousPage(previous);
    setSearchResults(tidiedResults);
  }

  async function handleSubmit(category: Categories, query: string) {
    const results = await getCategoryData(category, query);

    handleResults(results, category);
  }

  function handleRadioChange(event: ChangeEvent<HTMLInputElement>) {
    if (Object.values(Categories).includes(event.target.value as Categories)) {
      setSearchCategory(event.target.value as Categories);
    }
  }

  async function handlePageButton(direction: Direction) {
    let results;

    if (direction === Direction.Next && nextPage) {
      results = await getDataViaUrl(nextPage);
    }

    if (direction === Direction.Prev && previousPage) {
      results = await getDataViaUrl(previousPage);
    }

    if (results) {
      handleResults(results, searchCategory);
    }
  }

  useEffect(() => {
    setSearchQuery('');

    handleSubmit(searchCategory, '');
  }, [searchCategory]);

  useEffect(() => {
    handleSubmit(searchCategory, searchQuery);
  }, [searchQuery]);

  return (
    <div className="App">
      <div className="main-container">
        <div className="nav">
          <div className="searchbar-and-page-buttons">
            <button
              onClick={() => {
                if (previousPage) {
                  handlePageButton(Direction.Prev);
                }
              }}
              disabled={!previousPage}
            >PREV
            </button>
            <SearchBar category={searchCategory} value={searchQuery} setValue={setSearchQuery} onSubmit={() => handleSubmit(searchCategory, searchQuery)} />
            <button
              onClick={() => {
                if (nextPage) {
                  handlePageButton(Direction.Next);
                }
              }}
              disabled={!nextPage}
            >NEXT
            </button>
          </div>
          <div className="category-radios">
            {/* componetise */}
            <label htmlFor="radio">
              <input
                id="people-radio"
                name="category-radios"
                type="radio"
                value={Categories.People}
                checked={searchCategory === Categories.People}
                onChange={(event) => { handleRadioChange(event); }}
              />
              {Categories.People}
            </label>
            <label htmlFor="radio">
              <input
                id="films-radio"
                name="category-radios"
                type="radio"
                value={Categories.Films}
                checked={searchCategory === Categories.Films}
                onChange={(event) => { handleRadioChange(event); }}
              />
              {Categories.Films}
            </label>
          </div>

        </div>
        {searchResults.length > 0 && <CardGrid cardArray={searchResults} />}
      </div>
    </div>
  );
}

export default App;
