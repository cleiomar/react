import { useState, useEffect } from "react";
import { fetchApi } from "../../Services";

function Titulo({ name }) {
    const [number, setNumber] = useState('');
    
    const fetchData = async () => {            
        const data = await fetchApi()
        console.log(data)
        setNumber(data.message)
    }
    useEffect(() => {

        fetchData()
    }, [])

    if (number.length === 0) return <span>carregando...</span>


    return (
        <>
            <h2>{name} está aqui</h2>
            <img src={number} />
            <button onClick={fetchData}>Teste</button>
        </>
    )

}
export default Titulo;