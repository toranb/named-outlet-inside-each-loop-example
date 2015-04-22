import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
    this.route("hats", {path: "/"}, function() {
        this.route("detail", {path: "/detail/:index"});
    });
});

export default Router;
