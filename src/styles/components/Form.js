import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./Card";

const Form = () => {
    const [moviesData, setMoviesData] = useState([]);
    const [search, setSearch] = useState("code");
    const [sortGoodBad, setSortGoodBad] = useState ("goodToBad");
    

    useEffect(() => {
        axios.get(
            `https://api.themoviedb.org/3/search/movie?api_key=57fd5db43e94e551c0c0f4054f2e337a&query=${search}&language=fr-FR`).then((res) => setMoviesData(res.data.results));
    }, [search]);

    return (
       <div className="form-component">
           <div className="form-container">
                <form>
                    <input type="text" 
                        placeholder="Entrez le titre du votre film"
                        id="search-input"
                        onChange={(e) => setSearch(e.target.value)}
                         />
                    <input type="submit" value="Recherche" />
                </form>

                <div className="btn-sort-container">
                    <div 
                        className="btn-sort"
                        id="goodToBad"
                        onClick={() => setSortGoodBad("goodToBad")}
                        >
                         Top<span>&#8594;</span>
                    </div>

                    <div
                     className="btn-sort"
                      id="badToGood"
                      onClick={() =>
                        setSortGoodBad('badToGood')}>
                          Dop<span>&#8594;</span
                    ></div>
                </div>
                <div className="result">
                    {moviesData
                        .slice(0, 12)
                        .sort((a, b) => {
                            return b.vote_average - a.vote_average;
                        })
                    .map((movie) => (
                    <Card key={movie.id} movie={movie}/>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Form;