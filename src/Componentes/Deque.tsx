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
            clone.shift();
            setItens(clone);
        }
    }

    function enfileiraAtras()
    {
        const clone = Array.from(itens);
        clone.push(2);
        setItens(clone);
    }

    function desenfileiraAtras()
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
                        ()=>{enfileiraAtras()}
                    }>Enfileira Atrás</button>
                    <button onClick={
                        ()=>{desenfileiraAtras()}
                    }>Desenfileira Atrás</button>
                    <button onClick={
                        () => {desenfileiraFrente()}
                    }>Desenfileira Frente</button>
                </section>
               

            </div>

        </div>
    )
}