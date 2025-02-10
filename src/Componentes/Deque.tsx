import { useState } from 'react'
import './Deque.css'

export default function Deque()
{
    const [itens, setItens] = useState<number[]>([]);
    const [valor, setValor] = useState(0);

    function enfileiraFrente()
    {
        const clone = Array.from(itens);
        clone.unshift(valor);
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
        clone.push(valor);
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
            <h1 className='Titulo'>Fila Dupla</h1>
            <div className='FilaDupla'>
                { itens.map((item , index) => (
                    <div key={index} className='Elemento'>{item}</div>
                ))}
            </div>
            <div className='Botoes'>
                
                <input  
                    className='Numero'
                    type="number" 
                    value={valor}
                    onChange={(e) => {
                        const valor = parseInt(e.target.value)
                        setValor(valor)
                    }}
                    placeholder="numero"
                />
                <section className='Modificacoes'>
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