async function test(req, res) {
  res.status(200).json({ message: "hello from controller file " });
}
 module.exports = {
    test
 }