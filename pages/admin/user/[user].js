import Input from "../../../component/input";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function User(props) {
    const [dataApi, setDataApi] = useState();
    const router = useRouter();
    const {user} = router.query;

    useEffect(() => {
        if (user) {

            const fetchData = async () => {
                const data = await fetch('/api/user?id='+user);
                const json = await data.json();
                
                setDataApi(json);
                return json;
                
            }
            fetchData().catch(console.error);
        }
    }, [user])

    console.log('dataApi ligne 24 : ' +dataApi);

    return (
        <div>
            {
                dataApi ? 
                <form action="/api/updateUser" method="post">
                    <Input 
                        className="input_id"
                        name="id"
                        id="input_id"
                        type="hidden"
                        defaultValue={dataApi.id}
                    />
                    <Input
                        className="input_first_name"
                        name="first_name"
                        id="input_first_name"
                        label="Merci de préciser votre prénom"
                        type="text"
                        defaultValue={dataApi.first_name}
                    />
                    <Input
                        className="input_last_name"
                        name="last_name"
                        id="input_last_name"
                        label="Merci de préciser votre nom"
                        type="text"
                        defaultValue={dataApi.last_name}
                    />
                    <Input
                        className="input_nickname"
                        name="nickname"
                        id="input_nickname"
                        label="Merci de préciser votre pseudo"
                        type="text"
                        defaultValue={dataApi.nickname}
                    />
                    <Input
                        className="input_mail_connexion"
                        name="email"
                        id="input_mail_connexion"
                        label="Merci de préciser votre courriel"
                        type="email"
                        defaultValue={dataApi.email}
                    />
                    <Input
                        className="input_password"
                        name="password"
                        id="input_password"
                        label="Merci de préciser votre mot de passe"
                        type="password"
                        defaultValue={dataApi.password}
                    />
                    <Input
                        className="input_submit"
                        name="input-submit"
                        id="input-submit"
                        label="S'inscrire"
                        type="submit"
                    />
                </form>
                : 
                ''
            } 
        </div>
    )
}