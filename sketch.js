var form, voter, survey;
var count = 0;
var question_1, question_2, question_3, question_4;
var email;
var question1, question2, question3, question4;
var database;
var form_input, submit, title, greeting;
var question_1_value, question_2_value, question_3_value, question_4_value
var voterEmailList = [];
var vote1 = [];
var vote2 = [];
var vote3 = [];
var vote4 = [];

function setup() {
  createCanvas(800,400);
 // createSprite(submit.x, submit.y, 10, 10);

  database = firebase.database();

  title = createElement('h1');
  title.html("Survey For School");
  title.position(displayWidth/2 - 120, displayHeight/2  - 350);

  greeting = createElement('h2');
  greeting.html("<p> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;  &nbsp;Hello! <br> The following is a survey about our school,<br> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; st marks school,janakpuri branch. </p>")
  greeting.position(displayWidth/2 - 200, displayHeight/2 - 250);

  question1 = createElement('h3', "Should S.P.V install A.Cs in classes for comfortable studies of children?");
  question_1 = createRadio();
  question_1.option("YES");
  question_1.option("NO");
  question_1.option("MAYBE");
  question_1_value = question_1.value();

  question_1.style('width', '200px');
  question_1.position(displayWidth/2 - 100, displayHeight/2 + 10)
  question1.position(displayWidth/2 - 280, displayHeight/2 - 50)

  question2 = createElement('h3', "Should there be class trips for providing children with worldly exposure?");
  question_2 = createRadio();
  question_2.option("YES");
  question_2.option("NO");
  question_2.option("MAYBE");
  question_2_value = question_2.value();

  question_2.style('width', '200px');
  question2.position(displayWidth/2 - 280, displayHeight/2 + 50)
  question_2.position(displayWidth/2 - 100, displayHeight/2 + 110)

  question3 = createElement('h3', "Should S.P.V rent A.C buses instead of normal buses from D.T.C to ensure <br> a comfortable travelling and also keep children safe from Delhi's harmful air?");
  question_3 = createRadio();
  question_3.option("YES");
  question_3.option("NO");
  question_3.option("MAYBE");
  question_3_value = question_3.value();

  question_3.style('width', '200px');
  question3.position(displayWidth/2 - 280, displayHeight/2 + 150)
  question_3.position(displayWidth/2 - 100, displayHeight/2 + 230)

  question4 = createElement('h3', "Would you be willing to contribute money to implement these ideas?");
  question_4 = createRadio();
  question_4.option("YES");
  question_4.option("NO");
  question_4.option("MAYBE");
   question_4_value = question_4.value();

  question_4.style('width', '200px');
  question4.position(displayWidth/2 - 280, displayHeight/2 + 270)
  question_4.position(displayWidth/2 - 100, displayHeight/2 + 330)

  email = createElement("h3");
  email.html("Your Email Id: ");
  email.position(displayWidth/2 - 70, displayHeight/2 + 400);
  email_input  = createInput();
  email_input.style('width', '250px')
  email_input.position(displayWidth/2 - 130, displayHeight/2 + 450)

  submit = createButton("Submit Response");
  submit.position(displayWidth/2 - 70, displayHeight/2 + 520);
  submit.style('margin-bottom', '20px');
}

function draw() {
  background(255,255,255);  
  drawSprites();

 // console.log(mouseX);

  submit.mousePressed(() => {

  vote1.push(question_1.value());
  vote2.push(question_2.value());
  vote3.push(question_3.value());
  vote4.push(question_4.value());

  voterEmailList.push(email_input.value());

  question_1_vote();
  question_2_vote();
  question_3_vote();
  question_4_vote();

  count = count + 1;
  updateVoterCount();

  updateInputEmail();



  console.log(vote1);
  
})
  
}



  function question_1_vote() {
    database.ref('/survey/Question1').update({
      vote: vote1
    })
  }
  function question_2_vote() {
    database.ref('/survey/Question2').update({
      vote: vote2
    })
  }
  function question_3_vote() {
    database.ref('/survey/Question3').update({
      vote: vote3
    })
  }
  function question_4_vote() {
    database.ref('/survey/Question4').update({
      vote: vote4
    })
  }

function updateInputEmail() {
  database.ref('/survey/').update({
    voterEmail: voterEmailList
  })
}

function updateVoterCount() {
  database.ref('/survey/').update({
    voterCount: count
  })
}

