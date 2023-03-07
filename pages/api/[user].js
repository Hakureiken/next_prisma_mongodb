import { PrismaClient } from "@prisma/client"
// import { useRouter } from "next/router"

const prisma = new PrismaClient()

export default async function User(req, res) {

    console.log('req.params : '+req.query.id);
    console.log('req : '+req);
    if (req.query.id != undefined) {
        
        await prisma.$connect()
        const user = await prisma.user.findFirstOrThrow({
            where: {
                id:req.query.id
            }
        })
        
        res.json(user)
    }
}

User().then(async() => {
    await prisma.$disconnect()
})
.catch(async(e) => {
    console.error(e)
    await prisma.$disconnect()
    // process.exit(1)
})