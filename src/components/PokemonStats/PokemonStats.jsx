import { useContext } from 'react'
import { DataContext } from '../../context/Data'
import Atk from './Atk'
import Def from './Def'
import Hp from './Hp'
import Satk from './Satk'
import Sdef from './Sdef'
import Spd from './Spd'


function PokemonStats() {

    const {data} = useContext(DataContext);

    if (!data || !data.stats || !data.stats[5].stat || !data.stats[5].stat.name) {
        return <p>Cargando stats...</p>;
    }
    return (
        <>
            <Hp value={data.stats[0].base_stat}/>
            <Atk value={data.stats[1].base_stat}/>
            <Def value={data.stats[2].base_stat}/>
            <Satk value={data.stats[3].base_stat}/>
            <Sdef value={data.stats[4].base_stat}/>
            <Spd value={data.stats[5].base_stat}/>
        </>
    )
}

export default PokemonStats