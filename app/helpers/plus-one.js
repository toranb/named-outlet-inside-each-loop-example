import Ember from "ember";

export default Ember.Helper.helper(function(params) {
    return parseInt(params[0], 10) + 1;
});
