import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {GetPokemonList} from "../actions/pokemonActions";
import {Link} from "react-router-dom";

const PokemonList = () => {
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.pokemonListReducer);
    console.log(pokemonList)
    useEffect(() => {
        getData(1);
    }, []);

    const getData = (page = 1) => {
        dispatch(GetPokemonList(page));
    };

    const showData = () => {
        if (!_.isEmpty(pokemonList.data)) {
            return (
                <div className={"list-wrapper"}>
                    {
                        pokemonList.data.map(el => {
                            return (
                                <div className={"pokemon-item"}>
                                    <p>{el.name}</p>
                                    <Link to={`/pokemon/${el.name}`}>Göster</Link>
                                </div>
                            )
                        })
                    }
                </div>
            )
        }

        if (pokemonList.loading) {
            return <p>Loading ...</p>
        }

        if (pokemonList.errorMsg !== "") {
            return <p>{pokemonList.errorMsg}</p>
        }

    };
    return (
        <div>
            {showData()}
        </div>
    )
};

export default PokemonList;
