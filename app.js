'use strict';

function yesOrNo() {
    var score = 0;
    var firstAnswer = prompt('Q1: Was I born in the US?');
    console.log('user guessed', firstAnswer);
    var p = document.getElementById('first-answer');

    if(firstAnswer.toLowerCase() === 'no' || firstAnswer.toLowerCase() === 'n') {
        p.textContent = 'Correct! I was NOT born in the US.'
        score++;
    }
    else {
        p.textContent = 'Sorry, that\'s incorrect. I wasn\'t born in the US.';
    }

    var secondAnswer = prompt('Q2: Do I have a middle name?');
    console.log('user guessed', secondAnswer);
    var p = document.getElementById('second-answer');

    if(secondAnswer.toLowerCase() === 'no' || secondAnswer.toLowerCase() === 'n') {
        p.textContent = 'Correct! I do NOT have a middle name.'
        score++;
    }
    else {
        p.textContent = 'Sorry, that\'s not right. I wasn\'t born in the US.';
    }

    var thirdAnswer = prompt('Q3: Do I like cats?');
    console.log('user guessed', thirdAnswer);
    var p = document.getElementById('third-answer');

    if(thirdAnswer.toLowerCase() === 'yes' || thirdAnswer.toLowerCase() === 'y') {
        p.textContent = 'Yup. I love cats.'
        score++;
    }
    else {
        p.textContent = 'Sorry, that\'s incorrect. I\'m a big fan of cats.';
    }

    var fourthAnswer = prompt('Q4: Do I like rainy weather?');
    console.log('user guessed', fourthAnswer);
    var p = document.getElementById('fourth-answer');

    if(fourthAnswer.toLowerCase() === 'yes' || fourthAnswer.toLowerCase() === 'y') {
        p.textContent = 'Correct! Why do you think I love Portland so much?'
        score++;
    }
    else {
        p.textContent = 'Sorry, that\'s incorrect. I probably wouldn\'t be living in the PNW if that were true.';
    }

    var fifthAnswer = prompt('Q5: Am I currently obsessed with the video game God of War?');
    console.log('user guessed', fifthAnswer);
    var p = document.getElementById('fifth-answer');

    if(fifthAnswer.toLowerCase() === 'yes' || fifthAnswer.toLowerCase() === 'y') {
        p.textContent = 'You bet I\'m obsessed with it.'
        score++;
    }
    else {
        p.textContent = 'Sorry, that\'s not correct - at least, not currently.';
    }
    var final = document.getElementById('final-score');
    final.textContent = 'Final score: ' + score + '/5';
}