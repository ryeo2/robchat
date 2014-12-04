/**
 * Created by ryeo on 12/4/14.
 */



if (Questions.find().count() === 0) {


    var questionId1 = Questions.insert({
        id: 1,
        soda: 'coke',
        question: 'Who invented Coca-Cola?',
        answer: 'Doctor John Pemberton',
        options1: 'John Pemberton',
        options2: 'Henry Ford',
        options3: 'John Pemberton',
        ts: +new Date
    });


    var questionId2 = Questions.insert({
        id: 2,
        soda: 'coke',
        question: 'What year was Coke invented?',
        answer: '1886',
        options1: '1986',
        options2: '1896',
        options3: '1886',
        ts: +new Date
    });


    var questionId3 = Questions.insert({
        id: 3,
        soda: 'coke',
        question: 'Is it True Coca-Cola started as a Medicine?',
        answer: 'Yes',
        options1: 'Yes',
        options2: 'No',
        ts: +new Date
    });

    var questionId4 = Questions.insert({
        id: 1,
        soda: 'pepsi',
        question: 'What year was Pepsi created?',
        answer: '1893',
        options1: '1983',
        options2: '1900',
        options3: '1893',
        ts: +new Date
    });

    var questionId5 = Questions.insert({
        id: 1,
        soda: 'pepsi',
        question: 'What was the original name of Pepsi?',
        answer: 'Brads Drink',
        options1: 'Sizzle',
        options2: 'Brads Drink',
        options3: 'Bolt',
        ts: +new Date
    });

    var questionId6 = Questions.insert({
        id: 1,
        soda: 'pepsi',
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
