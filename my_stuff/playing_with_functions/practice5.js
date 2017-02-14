function sign() {
  var sign = prompt("What is your astrological sign?").toLowerCase(); // makes the typed answer not case sensitive 

  switch(sign) {
    case "aries":
      alert("In a zombie apocalypse Aries makes themselves a leader. But always leads people into trouble");
      break;
    case "taurus":
      alert("In a zombie apocalypse Taurus complains about having to eat canned food.");
      break;
    case "gemini":
      alert("In a zombi apocalypse Gemini forgets not to talk when zombies are nearby.");
      break;
    case "cancer":
      alert("In a zombie apocalypse Cancer gets shit done, but complains they have to do everything.");
      break;
    case "leo":
      alert("In a zombie apocalypse Leo constantly upsets by the fact that their hair is oily.");
      break;
    case "virgo":
      alert("In a zombie apocalypse Virgo demands that everyone should focus on acquiring deodorant.");
      break;
    case "libra":
      alert("In a zombie apocalypse Libra tries to make sure everyone stays in a good mood.");
      break;
    case "scorpio":
      alert("In a zombie apocalypse Scorpio is happy that they can now kill something without guilt.");
      break;
    case "sagittarius":
      alert("In a zombie apocalypse Sagittarius must prove that they can kill the most zombies.");
      break;
    case "capricorn":
      alert("In a zombie apocalypse Capricorn finds an actual safe place to hide, because everyone is incompetent.");
      break;
    case "aquarius":
      alert("In a zombie apocalypse Aquarius starts daydreaming then gets bit.");
      break;
    case "pisces":
      alert("In a zombie apocalypse Pisces .... just cries.");
      break;
    default:
      alert("Please enter a valid sign");
      break;
  }
}
