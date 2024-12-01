import { useContext } from "react";
import { DataContext } from "../../context/Data";

function PokemonType (){
    const { data } = useContext(DataContext)
    return(
        <div className="types-container" style={{ color: "black" }}>
            {data && data.types && data.types.length > 0 ? (
                data.types.map((type, index) => (
                    <div key={index} className={`type ${type.type.name}`}>
                        {type.type.name}
                    </div>
                ))
            ) : (
                '...'
            )}
        </div>
    )
}

export default PokemonType