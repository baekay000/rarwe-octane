import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class BandsNewController extends Controller {
  @service catalog;
  @service router;

  @tracked name;
  constructor() {
    super(...arguments);
    this.router.on('routeWillChange', (transition) => {
      if (transition.from.name === 'bands.new') {
        if (this.name) {
          let leave = window.confirm('You have unsaved changes. Are you sure?');
          if (!leave) {
            transition.abort();
          }
        }
      }
    });
  }

  @action
  updateName(event) {
    this.name = event.target.value;
  }
  @action
  async saveBand() {
    let band = await this.catalog.create('band', { name: this.name });
    this.router.transitionTo('bands.band.songs', band.id);
  }
}
