import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

var custom = function(params, hash, options, env) {
  var view = env.data.view;
  var property = "main";
  if (params.length > 0) {
      property = params[0];
  }
  var viewClass = view.container.lookupFactory('view:-outlet');
  hash._outletName = property;
  options.helperName = options.helperName || 'outlet';
  return env.helpers.view.helperFunction.call(this, [viewClass], hash, options, env);
};

Ember.HTMLBars._registerHelper('custom-outlet', custom);

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
