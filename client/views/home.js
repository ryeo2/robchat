/**
 * Created by ryeo on 12/4/14.
 */


Template.home.helpers({
    questionList: function () {
        console.log('Questions Count ' + Questions.find().count());
        //return Questions.find({}, {sort: {ts: -1}});
        return Questions.find({id: Session.get("cokecounter")});
    },

    answerList: function () {
        return Questions.find({id: Session.get("cokecounter")});
    }
});


Template.user.helpers({
    hellouser: function () {
        if (Session.equals("current_User_Connected", "")) {
            console.log('User IN2');
            return "";
        } else {
            console.log('User IN');
            if (Session.equals("current_Status","exit")){

            }
            else {
                return "Hello " + Session.get("current_User_Connected");
            }
        }

        if (Session.equals("current_Status","exit")){
            console.log('exit from user');
            return "";
        }
    }
});

Template.video.rendered = function () {

    if (Session.equals("current_User_Connected", "")) {

    } else {
        //var video = Popcorn.youtube('#youtube-video', 'http://www.youtube.com/embed/lSAKFkxq4jA');
        console.log('Soda: ' + Session.get("soda"));

        /*var v = document.getElementById('youtube-video');
         console.dir("V "+v);
         // Listen for ended event
         v.addEventListener( "play", function( e ) {
         console.log("play fired");
         }, false);*/


        if (Session.equals("soda", "Pepsi")) {
            var video = Popcorn.youtube('#youtube-video', Session.get("pepsi_url"));

            /*video.cue(1, function () {
                Session.set("duration",this.duration());
                console.log('TIMe: '+this.duration());
            });*/

            video.play();
        } else {
            var video = Popcorn.youtube('#youtube-video', Session.get("coke_url"));

           /* video.cue(1, function () {
                Session.set("duration",this.duration());
                console.log('time: '+this.duration());
            });*/

            video.play();
        }

        console.log('Duration: '+Session.get("duration"));

        Meteor.setTimeout(function () {
            (Session.set("current_Answer",""));
            Session.set("cokecounter", Math.floor((Math.random() * 6) + 1));
            console.log('Coke Counter: '+Session.get('cokecounter'));
        }, 40000);


    }
}