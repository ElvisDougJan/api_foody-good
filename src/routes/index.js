export default (app) => {
  app.get('/', (req, res) => {
    res.json('API para o sistema FoodyGood')
  })
}