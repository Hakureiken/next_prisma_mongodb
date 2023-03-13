import Input from "../component/input"
import IsAuth from "../component/isAuth";

export default function LoginNextAuth(params) {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
        let email = e.target[0].value
        let data = {
            email
        }
        console.log(data);
        fetch('/api/hello', {
            method:'POST',
            headers: {
                'Accept': 'application/json, text/plain, */*',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        })
            .then((response) => response.json())
            .then((data) => console.log(data))
    }
    
    return (
        <>
            <IsAuth />
            <form onSubmit={handleSubmit} action="/" method="post">
                <Input
                    className="input_login_email"
                    name="login_email"
                    id="input_login_email"
                    label="Merci de préciser votre email"
                    type="email"
                />
                <Input
                    className="input_login_submit"
                    name="input_login_submit"
                    id="input_login_submit"
                    label="S'inscrire"
                    type="submit"
                />
            </form>
        </>
    )
}