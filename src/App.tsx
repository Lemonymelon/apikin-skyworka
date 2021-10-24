import './style/App.scss';
import React, { ChangeEvent, useState, useEffect } from 'react';
import SearchBar from './components/SearchBar';
import CardGrid from './components/CardGrid';
import { ICharacterProps } from './components/CharacterCard';
import { IFilmProps } from './components/FilmCard';
import RadioButtonGroup from './components/RadioButtonGroup';
import {
  Categories, getCategoryData, getDataViaUrl,
} from './api';
import { tidyCharacterProps } from './utils';

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
      <img className="star-wars-logo" src="https://www.freepnglogos.com/uploads/star-wars-logo-0.png" alt="star wars logo" />
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
          <RadioButtonGroup
            className="category-radios"
            buttons={[
              {
                id: 'people-radio',
                name: 'category-radios',
                value: Categories.People,
                checked: searchCategory === Categories.People,
                onChange: (event) => handleRadioChange(event),
              },
              {
                id: 'films-radio',
                name: 'category-radios',
                value: Categories.Films,
                checked: searchCategory === Categories.Films,
                onChange: (event) => handleRadioChange(event),
              },
            ]}
          />
        </div>
        {searchResults.length > 0 && <CardGrid cardArray={searchResults} />}
      </div>
    </div>
  );
}

export default App;
