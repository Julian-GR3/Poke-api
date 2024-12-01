import TypeLabel from './TypeLabel'
import PokemonCardBasics from './PokemonCardBasics'
import CardDescription from './CardDescription'
import BaseStats from './BaseStats'


function PokeInfo() {
    return (
        <>
            <div className="poke-info">
                <TypeLabel />
                <PokemonCardBasics />
                <CardDescription />
                <BaseStats />
            </div>
        </>
    )
}

export default PokeInfo