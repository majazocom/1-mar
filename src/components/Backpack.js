const Backpack = (props) => {
    console.log(props.pokemons);
    return ( 
        <select>
            {props.pokemons.map((pokemon, index) => <option key={index}>{pokemon.name}</option>)}
        </select>
     );
}
 
export default Backpack;