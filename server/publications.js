/**
 * Created by ryeo on 12/4/14.
 */


Meteor.publish('questions', function() {
    return Questions.find();
});