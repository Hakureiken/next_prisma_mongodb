import Input from "../component/input";

export default function Inscription() {

    return (
        <form action="/api/newUser" method="post">
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