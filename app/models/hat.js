import Ember from "ember";

export default Ember.Object.extend({
    name: "",
    things: Ember.A([]),
    thingCount: Ember.computed(function() {
        return this.get("things").length;
    }).property("things.[]"),
    removeThing: function(number) {
        this.get("things").removeObject(number);
    }
});
