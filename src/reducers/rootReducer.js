import {combineReducers} from "redux";
import pokemonListReducer from "./pokemonListReducer";
import pokemonMultipleReducer from  "./PokemonMultipleReducer";


const rootReducer = combineReducers({
    pokemonListReducer,
    pokemonMultipleReducer
});

export default rootReducer;
