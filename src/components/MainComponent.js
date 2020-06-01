import React, { useState, useEffect } from 'react';
import { Container,  Form, Input, Label } from 'reactstrap';

import styles from '../cssmodules/main.module.css';
import Results from './ResultsComponents';

// export const fetchRecipe = (q,cuisineType) => {
//     const APP_ID = "37487834";
//     const APP_KEY="d4fcfec5b0f572668592206785874390";
    
//     fetch(`https://api.edamam.com/search?q=tomatoes&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=1`,{
//             headers: {
//                 "Access-Control-Allow-Origin": "*"
//               },
//         })
//         .then(res => res.json())
//         .then(data => console.log(JSON.stringify(data)))
//         .catch(console.log)
// }
const Main= () => {
    
    

    const [recipes, setRecipes] = useState([]);
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");

    const APP_ID = "37487834";
    const APP_KEY="d4fcfec5b0f572668592206785874390";
    useEffect(()=>{ getRecipes()},[query]);
    const getRecipes = async ()=>{
        const Response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&from=0&to=6`);
        const data = await Response.json();
        setRecipes(data.hits);
        console.log(JSON.stringify(data));
        
    }

    

    const updateSearch = e => {
        setSearch(e.target.value);
    }

    const getSearch = e => {
        e.preventDefault();
        setQuery(search);
    }
    const x = [1,2,3,4,5]
        return(
            
            <Container>
                
                    <div className={styles.cardStyle}>
                        <h3 className={styles.heading}>
                            Hello search here
                        </h3>
                        <Form onSubmit={getSearch}>
                            <div className={styles.queryForm}>
                                <div className={styles.queryLabel}>  
                                    <Label>
                                            Search: 
                                    </Label>
                                </div>
                                <div className={styles.queryBar}>
                                    <Input  type="text" name="query" value={search} onChange={updateSearch}/>
                                </div>
                            </div>
                            
                            <div >
                                <button className={styles.queryButton} type="submit"  name="btn" >Search</button>
                            </div>
                        </Form>
                    </div>

                    <div className={styles.resultContainer}>
                        {recipes.map(recipe=>
                            <Results 
                            uri={recipe.recipe.url}
                             label={recipe.recipe.label} 
                             image={recipe.recipe.image} 
                             ingredientLines={recipe.recipe.ingredientLines} 
                             calarie={recipe.recipe.calories}
                             />
                        )}

                    </div>
                    
            </Container>
        );
};



export default Main;



/*
parameters: 
q

from
to

cuisineType

cuisineType	American
cuisineType	Asian
cuisineType	British
cuisineType	Caribbean
cuisineType	Central Europe
cuisineType	Chinese
cuisineType	Eastern Europe
cuisineType	French
cuisineType	Indian
cuisineType	Italian
cuisineType	Japanese
cuisineType	Kosher
cuisineType	Mediterranean
cuisineType	Mexican
cuisineType	Middle Eastern
cuisineType	Nordic
cuisineType	South American
cuisineType	South East Asian

*/