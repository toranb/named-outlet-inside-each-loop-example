import Ember from "ember";
import Hat from "wahtb/models/hat";

export default Ember.Controller.extend({
    actions: {
        add: function(hat) {
            this.get("model").pushObject(Hat.create({name: "watt"}));
        },
        remove: function(thing) {
            this.get("model").removeObject(thing);
        },
        wat: function(model) {
            model.removeThing(8);
            //model.get("things").removeObject(number);
        }
    }
});
