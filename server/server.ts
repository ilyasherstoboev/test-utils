import express from 'express'
import cors from 'cors'
import { PORT } from '../app/options/requests'
import { POSTS } from '../app/constants/JSON'

const app = express()

app.use(cors())
app.use(express.json())

app.get('/api/posts', (req, res) => {
  res.json(POSTS)
})

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`)
})
