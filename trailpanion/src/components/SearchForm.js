import React, { useRef } from 'react';
import useSearchForm from './useSearchForm';


const SearchForm = () => {
  return (
    <React.Fragment>
      <form 
        // onSubmit={props.formSubmissionHandler}
        className='grid place-items-center'
        >
        <input
          required
          className='border-2 m-1'
          type='text'
          name='city'
          placeholder='City' />
        <input
          required
          className='border-2 m-1'
          type='text'
          name='state'
          placeholder='State' />
        <select name="activity" id="" required>
          <option value="hiking">Hiking</option>
          <option value="camping">Camping</option>
          <option value="trail-running">Trail running</option>
          <option value="mountain-biking">Mountain biking</option>
        </select> 
        <button 
          className='border-4 p-4 m-1 flex'
          type='submit'>
            Search
        </button>
      </form>
    </React.Fragment>
  )
}


export default SearchForm;