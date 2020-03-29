import express from 'express'
const app = express()

const port = process.env.PORT || 3000

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// app.get('/', (req: express.Request, res: express.Response) => {
//   try {
//     // ctable('HelloTable')
//     res.end('Hello World')
//   } catch (error) {
//     console.error(`Error: ${error}`, error)
//     res.status(500).send({ error: `${error}` })
//   }
// })

// listen
app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

export default app
