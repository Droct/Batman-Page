let quotas = ["The night is darkest just before the dawn. And I promise you, the dawn is coming.", "The training is nothing! The will is everything! The will to act.", "Why do we fall? So we can learn to pick ourselves back up.", "If you’re good at something, never do it for free.", "It’s not who we are underneath, but what we do that defines us.", "Your anger gives you great power. But if you let it, it will destroy you… As it almost did me."];


function quotes() {

    let random = Math.floor(Math.random()* quotas.length) ;
    document.getElementById("alrightz").innerHTML = quotas[random];
}


