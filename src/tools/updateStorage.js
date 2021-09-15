//on crée une fonction qu'on nomme "updateStorage" avec "id" en paramètre.
export const updateStorage = id => {
    //on stocke les données présentes dans l'espace créé dans le local
    //storage "paris-events-favorites" dans une constante.
    const storedIds = window.localStorage.getItem("paris-events-favorites");
    //on crée un tableau vide.
    let storageArray = [];
    //quand le tableau comportera des données, elles seront converties en JSON.
    if (storedIds) {
        storageArray = JSON.parse(storedIds);
    }
    //on récupère l'index de l'id et on le stocke dans une variable.
    const index = storageArray.indexOf(id);
    //si l'id ne figure pas dans le tableau, alors on l'ajoute avec la méthode "push".
    if (!storageArray.includes(id)) {
        storageArray.push(id);
    //si l'id est déjà présent dans le tableau, alors on le retire grâce à la méthode "splice" et l'index de l'id.    
    } else {
        storageArray.splice(index, 1);
    }
    //pour mettre à jour le local storage, on utilise ".setItem". 
    //pour convertir le JSON en string, on utilise ".stringify" sur le contenu du tableau.
    window.localStorage.setItem("paris-events-favorites", JSON.stringify(storageArray));
};