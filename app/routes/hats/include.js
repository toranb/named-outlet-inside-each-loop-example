import Ember from "ember";

export default Ember.Route.extend({
    renderTemplate: function(model, options){
      this.render('hats/include',{
        'into':'hats',
        'outlet': options.id,
        'model': options.name
      });
    },
    actions: {
        willTransition: function() {
            this.disconnectOutlet(this.context.id);
        }
    }
});
