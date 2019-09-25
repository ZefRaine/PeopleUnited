const friends = require("../app/data/friends");
module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.send(friends);
  });

  app.post("/api/friends", function (req, res) {
    const match = {
      name: "",
      photo: "",
      differential: 50
    }
    const friendData = req.body
    const numbers = friendData.scores
    let friendDiff = 0;
    var i;
    for (i = 0; i < friends.length; i++) {
      friendDiff = 0;
      var currentFriend = friends[i];
      for (var j = 0; j < currentFriend.scores.length; j++) {
         var bigDiff = numbers[j];
         friendDiff += Math.abs(parseInt(bigDiff) - parseInt(currentFriend.scores[j]))
       }
    if (friendDiff <= match.differential){
      match.name = currentFriend.name
      match.photo = currentFriend.photo
      match.differential = friendDiff
      }
   }
   friends.push(friendData);
   res.json(match);
  });
};