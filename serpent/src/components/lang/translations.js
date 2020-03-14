const translations = {
    'fr' : {
        'titleFlag' : 'Cliquez ici pour changer la langue',
        'image' : 'fr',
        'welcome' : "Version simplifiée du jeu Snake",
        "underfitNN" : "Réseau de Neurones sous-performant",
        "regularNN" : "Réseau de Neurones normal",
        "overfitNN" : "Réseau surperformant (surentrainement)",
        'titleHome' : 'Accueil',
        'titleStop' : "Cliquez pour stopper l'animation",
        'titleStart' : "Cliquez pour commencer l'animation",
        'chooseNN' : "Choisissez un réseau",
        "sliderTitle" : "Glissez pour changer d'animation",
        'speed' : "Vitesse = ",
        'foot' : 'Voici une version simplifiée du jeu snake.' +
                 ' Le but est que le bloc rouge (serpent) atteigne la nourriture ' +
                 '(en vert). Le serpent meurt si jamais il touche une frontière ' +
                 '(vous verrez le jeu redémarrer). 3 réseaux neuronaux ont été ' +
                 'entrainés pour simuler le comportement du serpent. ' +
                 "Le premier est sous-entraîné, le serpent n'est" +
                 " pas capable d'atteindre plusieurs fois de suite la nourriture. " +
                 "Le second a été plus entraîné que le premier, mais il fait " +
                 "encore quelques erreurs. Le troisième a été sur-entraîné (overfit). " +
                 "Il ne fait pas d'erreurs. Dans notre cas, c'est acceptable " +
                 "(le serpent ne verra jamais de nouveaux cas). " +
                 "Le défi ici n'est pas d'obtenir de bons résultats avec un réseau de neurones. " +
                 "Il s'agit d'implémenter la forward propagation du réseau " +
                 "en javascript sans l'utilisation d'une bibliothèque " +
                 "externe. Cela va de la multiplication matricielle à la " +
                 "fonction d'activation (relu). Comme vous pouvez l'imaginer " +
                 "le débogage était amusant /o\\ /o\\ /o\\.",
        'credit' : "Source de l'image",

    },
    'us' : {
        'titleFlag' : 'Click here to change the language',
        'image' : 'us',
        'welcome' : "Simplified version of Snake game",
        "underfitNN" : "Under performing Neural Net",
        "regularNN" : "Regular Neural Net",
        "overfitNN" : "Over performing Neural Net (overfit)",
        'titleHome' : 'Home',
        'titleStop' : "Click to stop animation",
        'titleStart' : "Click to start animation",
        'chooseNN' : 'Choose a neural net:',
        'sliderTitle' : "Slide to change animation speed",
        'speed' : "Speed = ",
        'foot' : 'Here is a simplified version of the snake game. ' +
                 'The goal is for the red block (snake) to reach the food ' +
                 '(in green). The snake dies if ever it hits a border (you will see the game restart). ' +
                 '3 neural nets have been trained to simulate the ' +
                 'behavior of a snake. The first one is undertrained, you will ' +
                 'see the snake is not able to reach many times the food. ' +
                 'The second one has been more trained than the first, but still ' +
                 'makes some errors. The 3rd one has been overtrained. It makes ' +
                 'no mistakes. This is ok in our case (the snake will never see unseen cases). ' +
                 'The challenge here is not to get good results with a neural net. ' +
                 'It is to implement the forward propagation of the Neural Net ' +
                 'in javascript without the use of any external library. It goes ' +
                 'from implementing the matrix multiplication to the activation function (relu).' +
                 'As you can imagine, debugging was fun /o\\ /o\\ /o\\ ',
        'credit' : 'Image source'
    }
}


export default translations
