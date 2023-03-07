import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function Users(req, res) {
    const users = await prisma.user.findMany()
    res.json(users)
}

Users().then(async() => {
    await prisma.$disconnect()
})
.catch(async(e) => {
    console.error(e)
    await prisma.$disconnect()
    // process.exit(1)
})