import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export default async function main() {
    await prisma.$connect()
    await prisma.user.create({
        data: {
            first_name: 'Kévin',
            last_name: 'Gasté',
            email: 'kg@prisma.com',
            nickname: "Hakureiken",
            password: "password",
            earning: "none",
            isCertified: true,
            isAdmin: true,
            isEnabled: true,
        },
    })
    const allUsers = await prisma.user.findMany({})
    // console.dir(allUsers, {depth: null})

    // const allUsers = await prisma.user.findMany()
    console.log(allUsers);
}

main().then(async() => {
    await prisma.$disconnect()
})
.catch(async(e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
})



// export default function Prisma(props) {
//     return (
//         <h1>Coucou ici Prisma</h1>
//     )
// }