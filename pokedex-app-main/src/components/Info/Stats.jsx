import BaseStats from './BaseStats'
import PokemonStats from '../PokemonStats/PokemonStats'

function BaseStats() {
    return (
        <>
            <div className="base-stats">
                <BaseStatsTitle title={'Base Stats'}/>
                <PokemonStats />
            </div>
        </>
    )
}

export default BaseStats