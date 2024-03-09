
// Fonction middleware pour restreindre l'accès en fonction de l'heure et du jour
function controlAccess(req, res, next) {
    // Récupérer la date et l'heure actuelles
    const currentDate = new Date();
    const currentDay = currentDate.getDay(); // Dimanche = 0, Lundi = 1, ..., Samedi = 6
    const currentHour = currentDate.getHours();

    // Vérifier si c'est un jour ouvrable (du lundi au vendredi)
    if (currentDay === 0 || currentDay === 6) { // Dimanche ou Samedi
        return res.status(403).send('<h1>403 L\'application n\'est disponible que du lundi au vendredi.</h1>');
    }

    // Vérifier si c'est dans les heures d'ouverture (de 09h à 17h)
    if (currentHour < 9 || currentHour >= 17) {
        return res.status(403).send('<h1> 403 L\'application n\'est disponible que de 09h à 17h.</h1>');
    }

    // Si tout est OK, passez à l'étape suivante du middleware
    next();
}

// Export the middleware function
module.exports = controlAccess;
