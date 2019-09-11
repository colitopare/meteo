Exercice du jour : Application météo très basique

Nous voulons une application d'une seule page qui présente un formulaire simple :

- Un champ pour écrire le nom d'une ville
- Un bouton pour soumettre

Lorsqu'on soumet, on va faire une requête http vers http://api.openweathermap.org/data/2.5/weather?q=LA_VILLE&appid=8e602b9ea28ed4f9f8fc97a5f6d1105c&units=metric

Evidemment vous remplacerez a chaque fois LA_VILLE dans l'adresse par la ville qui a été tapée dans le formulaire.
La requête HTTP devrait renvoyer une réponse en JSON : c'est un objet qui contient beaucoup d'infos et notamment une propriété "main" qui contient une propriété "temp" qui donne la température

Si vous voulez faire un test, ouvrez ça avec votre navigateur ou dans postman : http://api.openweathermap.org/data/2.5/weather?q=marseille&appid=8e602b9ea28ed4f9f8fc97a5f6d1105c&units=metric (là c'est les données pour Marseille)

Affichez la température que l'API répond pour une ville :)

Vous aurez donc besoin de :

- Une nouvelle application Angular (meteo)
- Un seul composant (le AppComponent suffira pour ça)
- Un service WeatherService qui sera chargé de faire la requête Http
- Vous devrez importer dans le AppModule les modules nécessaires (on fera un formulaire réactif et il y aura des requêtes HTTP, ça vous donne une idée sur les modules à importer ?)

Allez y tranquille !
