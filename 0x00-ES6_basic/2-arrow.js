export default function getNeighborhoodsList() {
  this.sanFranciscoNeighbourhoods = ['SOMA', 'Union Square'];

  this.addNeighbourhood = (newNeighbourhood) => {
    this.sanFranciscoNeighbourhoods.push(newNeighbourhood);
    return this.sanFranciscoNeighbourhoods;
  };
}
