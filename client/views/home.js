/**
 * Created by ryeo on 12/4/14.
 */


Template.home.helpers({
    questionList: function() {
        console.log('Questions Count '+Questions.find().count());
        //return Questions.find({}, {sort: {ts: -1}});
        return Questions.find({id: Session.get("cokecounter")});
    }
});