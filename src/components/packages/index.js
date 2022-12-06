import React, { useEffect, useState } from 'react';
import './package.css'


const Pacotes = () => {

    const [count, setCount] = useState([]);
    const [pacoteAtual, setpacoteAtual] = useState();

    useEffect(() => {
        const apiRequest = async () => {
            try {
                const response = await fetch("http://localhost:3000/pacote");
                const lista = await response.json()
                setCount(lista);
            } catch (error) {
                console.log(error)
            }
        }
        apiRequest()
    }, []);

    return (
        <div className="pacotes">
            {count.map((item, index) => (
                <button key={index} onClick={() => { setpacoteAtual(item.content) }}>{item.name}</button>
            ))}
            <div className='list'>
                {pacoteAtual && pacoteAtual.map((item, index) => (
                    <div className='list-name' key={index}>{item.nameContent}</div>
                ))}
            </div>

        </div>
    );
}

export default Pacotes;