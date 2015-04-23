import Ember from "ember";

export default Ember.Object.extend({
    name: "",
    things: Ember.A([]),
    allThings: function() {
        var things = this.get("things"),
        each = Ember.$.each,
        thingz = [];
        each(things, function(i, thing) {
            thingz.addObject(thing);
        });
        return thingz;
    }.property()
});

//the arrayProxy should use the watCount below - the controller should use addWatz
//
// var Section = Model.extend({
//    watz: [],
//    addWatz: function(childId) {
//     this.get("watz").pushObject(childId);
//     },
//watch this watCount on the parent model ?
    // watCount: Ember.computed(function() {
    //     var watCount = this.get("watz").length;
    //     if(watCount === 1) {
    //         return watCount + " huh?";
    //     }
    //     return watCount + " huz?";
    // }).property("watz.[]"),
