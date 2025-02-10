import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/posts', (req, res) => {
  res.json([
    { id: 1, title: 'title1' },
    { id: 2, title: 'title2' },
  ])
})

app.listen(3000, () => {
  console.log(`Сервер запущен на http://localhost:3000`)
})
