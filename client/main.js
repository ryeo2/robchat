/**
 * Created by ryeo on 12/4/14.
 */

console.log('MAIN IN');

Session.setDefault("counter", 0);

Session.setDefault("cokecounter", 1);

Session.setDefault("current_Answer","");

Session.setDefault("current_User_Connected","")

Session.setDefault("current_Status","");


Session.setDefault("pepsi_url","https://www.youtube.com/embed/bdPz7aB-7_U");

Session.setDefault("coke_url","https://www.youtube.com/embed/okTokQgOo6I");

Session.setDefault("soda","");

Session.setDefault("duration","");


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

    if (message.user){
        Session.set("current_User_Connected",message.user);
        console.log('Name: '+Session.get("current_User_Connected"));
    }

    if (message.action){
        Session.set("current_Status",message.action);
        console.log('status: '+Session.get("current_Status"));
    }

    if (message.voice){
        Session.set("current_Answer",message.voice);
        console.log('Answer: '+Session.get("current_Answer"));
    }
});


/*Meteor.setInterval(function() {

    Session.set("cokecounter", Math.floor((Math.random() * 3) + 1));
    console.log('Coke Counter: '+Session.get('cokecounter'));
}, 3500);*/


    Session.set("cokecounter", Math.floor((Math.random() * 6) + 1));
    console.log('Coke Counter: '+Session.get('cokecounter'));


//console.log('Current Coke: ', Session.get("current_coke"));