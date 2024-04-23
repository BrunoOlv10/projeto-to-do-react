const List = () => {
    const items = [
    {
        id: 7,
        name: 'Bruno',
    }, 
    {
        id: 10,
        name: 'Matheus',
    }, 
    {
        id: 9,
        name: 'Guanabara',
    },
]

    return <div>
        <hr />
        {items.map((item) => (
            <p key={item.id}>
                {item.id} - {item.name}
            </p>
        ))}
    </div>
    
}

export default List