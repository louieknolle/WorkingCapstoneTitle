import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from "axios"
import { OPEN_WEATHER_KEY } from '../constants'

const initialState = {
  trailsList: [],
  selectedTrailIndex: -1,
  coordinates: null
}


export const getCoordinates = createAsyncThunk('maps/getCoordinates', async ({city, state}) => {
  try {
    const { data } = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},840&limit=1&appid=${OPEN_WEATHER_KEY}`
    );
    return data[0]
  } catch (e) {
    console.warn(e)
  }
})

export const getTrailsList = createAsyncThunk('maps/getTrailsList', async ({coordinates, activity}) => {
  try {
    const { data } = await axios.get(
      "https://trailapi-trailapi.p.rapidapi.com/activity/",
      {
        params: {
          lat: coordinates.lat,
          limit: "5",
          lon: coordinates.lon,
          radius: "25",
          "q-activities_activity_type_name_eq": activity,
        },
        headers: {
          "x-rapidapi-host": "trailapi-trailapi.p.rapidapi.com",
          "x-rapidapi-key":
            "b6ae47641fmsh9978bea9f70b35dp186cafjsn91b9f3796f3b",
        },
      }
    )
    return data
  } catch (e) {
    console.warn(e)
  }
})

export const mapsSlice = createSlice({
  name: 'maps',
  initialState,
  reducers: {
    setSelectedTrailById: (state, action) => {
      const trailIndex = state.trailsList.findIndex(trail => trail.place_id === action.payload)
      state.selectedTrailIndex = trailIndex
    },
    clearTrailsList: (state) => {
      state.trailsList = null
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getTrailsList.fulfilled, (state, action) => {
      state.trailsList = Object.values(action.payload)
    })
    builder.addCase(getCoordinates.fulfilled, (state, action) => {
      state.coordinates = action.payload
    })
  }
})

export const { setSelectedTrailById, clearTrailsList } = mapsSlice.actions

export default mapsSlice.reducer