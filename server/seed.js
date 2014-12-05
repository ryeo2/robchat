/**
 * Created by ryeo on 12/4/14.
 */



if (Questions.find().count() === 0) {


    var questionId1 = Questions.insert({
        id: 1,
        soda: 'Coke',
        question: 'Who invented Coca-Cola?',
        answer: 'Dr John Pemberton',
        options1: 'Doctor John Pemberton',
        options2: 'Henry Ford',
        options3: 'John Peabody',
        ts: +new Date
    });


    var questionId2 = Questions.insert({
        id: 2,
        soda: 'Coke',
        question: 'What year was Coke invented?',
        answer: '1886',
        options1: '1986',
        options2: '1896',
        options3: '1886',
        ts: +new Date
    });


    var questionId3 = Questions.insert({
        id: 3,
        soda: 'Coke',
        question: 'Is it true Coca-Cola started as medicine?',
        answer: 'yes',
        options1: 'Yes',
        options2: 'No',
        ts: +new Date
    });

    var questionId4 = Questions.insert({
        id: 4,
        soda: 'Pepsi',
        question: 'What year was Pepsi created?',
        answer: '1893',
        options1: '1983',
        options2: '1900',
        options3: '1893',
        ts: +new Date
    });

    var questionId5 = Questions.insert({
        id: 5,
        soda: 'Pepsi',
        question: 'What was the original name of Pepsi?',
        answer: 'Brad\'s drink',
        options1: 'Sizzle',
        options2: 'Brad\'s Drink',
        options3: 'Bolt',
        ts: +new Date
    });

    var questionId6 = Questions.insert({
        id: 6,
        soda: 'Pepsi',
        question: 'Who invented Pepsi?',
        answer: 'Caleb Bradham',
        options1: 'Hulk Hogan',
        options2: 'Caleb Bradham',
        options3: 'Wayne Rooney',
        ts: +new Date
    });
}



if (Users.find().count() === 0) {
    Users.insert({user: 'admin'});
    Users.insert({user: 'robert'});
}


console.log('Questions Count: ' + Questions.find().count());
console.log('Users Count: ' + Users.find().count());

//console.log('Find ',Questions.find().count());
