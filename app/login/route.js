import Ember from 'ember';

export default Ember.Route.extend({
  noUserFound: false,
  actions: {
    login: function() {
      this.store.query('user', {
        name: this.controller.get('name')
      }).then((users) => {
        if(users.get('length') ===1) {
          var user = users.objectAt(0);
          this.controllerFor('application').set('user', user);
          this.transitionTo('notebooks', user.get('id'));
        }
        else {
          this.controller.set('noUserFound', true);
          this.controller.set('nonUser', this.controller.get('name'));
          this.controller.set('name', null);
        }
      });
    }
  }
});
