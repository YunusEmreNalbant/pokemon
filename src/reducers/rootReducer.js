import {combineReducers} from "redux";
import pokemonListReducer from "./pokemonListReducer";
import pokemonMultipleReducer from  "./PokemonMultipleReducer";
import loginReducer from  "./authReducer";


const rootReducer = combineReducers({
    pokemonListReducer,
    pokemonMultipleReducer,
    loginReducer,

});

export default rootReducer;
