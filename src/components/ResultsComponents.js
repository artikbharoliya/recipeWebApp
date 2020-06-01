import React,{Component} from 'react';
import styles from '../cssmodules/resultcard.module.css';
function Results({uri,label,image,ingredientLines,calarie}){
    return(
            <div className={styles.resultCard}>
                <div className={styles.resultImageDiv}>
                    <img src={image} className={styles.resultImage}/>

                </div>
                <h4>{label}</h4>
                <a href={uri}  target="_blank" className={styles.rescipeBtn}>Click here for the Recipe</a>
                <div  className={styles.List}s>
                    <h5>Ingredients:</h5>
                    <ul>
                        {ingredientLines.map(ig => (<li className={styles.listStyle}>{ig}</li>))}
                    </ul>

                </div>
                
                <h5 className={styles.calories}>Calories: {calarie.toFixed(1)}</h5>
            </div>
     );
}
export default Results;
// {uri}
// //{uri,label,image,ingredientLines,calarie}
// {calarie}
// {label}