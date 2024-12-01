function Sdef({value}) {
    return (
        <>
            <div className="stat">
                <span className="stat-info">SDEF</span>
                <span className="stat-percentage">{value}</span>
                <div className="stat-bar">
                    <div className="stat-fill" style={{ width: value+'%' }}></div>
                </div>
            </div>
        </>
    )
}

export default Sdef