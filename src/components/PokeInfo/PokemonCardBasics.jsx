import { useContext } from "react"
import { DataContext } from "../../context/Data"

function PokemonCardBasics() {
    const {data} = useContext(DataContext)
    return (
        <>
            <div className="basics-info">
                <div className="icon-color">
                    <i className="fas fa-weight" style={{ marginRight: '5px' }}></i>
                    {data.weight} kg
                </div>
                <div className="icon-color">
                    <i className="fas fa-ruler-vertical" style={{ marginRight: '5px' }}></i>
                    {data.height}m
                </div>
            </div>
        </>
    )
}

export default PokemonCardBasics