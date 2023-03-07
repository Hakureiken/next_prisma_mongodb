import Input from "../component/input";

export default function Inscription() {
    

    return (
        <form action="/api/uploadFile" method="post">
            <Input
                className="input_file"
                name="file"
                id="input_file"
                label="Merci de préciser d'insérer un fichier"
                type="file"
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