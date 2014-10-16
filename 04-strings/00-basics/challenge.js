module.exports.formLetter = function(firstName, senderName, message) {
    return ("Hello " + firstName +"," +"\n" +"\n" +message +"\n" +"\n" +"Sincerely," +"\n" + senderName);
};


//it("should return a properly formated letter", function() {
//    result = "Hello Rob,\n\nTake care.\n\nSincerely,\nJoe";
//    expect(challenge.formLetter("Rob", "Joe", "Take care.")).to.eql(result);
//});

module.exports.sliceItAndCombineIt = function(bigString, startA, endA, startB, endB) {
    var a = bigString.slice(startA, endA);
    var b = bigString.slice(startB, endB);
    return a + b;
};

module.exports.findFirstMatch = function(text, searchString) {
    return text.indexOf(searchString);
};

module.exports.findLastMatch = function(text, searchString) {
    return text.lastIndexOf(searchString);
};

module.exports.substringBetweenMatches = function(text, searchString) {
    var start = text.indexOf(searchString) + searchString.length;
    var end = text.lastIndexOf(searchString);
    return text.substring(start, end);
};