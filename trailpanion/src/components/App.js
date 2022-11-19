import React from "react";
import Header from "./Header";
import SearchForm from './SearchForm';
import HomeMap from "./HomeMap";
// import { getTrailsData } from './getTrailsData';
import { useForm } from 'react-hook-form';


const App = () => {
  const {data} = useForm();
  return (
    <React.Fragment>
      <Header />
      <div className='container flex flex-row'>
        <SearchForm />
        <HomeMap />
      </div >
    </React.Fragment>
  );
};

export default App;
