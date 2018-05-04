$(document).ready(function() {

// Questions and answers array object.
var  allQuestions = [
  {
    question: "Who is the strongest?",
    choices: ["Superman","The Terminator","Waluigi, obviously","John Cina"],
    correctAnswer: "John Cina"
  },
  {
    question: "What is the best site ever created?",
    choices: ["SitePoint","Simple Steps Code","Trick question; they're both the best","My site"],
    correctAnswer: "SitePoint"
  },
  {
    question: "How many states does USA has?",
    choices: ["32","50","20","65"],
    correctAnswer: "50"
  }
];



// variables we need 
var currentQuestion = 0;
var correctAnswers = 0;
var incorrectAnswers = 0;
var unanswered = 0;


// time is 1 minute
var timer = 60;
var time;

function myTimer() {
  timer--;
  $("#timer").html("Time Remaining: " + timer);

  if (timer === 0) {
    clearInterval(time);
    alert("Time Up!");
  }

}

function setupOptions() {
  $('#question').html(parseInt(currentQuestion) + 1 + ". " + allQuestions[currentQuestion].question);
  var options = allQuestions[currentQuestion].choices;
  var formHtml = '';
for (var i = 0; i < options.length; i++) {
  formHtml += '<div><input type="radio" name="option" value="' + i + '" id="option' + i + '"><label for="option' + i + '">' +
  allQuestions[currentQuestion].choices[i] + '</label></div><br/>';

} 
  $('#form').html(formHtml);
  $("#option0").prop('checked', true);
};  
// When the button is clicked we want our timer and quiz to start.
  $("#startButton").on("click", function(event) {
    event.preventDefault();
    time = setInterval(myTimer, 1000); 

  function checkAns() {
    if ($("input[name=option]:checked").val() == allQuestions[currentQuestion].correctAnswer) {
      correctAnswers++;
    }
    else {
      incorrectAnswers++;
    }
  };
  
    setupOptions();
  
    $("#next").click(function() {
      event.preventDefault();
      checkAns();
      currentQuestion++;
      $(function() {
        $("#progressbar").progressbar({
          value: currentQuestion
        });
      });
      if (currentQuestion < allQuestions.length) {
        setupOptions();
        if (currentQuestion == allQuestions.length - 1) {          
  
        };
        $('#submit').click(function() {
          $("#submit").html("Correct Answers: " + correctAnswers + "<br>" + "Incorrect Answers: " + incorrectAnswers);
            $("#result").html("You correctly answered " + correctAnswers + " out of " + currentquestion + " questions! ").hide();
            $("#submit").fadeIn(1500);
        });
      };
    });
  });
});

















