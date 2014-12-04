/**
 * Created by ryeo on 12/4/14.
 */

Meteor.autorun(function(){
    Meteor.subscribe('questions',Session.get("cokecounter"));
});
