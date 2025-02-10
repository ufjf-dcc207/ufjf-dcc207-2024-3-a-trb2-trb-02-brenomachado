import { useState } from 'react'
import './Deque.css'

export default function Deque()
{
    const [itens, setItens] = useState<number[]>([]);

    function enfileiraFrente()
    {
        const clone = Array.from(itens);
        clone.unshift(1);
        setItens(clone);
    }
    function desenfileiraFrente()
    {
        const clone = Array.from(itens);
        if(clone.length > 0)
        {
            clone.pop();
            setItens(clone);
        }
    }

    return (
        <div className='Geral'>
            <h1>Fila Dupla</h1>
            <div className='FilaDupla'>
                { itens.map((item) => (
                    <div className='Elemento'>{item}</div>
                ))}
            </div>
            <div className='Botoes'>
                
                <input 
                    type="number" 
                    placeholder="numero"
                />
                <section>
                    <button onClick={
                        ()=>{enfileiraFrente()}
                    }>Enfileira Frente</button>
                    <button onClick={
                        ()=>{}
                    }>Enfileira Atrás</button>
                    <button onClick={
                        ()=>{}
                    }>Desenfileira Atrás</button>
                    <button onClick={
                        () => {desenfileiraFrente()}
                    }>Desenfileira Frente</button>
                </section>
               

            </div>

        </div>
    )
}