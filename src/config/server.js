import app from './../app'

const port = process.env.PORT || 3000

app.listen(3000, () => {
  console.log(`API rodando na porta ${port}`)
})