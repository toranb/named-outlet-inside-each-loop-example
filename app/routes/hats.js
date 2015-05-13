import Ember from "ember";
import Hat from "wahtb/models/hat";

export default Ember.Route.extend({
    model: function() {
        var one = Hat.create({id: 1, name: "one"});
        var two = Hat.create({id: 2, name: "two"});
        var three = Hat.create({id: 3, name: "three"});
        return [one, two, three];
    }
});
