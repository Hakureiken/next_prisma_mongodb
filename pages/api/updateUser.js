import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function updateUser(req, res) {
    if (req) {
        await prisma.$connect()
        await prisma.user.update({
            where : {
                id:req.body.id
            },
            data: {
                first_name: req.body.first_name,
                last_name: req.body.last_name,
                email: req.body.email,
                nickname: req.body.nickname,
                password: req.body.password,
                earning: "soooon",
                isCertified: true,
                isAdmin: false,
                isEnabled: true,
            },
        })
        res.json("Success")
    }
}

updateUser().then(async() => {
    await prisma.$disconnect()
})
.catch(async(e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})