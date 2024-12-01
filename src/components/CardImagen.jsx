import { DataContext } from "../context/Data";
import { useContext } from 'react'

function CardImagen() {
    const { data } = useContext(DataContext);

    if (!data || !data.sprites || !data.sprites.other || !data.sprites.other['official-artwork']) {
        return <p>...</p>;
    }

    return (
        <>
            <div className="image-container">
                <div className="circular-progress">
                    <img
                        src={data.sprites.other['official-artwork'].front_default}
                        alt={data.name}
                        width="200"
                    />
                </div>
            </div>
        </>
    )
}

export default CardImagen