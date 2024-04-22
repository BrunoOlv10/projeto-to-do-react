import AnotherComponent from "./AnotherComponent";

function FirstComponent() {
    // Algum comentário
    const name = 'Bruno'

    return (
        <div className='teste'>
            {/* Comentário no JSX */}
            <p>Primeiro Componente</p>
            <p>{2 + 2}</p>
            <p>Nome: {name}</p>
            <label htmlFor="password">Senha: </label>
            <input type="password" name="password"/>
            <AnotherComponent />
        </div>
    )
}

export default FirstComponent;