const RenderCond = ({x, y}) => {
    return (
        <div>
            <hr />
            <p>O valor de x é: {x}</p>
            {x > 5 && <p>X é maior que 5</p>} 
            {x <= 5 && <p>X é menor que 5</p>}

            {x > 5 ? <p>X é um número alto</p> : <p>X é um número baixo</p>}

            <p>O valor de y é: {y}</p>
        </div>
    )
    
}

export default RenderCond