const chalk=require("chalk");
const readlineSync=require("readline-sync");

let username=readlineSync.question("Hey, Welcome to the Quiz Game.\n \n  May i know Your Name 😊: "); 
console.log("\t \n Hi"+" "+chalk.whiteBright.whiteBright.bold(username)+"\n") 

let HighScore;
let doUKnowMe=[
     {
      question:"Where do i live? ",
      option:['Mumbai','Chennai','Hyderabad',],
      answer:'Hyderabad'
    },
    {
      question:"Which Color i like the most? ",
      option:['Blue','Pink','Gray'],
      answer:'Blue'
    },
    {
      question:"Which is My Favourite Sport? ",
      option:['Hockey','FootBall','cricket'],
      answer:'cricket'
    },{
     question:"Which is My Favorite Food? (it's Easy if u answer the previous questions :]) ",
      answer:'Biryani'   
    },
  {
     question:"Which is My favourite Sweet? ) ",
      option:['Jelebi','GulabJamun','Kalakhan'],
      answer:'Jelebi'   
    },
  {
     question:"which sitcom's i like Watching BigBangTheory/Friends?) ",
      answer:'BigBangTheory'   
    },
  {
     question:"what's is my favourite Cartoon i like most... among these? i like all XD ) ",
      option:['tom&Jerry','Oswald','Courage the Cowardly Dog'],
      answer:'tom&Jerry'   
    }
]
let indianSweets=[
  {
    question:"Which of these indian Sweets is equivalent of icecream ? ",
    option:['kulfi','Barfi','sheera','Ras Malai'],
    answer:'kulfi'
  },
  {
    question:"The Bengali sweet consist of paneer balls dipped in sugar syrup? ",
    option:['peda','shahi Tukda','Rabri','Rasgulla'],
    answer:'Rasgulla'
  },
  {
    question:"This sweet is prepared during the festival of Holi ? ",
    option:['puran Poli','Mishti doi','seviyan','Khaja'],
    answer:'puran Poli'
  }
]
let marvel=[
  {
    question:"How many Infinity Stones are there? ",
    answer:'six'
  },
  {
    question:"Captain America’s shield and Bucky’s arm are made of what? ",
    answer:'Vibranium'
  },
  {
    question:"On what planet was the Soul Stone in Infinity War? ",
    answer:'Vormir'
  }
]
function letsplay(){
  let letsPlay=readlineSync.question("Do You Wanna Play :Yes/No  ").toLowerCase();
  if(letsPlay=="yes"){
    play();
  }
  else{
    console.log('Bye!')
  }
}
letsplay();

function play(){
    console.log(chalk.white.bgGray.bold("\nlets first select the type of Quiz you want from below by entering the option : "))
    let score=0;
    let quizType=readlineSync.question("\n"+chalk.blueBright('a:Do U Know Me  b: IndianSweets Quizz c: Marvel Quizz')+"\n \t \n");
   if(quizType.toLowerCase()=="a"){
       console.log(chalk.greenBright("Yay Let's See How Well You Know Me \n"));
      score=doYouKnowMe();
     HighScore=doUKnowMe.length
    }
    if(quizType.toLowerCase()=="b"){
       console.log(chalk.greenBright("Yay Nice choice\n"));
      score=sweetsQuiz();
      HighScore=indianSweets.length;
    }
    if(quizType.toLowerCase()=="c"){
        console.log(chalk.greenBright("Yay! i love the choice \n"));
        score=marvelQuiz();
       HighScore=marvel.length;
    }
    if(score==HighScore){
        console.log(chalk.bgYellowBright.white('\ncongo you have acheived the highest score\n'));
        console.log('\n******************************\n');
    }
    else{
        console.log('\n your just '+""+ Number(HighScore-score) +"Points less than Highest Score\n");
        console.log('\n*******************************\n');
    }
  letsplay();
}

// do u know me
function doYouKnowMe(){
  let currentScore=0;
    doUKnowMe.forEach((question)=>{
      console.log(chalk.bgGray.white.bold(question.question)+"\n :");
      if(question.option){
        question.option.forEach((option)=>{
          console.log("    "+chalk.blue(option)+"\n")
        })
      }
      let userAnswer=readlineSync.question('give a guess 🤔 : ');
      if(userAnswer.toLowerCase()==question.answer.toLowerCase())
      {
        console.log(chalk.greenBright('\nHurray, its correct🎉   '),currentScore+=1,'points \n\n')
      }
      else{
        console.log(chalk.redBright('\n oh no, its Wrong  ☹️ '),currentScore,'points \n\n')
      }
      console.log('----------------------------------------------\n');
      
    })
    return currentScore;
}

// indian sweet quiz
function sweetsQuiz(){
  let currentScore=0;
  indianSweets.forEach((sweet)=>{
    console.log(chalk.bgGray.white.bold(sweet.question)+"\n :");
    sweet.option.forEach((option)=>{
      console.log("    "+chalk.blue(option)+"\n")
    })

    let userAnswer=readlineSync.question('give a guess 🤔 : ');
    if(userAnswer.toLowerCase()==sweet.answer.toLowerCase())
    {
      console.log(chalk.greenBright('\nHurray, its correct🎉   '),currentScore+=1,'points \n\n')
    }
    else{
      console.log(chalk.redBright('\n oh no, its Wrong  ☹️ '),currentScore,'points \n\n')
    }
    console.log('----------------------------------------------\n');
    
  })
  return currentScore;
}

// marvel quiz
function marvelQuiz(){
  let currentScore=0;
  marvel.forEach((marvel)=>{
    console.log(chalk.bgGray.white.bold(marvel.question)+"\n ");
   
    let userAnswer=readlineSync.question('give a guess 🤔 : ');
    if(userAnswer.toLowerCase()==marvel.answer.toLowerCase())
      {
        console.log('\nHurray, its correct 🎉  ',currentScore+=1,'points \n\n')
      }
    else{
      console.log('\noh no, its Wrong ☹️ ',currentScore,'points')
    }
    console.log('------------------------------------------\n');
  });
  return currentScore;
}
