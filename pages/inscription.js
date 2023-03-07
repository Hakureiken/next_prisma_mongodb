import Input from "../component/input";
import { PrismaClient } from '@prisma/client'
import { useEffect } from "react";
import { useRouter } from "next/router";


export default function Inscription() {
    const router = useRouter();
    console.log(router);
    const handleSubmit = e => {
        // e.preventDefault()
        console.log(e.target[0].value);
        const form = new FormData;
        form.append("first_name",e.target[0].value);
        form.append("last_name",e.target[1].value);
        form.append("nickname",e.target[2].value);
        form.append("email",e.target[3].value);
        form.append("password",e.target[4].value);

        console.log(form.get('email'));

        // useEffect(() => {

        //     const prisma = new PrismaClient()
    
        //     async function createUser() {
        //         await prisma.$connect()
        //         await prisma.user.create({
        //             data: {
        //                 first_name: e.target[0].value,
        //                 last_name: e.target[1].value,
        //                 nickname: e.target[2].value,
        //                 email: e.target[3].value,
        //                 password: e.target[4].value,
        //                 isEnabled: true,
        //                 isCertified: true,
        //                 isAdmin: true
        //             }
        //         })
        //     }
        //     createUser().then(async() => {
        //         await prisma.$disconnect()
        //     })
        //     .catch(async(e) => {
        //         console.error(e)
        //         await prisma.$disconnect()
        //         process.exit(1)
        //     })
        // })

        
    }

    return (
        <form onSubmit={handleSubmit} action="/api/newUser" method="post">
            <Input
                className="input_first_name"
                name="first_name"
                id="input_first_name"
                label="Merci de préciser votre prénom"
                type="text"
            />
            <Input
                className="input_last_name"
                name="last_name"
                id="input_last_name"
                label="Merci de préciser votre nom"
                type="text"
            />
            <Input
                className="input_nickname"
                name="nickname"
                id="input_nickname"
                label="Merci de préciser votre pseudo"
                type="text"
            />
            <Input
                className="input_mail_connexion"
                name="email"
                id="input_mail_connexion"
                label="Merci de préciser votre courriel"
                type="email"
            />
            <Input
                className="input_password"
                name="password"
                id="input_password"
                label="Merci de préciser votre mot de passe"
                type="password"
            />
            <Input
                className="input_submit"
                name="input-submit"
                id="input-submit"
                label="S'inscrire"
                type="submit"
            />
        </form>
    )
}