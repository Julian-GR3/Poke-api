import React, { useState, useContext } from 'react';
import { DataContext } from '../context/Data';

const Finder = () => {
    const {data, setData} = useContext(DataContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [pokemonName, setPokemonName] = useState('')

    // Función para realizar el fetch
    const handleFetchData = async () => {
        setLoading(true);  // Muestra el estado de carga
        setError(null);    // Reinicia el estado de error
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonName);
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            const result = await response.json();
            setData(result); // Actualiza el estado con los datos recibidos
        } catch (error) {
            setError(error.message); // Maneja el error
        } finally {
            setLoading(false); // Detiene el estado de carga
        }
    };

    return (
        <div>
            <div className="finder">
                <label className="label" htmlFor="">Buscador</label>
                <input className="text-box" type="text" placeholder="pokemon" onChange={(e) => setPokemonName(e.target.value.toLocaleLowerCase())} />
                <input className="button" type="button" value='Buscar' onClick={handleFetchData} />
            </div>

            {/* Muestra los diferentes estados */}
            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
            
        </div>
    );
};

export default Finder;
