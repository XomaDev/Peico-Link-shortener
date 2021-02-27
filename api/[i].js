module.exports = (req, res) => {
  const inputString = req.query.i;
  res.statusCode = 200
  res.json({ result: inputString.toString() })
}
