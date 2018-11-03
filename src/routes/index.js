const router = require('express').Router()

router.get('/', (req, res) => {
  res.json('API para o sistema FoodyGood')
})

module.exports = router