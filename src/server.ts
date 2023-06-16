import express from 'express';
import { PrismaClient } from '@prisma/client'
import cors from 'cors'

const app = express();
app.use(cors())
app.use(express.json());

const prisma = new PrismaClient();



app.get('/users', async (request, response) => {
  const users = await prisma.user.findMany()
  return response.send({ users })
});

app.post('/users', () => {
  const user = prisma.user.create({
    data: {
      name: 'Ecthon',
      messagem: 'Cotinha do pastel'
    }
  })
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} 🔥`);
});
