import React, { useState, useContext } from 'react';
import { DataContext } from '../context/Data';

const Finder = () => {
    const {data, setData} = useContext(DataContext);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [pokemonName, setPokemonName] = useState('')

    const handleFetchData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('https://pokeapi.co/api/v2/pokemon/'+pokemonName);
            if (!response.ok) {
                throw new Error('Error en la solicitud');
            }
            const result = await response.json();
            setData(result);
        } catch (error) {
            setError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div className="finder">
                <label className="label" htmlFor="">Buscador</label>
                <input className="text-box" type="text" placeholder="pokemon" onChange={(e) => setPokemonName(e.target.value.toLocaleLowerCase())} />
                <input className="button" type="button" value='Buscar' onClick={handleFetchData} />
            </div>

            {loading && <p>Cargando...</p>}
            {error && <p>Error: {error}</p>}
            
        </div>
    );
};

export default Finder
