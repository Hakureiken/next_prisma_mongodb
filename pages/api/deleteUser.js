import { PrismaClient } from "@prisma/client"
import { redirect } from "next/dist/server/api-utils";
import { Router, useRouter } from "next/router";

const prisma = new PrismaClient()

export default async function deleteUser(req, res) {
    if (req) {
        console.log(req.body.input_hidden_delete);
        await prisma.$connect()
        await prisma.user.delete({
            where: {
                id: req.body.input_hidden_delete
            }
        })
        res.json(req.body)
    }
}

deleteUser().then(async() => {
    await prisma.$disconnect()
})
.catch(async(e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})