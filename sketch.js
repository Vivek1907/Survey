var stateNumber = 0;
var database;
var form;
var canvas;
var response1;
var yes1 = 0;
var no1 = 0;
var yes2 = 0;
var no2 = 0;

function setup(){
  canvas = createCanvas(500,500);
  database = firebase.database();
  form = new Form();
  response1 = new Response1();
  response2 = new Response2();
}

function draw(){
  background(255);
  if(stateNumber === 0){
  form.displayStart();
  }
  if(stateNumber === 1){
    form.displayOne();
  }
  if(stateNumber === 2){
    textSize(15);
    text("DO YOU THINK GLOBAL WARMING IS A SERIOUS ISSUE?",50,100);
    form.displayYesNO();
  }
  if(stateNumber === 3){
    textSize(15);
    text("ARE YOU WILLING TO PAY MONEY?",50,100);
    form.displayYesNO2();
  }
  response1.getYes();
  response1.getNo();
  response2.getYes();
  response2.getNo();
}
