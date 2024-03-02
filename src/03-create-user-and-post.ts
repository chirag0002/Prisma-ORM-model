import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.create({
    data: {
     email: "tony@gmail.com",
     name: "Tony Stark",
     posts: {
        create: [
            {
                title: "Post 1",
                content: "This is post 1",
            },
            {
                title: "Post 2",
                content: "This is post 2"
            },
        ]
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