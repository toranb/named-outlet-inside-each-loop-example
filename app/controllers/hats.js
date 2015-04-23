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
        wat: function(x) {
            //var model = this.get("model");
            console.log(x.get("things").toArray());
            x.get("things").removeObject(8);
            console.log(x.get("things").toArray());
        }
    }
});
