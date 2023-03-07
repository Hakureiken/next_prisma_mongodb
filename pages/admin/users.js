import Link from "next/link";
import { useEffect, useState } from "react"
import Input from '../../component/input'
import styles from '../../styles/test.module.css'
export default function Users() {
    const [dataApi, setDataApi] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('/api/users');
            const json = await data.json();
            
            setDataApi(json);
            return json;
        }
        fetchData().catch(console.error);
    }, [])
    console.log(dataApi);

    return (
        <table>
            <thead>
                <tr>
                    <th>Nom</th>
                    <th>Prénom</th>
                    <th>Email</th>
                    <th>Pseudo</th>
                    <th>est admin</th>
                    <th>est certifié</th>
                    <th>est actif</th>
                    <th>modifier</th>
                    <th>supprimer</th>
                </tr>
            </thead>
            <tbody>
                {dataApi && dataApi.map((item, index) => {
                    return (
                        <tr>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.email}</td>
                            <td>{item.nickname}</td>
                            <td>{item.isAdmin ? 'vrai':'faux'}</td>
                            <td>{item.isCertified ? 'vrai':'faux'}</td>
                            <td>{item.enabled ? 'vrai':'faux'}</td>
                            <td>
                                <Link href={'/admin/user/'+item.id} className={styles.testUpdate}>
                                    MODIFIER
                                </Link>
                            </td>
                            <td>
                                <form action="/api/deleteUser" method="POST">
                                    <Input 
                                        key={index + 'I'}
                                        className="hidden_input_delete"
                                        type="text"
                                        name="input_hidden_delete"
                                        defaultValue={item.id}
                                    />
                                    <Input 
                                        key={index + 'D'}
                                        className={styles.testDelete}
                                        type="submit"
                                        name="submit_delete"
                                        value="DELETE"
                                    />
                                    {/* <div className={styles.testDelete}>DELETE</div> */}
                                </form>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
            
        </table>
    )
}