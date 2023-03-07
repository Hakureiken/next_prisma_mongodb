import { useState, useEffect } from "react";

export default function Intervenants() {
    const [dataApi, setDataApi] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch("/api/users");
            const json = await data.json();
            
            setDataApi(json);
            return json;
        }
        fetchData().catch(console.error);
    }, [])
    console.log(dataApi)

    return (
      <ul> 
        
          <li>lol</li>
        
      </ul>
     )
  }