
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.post.create({
    data: {
      title: "my first post",
      content: "lets explore our first post",
      author: {
        connect: {
            id: 1
        }
     }
    }
  })
}

main()
  .then(async () => {
    console.log("done");
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })