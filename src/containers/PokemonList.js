import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import _ from "lodash";
import {GetPokemonList} from "../actions/pokemonActions";
import {Link} from "react-router-dom";
import ReactPaginate from "react-paginate";
import CircularProgress from "@material-ui/core/CircularProgress";

const PokemonList = (props) => {
    const [search, setSearch] = useState("");
    const dispatch = useDispatch();
    const pokemonList = useSelector(state => state.pokemonListReducer);

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
            return <CircularProgress color="secondary"/>;
        }

        if (pokemonList.errorMsg !== "") {
            return <p>{pokemonList.errorMsg}</p>
        }

    };
    return (
        <div>
            <div className={"search-wrapper"}>
                <p>Search:</p>
                <input type={"text"} onChange={e => setSearch(e.target.value)}/>
                <button onClick={() => props.history.push(`/pokemon/${search}`)}>Search</button>
            </div>
            {showData()}
            {!_.isEmpty(pokemonList.data) && (
                <ReactPaginate
                    pageCount={Math.ceil(pokemonList.count / 15)}
                    pageRangeDisplayed={2}
                    marginPagesDisplayed={2}
                    onPageChange={(data) => getData(data.selected)}
                    containerClassName={"pagination"}
                />
            )}
        </div>
    )
};

export default PokemonList;
