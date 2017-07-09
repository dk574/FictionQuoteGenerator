var quotes = [
'To be or not to be, that is the question. <br> -Hamlet',
'Maybe ever\’body in the whole damn world is scared of each other. <br> -Of Mice and Men.',
'Life is to be lived, not controlled; and humanity is won by continuing to play in face of certain defeat. <br> -Invisible Man.',
 'Terror made me cruel. <br> -Wuthering Heights.',
 'Some men get the world, some men get ex-hookers and a trip to Arizona. You\'re in with the former, but my God I don\'t envy the blood on your conscience. <br> -LA Confidential.',
 'The only people for me are the mad ones, the ones who are mad to live, mad to talk, mad to be saved, desirous of everything at the same time, the ones who never yawn or say a commonplace thing, but burn, burn, burn like fabulous yellow roman candles exploding like spiders across the stars. <br> -On The Road.',
 'It was a bright cold day in April, and the clocks were striking thirteen. <br> -1984.',
 'We were the people who were not in the papers. We lived in the blank white spaces at the edges of print. It gave us more freedom. We lived in the gaps between the stories. <br> -A Handmaiden\'s Tale.',
 'It sounds plausible enough tonight, but wait until tomorrow. Wait for the common sense of the morning. <br> -The Time Machine.',
 'It\'s much better to do good in a way that no one knows anything about it. <br> -Anna Karenina.',
 'Life appears to me too short to be spent in nursing animosity or registering wrongs. <br> -Charlotte Bronte.',
  'You forget what you want to remember, and you remember what you want to forget. <br> -The Road.',
  'There is an idea of a Patrick Bateman, some kind of abstraction, but there is no real me, only an entity, something illusory, and though I can hide my cold gaze and you can shake my hand and feel flesh gripping yours and maybe you can even sense our lifestyles are probably comparable: I simply am not there. <br> -American Psycho.',
  'Finally, from so little sleeping and so much reading, his brain dried up and he went completely out of his mind. <br> -Don Quixote.',
   'We cast a shadow on something wherever we stand, and it is no good moving from place to place to save things; because the shadow always follows. Choose a place where you won\'t do harm - yes, choose a place where you won\'t do very much harm, and stand in it for all you are worth, facing the sunshine. <br> -A Room with a View.',
    'Memories warm you up from the inside. But they also tear you apart. <br> -Kafka on the Shore.',
    'You are your best thing. <br> -Beloved.', 
'Some birds are not meant to be caged, that\'s all. Their feathers are too bright, their songs too sweet and wild. So you let them go, or when you open the cage to feed them they somehow fly out past you. And the part of you that knows it was wrong to imprison them in the first place rejoices, but still, the place where you live is that much more drab and empty for their departure. <br> -Shawshank Redemption.' 

];

function newQuote() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

$("button").click(function(){
 $("#quoteDisplay").hide();
  $("#quoteDisplay").fadeIn(1000);
});
