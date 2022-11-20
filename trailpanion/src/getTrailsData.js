import axios from 'axios';

export const getTrailsData = async () => {
    try {
        const { data } = await axios.get('https://trailapi-trailapi.p.rapidapi.com/activity/', 
          {
            params: {
              lat: '42.525698',
              limit: '25',
              lon: '-72.789787',
              // 'q-state_cont': 'California',
              radius: '25',
              'q-activities_activity_type_name_eq': 'hiking'
            },
            headers: {
              'x-rapidapi-host': 'trailapi-trailapi.p.rapidapi.com',
    'x-rapidapi-key': 'b6ae47641fmsh9978bea9f70b35dp186cafjsn91b9f3796f3b'
            }
          });
        return data;
    } catch (error) {
        console.log(error)
    }
}