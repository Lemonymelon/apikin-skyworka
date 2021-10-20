import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import './style/App.scss';

import {
  Categories, getData,
} from './api';

function App() {
  const [searchCategory, setSearchCategory] = useState<Categories>(Categories.People);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchResults, setSearchResults] = useState([]);
  const [nextPage, setNextPage] = useState<string | null>(null);
  const [previousPage, setPreviousPage] = useState<string | null>(null);

  console.log(searchQuery);
  console.log(searchResults);

  function handleResults(resultsObject: any) {
    if (resultsObject.hasOwnProperty('detail')) {
      // handle error - results not found
      return;
    }
    const { next, previous, results } = resultsObject;

    setNextPage(next);
    setPreviousPage(previous);
    setSearchResults(results);
  }

  async function handleSubmit(category: Categories, query: string) {
    const results = await getData(category, searchQuery);
    console.log(results);

    handleResults(results);
  }

  return (
    <div className="App">
      {/* <Header /> */}
      <div className="main-container">
        <SearchBar category={searchCategory} value={searchQuery} setValue={setSearchQuery} onSubmit={() => handleSubmit(searchCategory, searchQuery)} />
        <button onSubmit={() => handleSubmit(searchCategory, searchQuery)}>BUTTON</button>
      </div>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
