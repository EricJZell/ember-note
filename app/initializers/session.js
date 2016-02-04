import Ember from 'ember'

export function initialize(container, application) {
  var session = Ember.Object.extend();
  application.register('session:main', session);
  application.inject('adapter', 'session', 'session:main');
  application.inject('route', 'session', 'session:main');
  // application.inject('route', 'foo', 'service:foo');
}

export default {
  name: 'session',
  initialize: initialize
};
