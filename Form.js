class Form{
    constructor() {

    }

    display(){
       var title = createElement('h1');
       title.html("Take A Survey");
       title.position(430,100);

       var input = createInput("Name");
       var button = createButton('Start Survey');
       var greeting = createElement('h2');

       input.position(430,160);
       button.position(450,200);

       var head = createElement('h3');
       var question1 = createElement('h3');
       var question2 = createElement('h3');
       var question3 = createElement('h3');
       var question4 = createElement('h3');
       var question5 = createElement('h3');

        var next1 = createButton('Next');
        var next2 = createButton('Next');
        var next3 = createButton('Next');
        var next4 = createButton('Next');
        var next5 = createButton('Next');

        var answer1 = createInput('answer');
        var answer2 = createInput('answer');
        var answer3 = createInput('answer');
        var answer4 = createInput('answer');
        var answer5 = createInput('answer');

       button.mousePressed(function(){
           input.hide();
           button.hide();
           var name = input.value();
           playerCount = playerCount+1;
           player.update(name);
           player.updateCount(playerCount);
           greeting.html("Hello "+name);
           greeting.position(430,160);
           head.html("Answer Of The Following Questions");
           head.position(410,200);
           question1.html("Q1: What are your opinions about the LockDown and Corona Virus? ");
           question1.position(375,240);
           answer1.position(430,290);
           next1.position(450,400);

        });
        next1.mousePressed(function(){
            head.hide();
            greeting.hide();
            question1.hide();
            answer1.hide();
            next1.hide();
            var Ans1 = answer1.value();
            player.updateA1(Ans1);
            question2.html("Q2: Has it proved to be Beneficial in your life except saving you from COVIT-19?");
            question2.position(375,240);
            answer2.position(430,290);
            next2.position(450,400);
        });
        next2.mousePressed(function(){
            question2.hide();
            answer2.hide();
            next2.hide();
            var Ans2 = answer2.value();
            player.updateA2(Ans2);
            question3.html("Q3: Are you being using this time Efficiantly and productively? How? ");
            question3.position(375,240);
            answer3.position(430,290);
            next3.position(450,400);
        });
        next3.mousePressed(function(){
            question3.hide();
            answer3.hide();
            next3.hide();
            var Ans3 = answer3.value();
            player.updateA3(Ans3);
            question4.html("Q4: How will it affect other thing (like enviroment,trade etc.)? In a Good way or Bad ? ");
            question4.position(375,240);
            answer4.position(430,290);
            next4.position(450,400);
        });
        next4.mousePressed(function(){
            question4.hide();
            answer4.hide();
            next4.hide();
            var Ans4 = answer4.value();
            player.updateA4(Ans4);
            question5.html("Q5: Are your thoughts about this changed and How? ");
            question5.position(375,240);
            answer5.position(430,290);
            next5.position(450,400);
        });
        next5.mousePressed(function(){
            question5.hide();
            answer5.hide();
            next5.hide();
            var Ans5 = answer5.value();
            player.updateA5(Ans5);
            var thanks = createElement('h1')
            thanks.html("ThankYou for the Survey!!!");
            thanks.position(430,200)
        });
    }

}