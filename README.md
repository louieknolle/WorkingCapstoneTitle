## Louie Knolle

## Trail-panion

#### Project's goal:

    * _Allow users to create an inventory of hiking/outdoors gear, create packing lists, and browse potential destinations._
    * _With React.js UI, Node/Express backend, and utilizing at least TrailApi and Mapbox GL JS._

### Research & Planning Log

#### Tuesday, 11/01

- 11:45 am: continue with TypeScript tutorial
- 3:00 pm: finish Typescript tutorial

#### Thursday, 11/03

- 11:15 am : start following setting up MapBox with React tutorial in MapBox GL JS docs
  - https://docs.mapbox.com/help/tutorials/use-mapbox-gl-js-with-react/
- 12:15 pm :
  - finish mapbox tutorial, functioning map displayed with coordinates and zoom held in state/displayed on map and updates via useEffect
  - start looking at examples of maps with different layers and markers on maps from geoJSON data
  - get a second map to display with markers for hiking spots near me supplied from an edited json mapbox dataset
- 1:30 pm : wrap up 1st mapbox exploration

#### Saturday, 11/06

- 8:30 am - 9:30 am
  - start looking through map examples in Mapbox docs and start reading TrailAPI docs and endpoints
  * install axios for trailapi call and begin work on function for that

* 12:00 pm - 1:00 pm

  - start testing trails api call

  * successfully call trailapi and log return object to console

* 8:15 pm - 9:30 pm
  - start trying to get coordinates from trailapi to show up as markers on map and SUCCEED :D
    -write capstone proposal file

#### Friday, 11/18

- 8:00 pm - 10:00 pm
  - start buidling trailpanion as a react app
  - install tailwind css
  - add Mapbox to home page

#### Saturday, 11/19

- 7:00 am - 8:30 am, 9:45 am - 10:30 am
  - start working on map container bug, display map and add form
  - start connecting form data to trailapi, research react-hook-form library
- 12:30 - 2:00 pm
  - switch back to manually collecting form values and setting as state to be used in trail api call
  - take way too long finding issue caused by misplaced }
