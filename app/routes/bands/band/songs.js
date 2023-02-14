import Route from '@ember/routing/route';

export default class Song {
  constructor({ title, rating, band }) {
  this.title = title;
  this.rating = rating ?? 0;
  this.band = band; } }
  export default class BandsBandSongsRoute extends Route {
  resetController(controller) {
    controller.title = '';
    controller.showAddSong = true;
  }
}
