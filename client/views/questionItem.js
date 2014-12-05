/**
 * Created by ryeo on 12/4/14.
 */

Template.questionItem.rendered = function () {
    $(this.find('.score')).hide().fadeIn();
};

Template.answerItem.helpers({
    hide: function () {
        console.log('Answer: ' + this.answer);
        //Session.set("current_Answer", this.answer);
        return Session.equals("current_Answer", this.answer) ? "" : "hide-text red";
    },
    isCheckAnswer: function () {
        console.log('Answer: ' + this.answer);
        //Session.set("current_Answer", this.answer);
        Session.set("soda", this.soda);
        return Session.equals("current_Answer", this.answer) ? true : false;
    },
    defaultAnswer: function () {
        if (Session.equals("current_Answer", "")) {
            console.log('IN2');
            return "";
        } else {
            console.log('IN');
            if (Session.equals("current_Answer", this.answer)) {

            } else {
                Meteor.setTimeout(function () {
                    (Session.set("current_Answer",""));
                    Session.set("cokecounter", Math.floor((Math.random() * 6) + 1));
                    console.log('Coke Counter: '+Session.get('cokecounter'));
                }, 4000);
            }
            return Session.equals("current_Answer", this.answer) ? "" : "Sorry";
        }
    },
    drink: function () {
        return this.soda;
    }

});