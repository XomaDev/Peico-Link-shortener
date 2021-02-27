module.exports = (req, res) => {
  const inputString = req.query.i;
  res.statusCode = 200

  var url = "https://script.google.com/macros/s/AKfycbyxUhUuSDlhW3j7SBfknwb6L7t_6Z-GhpACJ5yCoG2_nVZ8oXE/exec?tag=" + inputString;
  var index = httpGet(url) + "";


  res.json(index)
}
