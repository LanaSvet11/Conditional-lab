// script.js
let numberOfStudent = 17;

if (numberOfStudent > 20) {
  console.log("classroom too small");
} else {
  console.log("classroom size accepted");
}

// #2
let numberOfHouses = 2;

if (numberOfHouses > 2) {
  console.log("you need to sell more houses");
} else if (numberOfHouses <= 2) {
  console.log("seems reasonable");
}

// #3

let bill = 15;

if (bill > 15) {
  console.log("we should split the bill");
} else {
  console.log("I'll get the bill this time");
}

// #4

let scoreOfStudent = 96;

// all we know is that a score is a number in specific ranges that is less than or equal to 55 until over 90.

if (scoreOfStudent <= 55) {
  console.log("Not to good");
} else if (scoreOfStudent <= 60) {
  console.log("ehhhh");
} else if (scoreOfStudent <= 70) {
  console.log("Keep trying");
} else if (scoreOfStudent <= 80) {
  console.log("nice!");
} else if (scoreOfStudent <= 90) {
  console.log("Doing good!");
} else {
  console.log("over 90! great!");
}

// #5

// Change the name to see different outputs
const personName = "Chase";

if (personName === "Chase") {
  console.log("Hello, Chase! Welcome back!");
} else if (personName === "Alex") {
  console.log("Hello, Alex! Nice to see you.");
} else {
  console.log("Hello, stranger! What's your name?");
}

// Change the age to see different outputs
const personAge = 65;

if (personAge < 18) {
  console.log("You are a minor");
} else if (personAge >= 18 && personAge < 65) {
  console.log("You are an adult");
} else {
  console.log("You are a senior");
}

// Change the subscriptionStatus to see different outputs

const subscriptionStatus = "standard";

if (subscriptionStatus === "free") {
  console.log("You have a free subscription. Upgrade to unlock more features.");
} else if (subscriptionStatus === "standard") {
  console.log("You have a standard subscription. Enjoy our basic features.");
} else if (subscriptionStatus === "premium") {
  console.log(
    "You have a premium subscription. Enjoy all the premium features!"
  );
} else {
  console.log("Invalid subscription status. Please check your subscription.");
}
