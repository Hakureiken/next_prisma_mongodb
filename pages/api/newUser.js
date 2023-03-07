import { PrismaClient } from "@prisma/client"
import { redirect } from "next/dist/server/api-utils";
import { Router, useRouter } from "next/router";

const prisma = new PrismaClient()

export default async function newUser(req, res) {
    if (req) {
        await prisma.$connect()
        await prisma.user.create({
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
        res.json(req.body)
    }
}

newUser().then(async() => {
    await prisma.$disconnect()
})
.catch(async(e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})