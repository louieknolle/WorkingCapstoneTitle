import React from "react";

const SearchForm = (props) => {
  function handleSearchFormSubmit(event) {
    event.preventDefault();
    props.onSearchTrails({
      city: event.target.city.value,
      state: event.target.state.value,
      activity: event.target.activity.value,
    });
  }

  return (
    <React.Fragment>
      <form
        onSubmit={handleSearchFormSubmit}
        className="grid place-items-center z-10 absolute inset-y-1/3 inset-x-1/8 bg-slate-200 left-auto rounded shadow-lg"
      >
        <input
          required
          className="border-2 m-1"
          type="text"
          name="city"
          placeholder="City/Town"
        />
        <select name="state" required className="border-2">
          <option value="">Select State</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
        <select name="activity" required className="border-2">
          <option value="">Select activity</option>
          <option value="hiking">Hiking</option>
          <option value="camping">Camping</option>
          <option value="trail-running">Trail running</option>
          <option value="mountain-biking">Mountain biking</option>
        </select>
        <button
          className="border-2 p-2 m-1 flex bg-white rounded-md"
          type="submit"
        >
          Search
        </button>
      </form>
    </React.Fragment>
  );
};

export default SearchForm;
