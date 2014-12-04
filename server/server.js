/**
 * Created by ryeo on 12/4/14.
 */


Meteor.startup(function () {
    // code to run on server at startup
    console.log('SERVER STARTED');

    var pubnub = Meteor.npmRequire("pubnub").init({
        publish_key: "demo",
        subscribe_key: "demo"
    });

    pubnub.here_now({
        channel: 'rob111',
        callback: function (m) {
            console.log('Here Now: ', m)
            console.log('UUID: ', pubnub.uuid());
            chatStream.emit('message', 'server here');
        }
    });


    pubnub.subscribe({
        channel: 'rob111',
        windowing: 1000,
        connect: function () {
            console.log("Connect");
        },
        callback: function (message) {
            console.log(" > ", message);
            chatStream.emit('message', message);
        }
    });

   /* Meteor.setInterval(function() {
        var score = Questions.findOne({}, {sort: {ts: 1}});

        var result = Questions.update({_id: score._id}, {$set: {ts: +new Date}});

        console.log('Question ID: '+score._id);
        console.log('Result: '+result);
        //console.log('Questions Updated');
    }, 3500);
*/

});
