/**
 * Created by ryeo on 12/4/14.
 */

console.log('MAIN IN');

Session.setDefault("counter", 0);

Session.setDefault("cokecounter", 1);

Template.hello.helpers({
    counter: function () {
        return Session.get("counter");
    }
});

Template.hello.events({
    'click button': function () {
        // increment the counter when button is clicked
        Session.set("counter", Session.get("counter") + 1);
    }
});


sendChat = function (message) {
    chatStream.emit('message', message);
    console.log('me: ' + message);
};

chatStream.on('message', function (message) {
    console.log('user: ' + message);
    console.dir(message);
});


Meteor.setInterval(function() {

    Session.set("cokecounter", Math.floor((Math.random() * 3) + 1));
    console.log('Coke Counter: '+Session.get('cokecounter'));
}, 3500);


//console.log('Current Coke: ', Session.get("current_coke"));