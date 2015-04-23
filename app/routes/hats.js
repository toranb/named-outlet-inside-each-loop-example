import Ember from "ember";
import Hat from "wahtb/models/hat";

export default Ember.Route.extend({
    model: function() {
        var one = Hat.create({name: "one", things: Ember.A([1])});
        var two = Hat.create({name: "two", things: Ember.A([6, 8])});
        var three = Hat.create({name: "three", things: Ember.A([8])});
        var all = Ember.A([one, two, three]);

        var filter = function(item) {
            return item.get("things").indexOf(8) > -1;
        }
        return Ember.ArrayProxy.extend({
          content: function () {
            console.log("WAT");
            var filter_func = this.get("filter_func");
            return this.get("source").filter(filter_func);
          }.property("source.@each.allThings")
        }).create({
          filter_func: filter,
          source: all
        });
        //attributes.push("source.@each." + computed_key);
    }
});
