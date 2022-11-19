import React from 'react';

const SearchForm = (props) => {

  function handleSearchFormSubmit(event) {
    event.preventDefault();
    props.onSearchTrails({
      city: event.target.city.value, 
      state: event.target.state.value, 
      activity: event.target.activity.value, 
    });

  return (
    <React.Fragment>
      <form 
        onSubmit={handleSearchFormSubmit}
        className='grid place-items-center'
        >
        <input
          required
          className='border-2 m-1'
          type='text'
          name="city"
          placeholder='City' />
        <input
          required
          className='border-2 m-1'
          type='text'
          name="state"
          placeholder='State' />
        <select name="activity" required>
          <option value="">Select activity</option>
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
}

export default SearchForm;