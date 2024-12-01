function CardHeader({name, id}) {
    return (
        <>
            <div className="header">
                <div className="pokemon-name">{name}</div>
                <div className="pokemon-id">#{id}</div>
            </div>
        </>
    )
}

export default CardHeader
