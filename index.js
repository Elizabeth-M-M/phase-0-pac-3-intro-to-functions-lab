// shout(string)
function shout(string) {
  return string.toUpperCase();
}

// whisper(string)
function whisper(string) {
    return string.toLowerCase();
}

// logShout(string)
function logShout(string) {
  console.log(string.toUpperCase());
}
logShout('hello');

// logWhisper(string)
function logWhisper(string) {
  console.log(string.toLowerCase());
}
logWhisper('HELLO');

// sayHiToHeadphonedRoommate(string)
function sayHiToHeadphonedRoommate(string) {
    if (string === string.toUpperCase()) {
        return "YES INDEED!";
    }
    if (string === string.toLowerCase()) {
        return "I can't hear you!";
    }
     if (string === "Let's have dinner together!") {
         return "I would love to!";
    }
}
console.log(sayHiToHeadphonedRoommate("hello"));
console.log(sayHiToHeadphonedRoommate("HELLO"));
console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"));
