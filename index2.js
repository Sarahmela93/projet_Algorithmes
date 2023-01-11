/*2.1. Sujet 1
function checkSum(nums, k) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === k) {
                return true;
            }
        }
    }
    return false;
}

console.log(checkSum([10, 15, 3, 7], 17));  // true
console.log(checkSum([1, 8, 10, 21], 19));  // false */

/* 2.2 hauteur des immeubles

function buildingsWithWestView(heights) {
    let count = 0;
    let maxHeight = 0;
    for (let i = heights.length - 1; i >= 0; i--) {
        if (heights[i] > maxHeight) {
            maxHeight = heights[i];
            count++;
        }
    }
    return count;
}

console.log(buildingsWithWestView([3, 7, 8, 3, 6, 1])); // 3
console.log(buildingsWithWestView([1, 4, 5, 8])); // 1 */

//2.3.1. Exercice 1
/*

function findSumPair(nums, k) {
    for (let i = 0; i < nums.length; i++) {
      for (let j = i + 1; j < nums.length; j++) {
        if (nums[i] + nums[j] === k) {
          return true;
        }
      }
    }
    return false;
  }
  
  console.log(findSumPair([10, 15, 3, 7], 17)); // affiche "true"
console.log(findSumPair([1, 8, 10, 21], 19)); // affiche "false" */

//2.3.2. Exercice 2
/*function buildingsWithWestView(buildings) {
    let count = 0;
    for (let i = 0; i < buildings.length; i++) {
        for (let j = i+1; j < buildings.length; j++) {
            if(buildings[i] > buildings[j])
                count++;
        }
    }
    return count;
}

console.log(buildingsWithWestView([3, 7, 8, 3, 6, 1])); // affiche "3"
console.log(buildingsWithWestView([1, 4, 5, 8])); // affiche "1"
*/

//2.3.3. Exercice 3 O(n)
/*function has_sum(numbers, k) {
    // créer un tableau vide
    const numSet = new Set();
    // parcourir chaque élément du tableau
    for (const num of numbers) {
        // vérifier si k - num est dans le tableau
        if (numSet.has(k - num)) {
            return true;
        }
        // ajouter chaque numéro dans le tableau
        numSet.add(num);
    }
    return false;
}

let numbers = [10, 15, 3, 7];
let k = 17;
console.log(has_sum(numbers, k));  // true, car 10 + 7 = 17

numbers = [1, 8, 10, 21];
k = 19;
console.log(has_sum(numbers, k));  // false, car il n'y a pas deux nombres ayant 19 comme résultat de leur addition
*/

//2.3.4. Exercice 4

/*function buildingsWithWestView(heights) {
    let westViewBuilding = 0;
    let maxHeight = -1;
    for (let i = heights.length-1; i >= 0; i--) {
        if (heights[i] > maxHeight) {
            westViewBuilding++;
            maxHeight = heights[i];
        }
    }
    return westViewBuilding;
}
let heights = [3, 7, 8, 3, 6, 1];
console.log(buildingsWithWestView(heights)); // retourne 3

heights = [1, 4, 5, 8];
console.log(buildingsWithWestView(heights)); // retourne 1

*/
//exo 5

/*function has_sum(numbers, k) {
    // créer un tableau vide
    const numSet = new Set();
    // parcourir chaque élément du tableau
    for (const num of numbers) {
        // vérifier si k - num est dans le tableau
        if (numSet.has(k - num)) {
            return true;
        }
        // ajouter chaque numéro dans le tableau
        numSet.add(num);
    }
    return false;
}

let numbers = [10, 15, 3, 7];
let k = 17;
console.log(has_sum(numbers, k));  // true, car 10 + 7 = 17

numbers = [1, 8, 10, 21];
k = 19;
console.log(has_sum(numbers, k));  // false, car il n'y a pas deux nombres ayant 19 comme résultat de leur addition
*/

//2.3.6. Exercice 6


/*function nb_immeubles_vue_ouest(liste) {
    let compteur = 0;
    let max_hauteur = 0;
    for (let i = liste.length -1 ; i >= 0 ; i--) {
        if (liste[i] >= max_hauteur) {
            max_hauteur = liste[i];
            compteur++;
        }
    }
    return compteur;
}


let liste1 = [3, 7, 8, 3, 6, 1];
console.log(nb_immeubles_vue_ouest(liste1)) // 3

let liste2 = [1, 4, 5, 8];
console.log(nb_immeubles_vue_ouest(liste2)) // 1

//Dans cet algorithme, il y a un seul passage sur la liste. La fonction utilise une boucle for pour parcourir la liste dans l'ordre inverse, en commençant à l'index le plus grand (liste.length-1) et en finissant à l'index le plus petit (0). Pour chaque itération de la boucle, elle vérifie la hauteur de l'immeuble courant, et si celle-ci est supérieure à la hauteur maximale enregistrée, elle met à jour la hauteur maximale et incrémente le compteur. En fin de boucle, elle retourne la valeur du compteur qui représente le nombre d'immeubles à vue sur l'ouest. Cette boucle fait un seul passage sur la liste donc l'algorithme est dit "en temps linéaire" o(n)
*/