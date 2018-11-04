module.exports = (app) => {
  app.get('/', (req, res) => {
    res.json('API para o sistema FoodyGood')
  })
}