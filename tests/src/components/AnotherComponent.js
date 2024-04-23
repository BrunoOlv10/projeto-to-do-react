const AnotherComponent = () => {

    const handleClick = () => {
        console.log('clicou no botão')
    }

    return (
        <div>
            <hr />
            <p>Segundo componente</p>
            <button onClick={handleClick}>Evento de click</button>
            <hr />
            <button onClick={() => console.log('teste')}>Evento no Elemento</button>
        </div>
    )
}

export default AnotherComponent;