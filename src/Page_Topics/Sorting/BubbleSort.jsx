import {ArracyColor} from "../Data";

const BubbleSort= async (arr) =>{
    let arrayCopy = [...arr];
    const n = arrayCopy.length;
    for (let i=0; i < n; i++){
        for(let j=0; j < i; j++){
            await new Promise((resolve) => setTimeout(resolve,1000))
            if (arrayCopy[j] > arrayCopy[j+1]) {
                [arrayCopy[j], arrayCopy[j + 1]] = [arrayCopy[j + 1], arrayCopy[j]];
            }

        }
    }
}