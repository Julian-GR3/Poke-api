import PokeInfo from './PokeInfo/PokeInfo'
import CardHeader from './CardHeader'
import CardImg from './CardImg'
import { useContext } from 'react'
import { DataContext } from '../context/Data'

function Card() {
    const { data } = useContext(DataContext);
    return (
        <>
            <div className="card">

                
                <CardHeader name={data && data.name ? data.name[0].toUpperCase() + data.name.slice(1) : 'Cargando...'}
                        id={data && data.id ? data.id : 'N/A'} />
                <CardImg />
                <PokeInfo />
            </div>
        </>
    )
}

export default Card