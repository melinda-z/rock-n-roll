import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class Band { @tracked name; @tracked songs;
constructor({ id, name, songs }) {
this.id = id;
this.name = name;
this.songs = songs || [];
} }

export default class BandsBandRoute extends Route {
  @service catalog;

  model(params) {
    return this.catalog.find('band', (band) => band.id === params.id);
  }
}
