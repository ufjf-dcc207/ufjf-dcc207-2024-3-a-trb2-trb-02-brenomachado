import './Deque.css'

export default function Deque()
{
 
    return (
        <div className='Geral'>
            <h1>Fila Dupla</h1>
            <div className='FilaDupla'>

            </div>
            <div className='Botoes'>
                
                <input 
                    type="number" 
                    placeholder="numero"
                />
                <section>
                    <button onClick={
                        ()=>{}
                    }>Enfileira Frente</button>
                    <button onClick={
                        ()=>{}
                    }>Enfileira Atrás</button>
                    <button onClick={
                        ()=>{}
                    }>Desenfileira Atrás</button>
                    <button onClick={
                        () => {}
                    }>Desenfileira Frente</button>
                </section>
               

            </div>

        </div>
    )
}