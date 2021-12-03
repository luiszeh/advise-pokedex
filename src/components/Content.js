import React from 'react';
import { useState, useEffect } from 'react';
import '../styles/Content.css';
import { InputGroup, FormControl } from 'react-bootstrap';
import PokemonThumbnail from './PokemonThumbnail';


export default function Content() {
    const [allPokemons, setAllPokemons] = useState([])
    const [loadMore, setLoadMore] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

    const getAllPokemons = async () => {
        const res = await fetch(loadMore)
        const data = await res.json();

        setLoadMore(data.next);

        function createPokemonObject(results) {
            results.forEach( async (pokemon) => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
                const data = await res.json();

                setAllPokemons(currentList => [...currentList, data]);
                
            })
        }
        createPokemonObject(data.results);
        await console.log(allPokemons);
    }

    useEffect(() => {
        getAllPokemons();
    }, []);

    return (
        <div className="Content">
            <div className="Content-left">
                
            </div>
            <div className="Content-right">
                <div className="First-content-right">
                    <div className="First-content-right-texts">
                        <h1>Fase teste prático Front_end</h1>
                        <p>pokebusca</p>
                    </div>
                    <div className="First-content-right-search">
                        <InputGroup size="lg" className="mb-3">
                            <FormControl placeholder="Buscar" aria-label="Large" aria-describedby="inputGroup-sizing-lg" />
                        </InputGroup>
                    </div>
                </div>
                <hr />
                <div className="Count-poke">
                    <p>Exibindo 20 de XXX itens</p>
                </div>
                <hr />
                <div className="Pokemon-list">
                    { allPokemons.map((pokemon, index) => 
                        <PokemonThumbnail
                        id={pokemon.id}
                        name={pokemon.name}
                        image={pokemon.sprites.other.dream_world.front_default}
                        key={index}
                        />
                     )}
                </div>
                <button className="Button-load-more">Load more</button>
            </div>
        </div>
    )
}
