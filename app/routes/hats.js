import Ember from "ember";
import Hat from "wahtb/models/hat";

export default Ember.Route.extend({
    model: function() {
        var one = Hat.create({name: "one"});
        var two = Hat.create({name: "two"});
        var three = Hat.create({name: "three"});
        return [one, two, three];
    }
});
