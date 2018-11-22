$(document).ready(function() {
  
// generate a forest in tracery
 /*  function loadGrammar(name) {
        $("#output").html("");

        var grammar = tracery.createGrammar(grammars[name]);
        $("#grammar").html(grammar.toText());

        for (var i = 0; i < 8; i++) {

            var s = grammar.flatten("#origin#");
            console.log(s);
            var div = $("<div/>", {
                class : "outputSample",
                html : s
            });

            $("#output").append(div);

        }

    }; */

var foresttemplate = tracery.createGrammar(
   {
	"origin":["#forest#\n#forest#\n#forest#\n#forest#\n#forest#\n#forest#\n#forest#"],
	"forest":["#tree##tree##tree##tree##tree##tree##tree##tree##tree#",
"#tree##forestry##tree#",
"#tree##tree##forestry#",
"#forestry##tree##tree#",
"#tree##forestry##wildlife#",
"#forestry##wildlife##tree#",
"#tree##wildlife##forestry#",
"#wildlife##forestry##tree#",
"#forestry##tree##wildlife#",
"#wildlife##tree##forestry#"
],
	"forestry": ["#tree##wildlife##tree##wildlife##tree##wildlife##tree#",
"#tree##wildlife##tree##tree##tree##tree##tree#",
"#tree##tree##wildlife##tree##tree##tree##tree#",
"#tree##tree##wildlife##tree##tree##tree#",
"#tree##tree##tree##wildlife##tree##tree#",
"#tree##tree##tree##tree##wildlife##tree#",
"#tree##wildlife##wildlife##tree##tree##tree##tree#",
"#tree##wildlife##tree##tree##wildlife##tree##tree#",
"#tree##wildlife##tree##tree##tree##wildlife##tree#",
"#tree##tree##wildlife##tree##wildlife##tree##tree#",
"#tree##tree##wildlife##tree##tree##wildlife##tree#",
"#tree##tree##tree##wildlife##wildlife##tree##tree#",
"#tree##tree##tree##wildlife##tree##wildlife##tree#",
"#tree##tree##tree##tree##wildlife##wildlife##tree#",
"#tree##tree##tree##wildlife##wildlife##wildlife##tree#",
"#tree##tree##wildlife##wildlife##wildlife##tree##tree#",
"#tree##tree##wildlife##wildlife##tree##wildlife##tree#",
"#tree##tree##wildlife##tree##wildlife##wildlife##tree#",
"#tree##wildlife##wildlife##wildlife##tree##tree##tree#",
"#tree##wildlife##wildlife##tree##wildlife##tree##tree#",
"#tree##wildlife##wildlife##tree##tree##wildlife##tree#",
"#tree##wildlife##tree##wildlife##wildlife##tree##tree#",
"#tree##wildlife##tree##tree##wildlife##wildlife##tree#",
"#wildlife##tree##wildlife##tree##wildlife##tree##wildlife#",
"#wildlife##tree##wildlife##tree##wildlife##tree##wildlife#",
"#wildlife##tree##wildlife##tree##wildlife##tree##wildlife#",
"#tree##wildlife##tree##wildlife##tree##wildlife##tree#",
"#tree##wildlife##tree##wildlife##tree##wildlife##tree#",
"#tree##wildlife##tree##wildlife##tree##wildlife##tree#",

" #wildlife# #wildlife# #wildlife# ",
" #wildlife#     ",
" #wildlife#    ",
"  #wildlife#   ",
"   #wildlife#  ",
"    #wildlife# ",
" #wildlife##wildlife#    ",
" #wildlife#  #wildlife#  ",
" #wildlife#   #wildlife# ",
"  #wildlife# #wildlife#  ",
"  #wildlife#  #wildlife# ",
"   #wildlife##wildlife#  ",
"   #wildlife# #wildlife##tree#",
"    #wildlife##wildlife# ",
"   #wildlife##wildlife##wildlife# ",
"  #wildlife##wildlife##wildlife#  ",
"  #wildlife##wildlife# #wildlife# ",
"  #wildlife# #wildlife##wildlife# ",
" #wildlife##wildlife##wildlife#   ",
" #wildlife##wildlife# #wildlife#  ",
" #wildlife##wildlife#  #wildlife# ",
" #wildlife# #wildlife##wildlife# ",
" #wildlife#  #wildlife##wildlife# ",
"#wildlife# #wildlife# #wildlife# #wildlife#",
"#wildlife# #wildlife# #wildlife# #wildlife#",
"#wildlife# #wildlife# #wildlife# #wildlife#",
" #wildlife# #wildlife# #wildlife# ",
" #wildlife# #wildlife# #wildlife# ",
" #wildlife# #wildlife# #wildlife# "

],
	"tree": [
	" ",
	" ",
	"🌲",
	"🌳"
],
	"wildlife": [
	"🌲",
	"🌳",
	"🌲",
	"🌳",
	"🌲",
	"🌳",
	"🌲",
	"🌳",
	"🌲",
	"🌳",
	"🌲",
	"🌳",
	"🌲",
	"🌳",
	"🌲",
	"🌳",
	"🌲",
	"🌳",
	"🌲",
	"🌳",
	"🌺",
	"🌻 ",
	"🌹",
	"🌷",
	"🌼",
	"🌸",
	"💐",
	"🍄",
	"🌲",
	"🌳",
	"🌿",
	"☘",
	"🌾",
	"🍀",
	"🦂",
	"🐏",
	"🐑",
	"🐐",
	"🐘",
	"🐁",
	"🐀",
	"🐇",
	"🐿",
	"🦃",
	"🐓",
	"🐣",
	"🐥",
	"🕊",
	"🐊",
	"🐢",
	"🐍",
	"🐌",
	"🐛",
	"🐜",
	"🐝",
	"🐞",
	"🕷",
	"🕸"		
	],
"livestock": [ 
	"🦂",
	"🐏",
	"🐑",
	"🐐",
	"🐘",
	"🐁",
	"🐀",
	"🐇",
	"🐿",
	"🦃",
	"🐓",
	"🐣",
	"🐥",
	"🕊",
	"🐊",
	"🐢",
	"🐍",
	"🐌",
	"🐛",
	"🐜",
	"🐝",
	"🐞",
	"🕷",
	"🕸",
	"🐖",
	"🐄",
	"🐃",
	"🐂",
	"🐎",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" ",
	" "
]	
});
  
// output the forest as a single string of characters
  var value = $(this).val().replace(/\n/g, '<br/>');
  
  var forestoutput = foresttemplate.flatten('#origin#');
  
  
  
  
// figure out who the characters present are - maybe there's a more elegant way to do this, but i don't know it.
  
  var characters = [];
  var charList = []; // list the characters with 'a'
  var finalChar = [];
  
  if (forestoutput.indexOf("🐑") >= 0) { 
    characters.push("sheep"); }
  if (forestoutput.indexOf("🐐") >= 0) { 
      characters.push("goat");
  }
  if (forestoutput.indexOf("🐘") >= 0) { 
      characters.push("elephant");
  }
  if (forestoutput.indexOf("🐁") >= 0) { 
      characters.push("mouse");
  }
  if (forestoutput.indexOf("🐇") >= 0) { 
      characters.push("rabbit");
  }
  if (forestoutput.indexOf("🐿") >= 0) { 
      characters.push("squirrel");
  }
  if (forestoutput.indexOf("🦃") >= 0) { 
      characters.push("turkey");
  }
  if (forestoutput.indexOf("🐓") >= 0) { 
      characters.push("chicken");
  }
  if (forestoutput.indexOf("🐥") >= 0) { 
      characters.push("chick");
  }
  if (forestoutput.indexOf("🕊") >= 0) { 
      characters.push("dove");
  }
  if (forestoutput.indexOf("🐊") >= 0) { 
      characters.push("crocodile");
  }
  if (forestoutput.indexOf("🐢") >= 0) { 
      characters.push("turtle");
  }
  if (forestoutput.indexOf("🐍") >= 0) { 
      characters.push("snake");
  }
  if (forestoutput.indexOf("🐌") >= 0) { 
      characters.push("snail");
  }
  if (forestoutput.indexOf("🐛") >= 0) { 
      characters.push("caterpillar");
  }
  if (forestoutput.indexOf("🐜") >= 0) { 
      characters.push("ant");
  }
  if (forestoutput.indexOf("🐝") >= 0) { 
      characters.push("bee");
  }
  if (forestoutput.indexOf("🐞") >= 0) { 
      characters.push("ladybird");
  }
  if (forestoutput.indexOf("🐖") >= 0) { 
      characters.push("pig");
  }
  if (forestoutput.indexOf("🐄") >= 0) { 
      characters.push("cow");
  }
  if (forestoutput.indexOf("🐎") >= 0) { 
      characters.push("horse");
  }
  
  var i;
  for (i = 0; i < (characters.length - 1); i++) { 
    charList.push(" a " + characters[i]);
  } // formatted version of character list

  for (i = (characters.length - 1); i < (characters.length); i++) {
    finalChar.push(", and a " + characters[i]);
  }
  
  // log the forest trace and the cast of characters.
$('div#output').html(forestoutput);

  console.log(forestoutput);
  console.log(characters);
  console.log(charList);
  console.log(finalChar);
  
  
// exposition
var pastTense = {tense: RiTa.PAST_TENSE}; //arg for RiTa
var plural = {number: RiTa.PLURAL}; //arg for RiTa
  
var dayNight = [
  "day",
  "night"
];
  
var placeDesc = [
  "Through the " + `${RiTa.randomWord('jj')} ` + "and " + `${RiTa.randomWord('jj')} ` + "trees were scattered",
  "In the " + `${RiTa.randomWord('jj')} ` + "and " + `${RiTa.randomWord('jj')} ` + "clearing sat",
  "Wandering through the " + `${RiTa.randomWord('jj')} ` + "and " + `${RiTa.randomWord('jj')} ` + "grass came"
];
  
var weatherDesc = [
  "The " + `${RiTa.randomWord('jj')} ` + "sun " + `${RiTa.conjugate(RiTa.randomWord('vb'), pastTense)} ` + "down " + `${RiTa.randomWord('rb')} ` + "overhead. ",
  "It was snowing " + `${RiTa.randomWord('rb')}, ` + "and everything was covered in a " + `${RiTa.randomWord('jj')} ` + `${RiTa.randomWord('nn')} ` + "of " + `${RiTa.randomWord('jj')} ` + "white. ",
  "The wind was blowing " + `${RiTa.randomWord('rb')}, ` + "and the leaves of the trees " + `${RiTa.conjugate(RiTa.randomWord('vb'), pastTense)} ` + `${RiTa.randomWord('rb')} ` + "as it " + `${RiTa.conjugate(RiTa.randomWord('vb'), pastTense)} ` + "through them. ",
  "It was a " + `${RiTa.randomWord('jj')}, ` + "rainy day, " + "and some " + `${RiTa.randomWord('jj')} ` + "drizzle was just beginning to "  + `${RiTa.randomWord('rb')} ` + "fall " + "afresh. "
];
  
  
var rollPlace = placeDesc[Math.floor(Math.random()*placeDesc.length)];
var rollWeather = weatherDesc[Math.floor(Math.random()*weatherDesc.length)];
var rollTime = dayNight[Math.floor(Math.random()*dayNight.length)];
  

function exposition() {
  
  
 var exposition = "<br/><br/>It was a " + `${RiTa.randomWord('jj')} ` + rollTime + ", and the forest was " + `${RiTa.randomWord('jj')}. ` + rollPlace + " a number of creatures, the heroes of our story;" + charList + finalChar + ". " + rollWeather;
 
 console.log(exposition);
  $('div#output').append(exposition);
  
}
  
// function to describe a character.
  
function charDesc() {
  var currentChar = characters[0];
  
  var description = "The " + currentChar + " was a " + `${RiTa.randomWord('jj')} ` + currentChar + ", " + `${RiTa.randomWord('jj')}` + ", " + `${RiTa.randomWord('jj')}` + ", and " + `${RiTa.randomWord('jj')}` + ". The " + currentChar + " enjoyed " + `${RiTa.pluralize(RiTa.randomWord('nn'))}` + ", but hated " + `${RiTa.pluralize(RiTa.randomWord('nn'))}` + ". At this particular moment, it felt " + `${RiTa.randomWord('jj')}` + ", with shades of " + `${RiTa.randomWord('jj')}` + ". ";
  
 console.log(description);
  
 $('div#output').append(description); 
}
  
function verbedAdverb() {
 return `${RiTa.conjugate(RiTa.randomWord('vb'), pastTense)} ` + `${RiTa.randomWord('rb')}`;
}
  
  
function charActionFirst() {
  var prevChar = characters[characters.length - 1];
  var currentChar = characters[0];
  var nextChar = characters[1];
  
  var action = "The " + currentChar + " " + verbedAdverb() + ", " + verbedAdverb() + ", then " + verbedAdverb() + ". It was " + `${RiTa.randomWord('jj')}` + ", and " + `${RiTa.conjugate(RiTa.randomWord('vb'), pastTense)} ` + "the " + `${RiTa.randomWord('nn')}` + ". "; 
  
  console.log(action);
  $('div#output').append(action);
}
  
function charAction() {
  var currentChar = characters[0];
  
  var action = "Nearby, the " + currentChar + " " + verbedAdverb() + ", " + verbedAdverb() + ", then " + verbedAdverb() + ". It was " + `${RiTa.randomWord('jj')}` + ", and " + `${RiTa.conjugate(RiTa.randomWord('vb'), pastTense)} ` + "the " + `${RiTa.randomWord('nn')}` + ". "; 
  
  console.log(action);
  $('div#output').append(action);
}
  
function charSpeech() {
  var prevChar = characters[characters.length - 1];
  var currentChar = characters[0];
  var nextChar = characters[1];
  
  `${RiTa.pluralize(RiTa.randomWord('nn'))}` 
  
  var rm = new RiMarkov(3);
  
  rm.loadText("Small neat ears and thick silky hair. It was the Water Rat! Then the two animals stood and regarded each other cautiously. Hullo, Mole! said the Water Rat. Hullo, Rat! said the Mole. Would you like to come over? enquired the Rat presently. Oh, it's all very well to TALK, said the Mole, rather pettishly, he being new to a river and riverside life and its ways. The Rat said nothing, but stooped and unfastened a rope and hauled on it; then lightly stepped into a little boat which the Mole had not observed. It was painted blue outside and white within, and was just the size for two animals; and the Moles whole heart went out to it at once, even though he did not yet fully understand its uses. The Rat sculled smartly across and made fast. Then he held up his forepaw as the Mole stepped gingerly down. Lean on that! he said. Now then, step lively! and the Mole to his surprise and rapture found himself actually seated in the stern of a real boat. This has been a wonderful day! said he, as the Rat shoved off and took to the sculls again. Do you know, Ive never been in a boat before in all my life. What? cried the Rat, open-mouthed: Never been in a--you never--well I--what have you been doing, then? Is it so nice as all that? asked the Mole shyly, though he was quite prepared to believe it as he leant back in his seat and surveyed the cushions, the oars, the rowlocks, and all the fascinating fittings, and felt the boat sway lightly under him. Nice? Its the ONLY thing, said the Water Rat solemnly, as he leant forward for his stroke. Believe me, my young friend, there is NOTHING--absolute nothing--half so much worth doing as simply messing about in boats. Simply messing, he went on dreamily: messing--about--in--boats; messing---- Look ahead, Rat! cried the Mole suddenly. It was too late. The boat struck the bank full tilt. The dreamer, the joyous oarsman, lay on his back at the bottom of the boat, his heels in the air. --about in boats--or WITH boats, the Rat went on composedly, picking himself up with a pleasant laugh. In or out of them, it doesnt matter. Nothing seems really to matter, that's the charm of it. Whether you get away, or whether you don't; whether you arrive at your destination or whether you reach somewhere else, or whether you never get anywhere at all, you're always busy, and you never do anything in particular; and when you've done it there's always something else to do, and you can do it if you like, but you'd much better not. Look here! If you've really nothing else on hand this morning, supposing we drop down the river together, and have a long day of it? The Mole waggled his toes from sheer happiness, spread his chest with a sigh of full contentment, and leaned back blissfully into the soft cushions. WHAT a day I'm having! he said. Let us start at once! Hold hard a minute, then! said the Rat. He looped the painter through a ring in his landing-stage, climbed up into his hole above, and after a short interval reappeared staggering under a fat, wicker luncheon-basket. Shove that under your feet, he observed to the Mole, as he passed it down into the boat. Then he untied the painter and took the sculls again. Whats inside it? asked the Mole, wriggling with curiosity. There's cold chicken inside it, replied the Rat briefly; coldtonguecoldhamcoldbeefpickledgherkinssaladfrenchrollscresssan- dwichespottedmeatgingerbeerlemonadesodawater---- O stop, stop, cried the Mole in ecstacies: This is too much! Do you really think so? enquired the Rat seriously. Its only what I always take on these little excursions; and the other animals are always telling me that I'm a mean beast and cut it VERY fine! The Mole never heard a word he was saying. Absorbed in the new life he was entering upon, intoxicated with the sparkle, the ripple, the scents and the sounds and the sunlight, he trailed a paw in the water and dreamed long waking dreams. The Water Rat, like the good little fellow he was, sculled steadily on and forebore to disturb him. I like your clothes awfully, old chap, he remarked after some half an hour or so had passed. I'm going to get a black velvet smoking-suit myself some day, as soon as I can afford it. I beg your pardon, said the Mole, pulling himself together with an effort. You must think me very rude; but all this is so new to me. So--this--is--a--River! THE River, corrected the Rat. And you really live by the river? What a jolly life! By it and with it and on it and in it, said the Rat. It's brother and sister to me, and aunts, and company, and food and drink, and (naturally) washing. It's my world, and I don't want any other. What it hasn't got is not worth having, and what it doesnt know is not worth knowing. Lord! the times we've had together! Whether in winter or summer, spring or autumn, it's always got its fun and its excitements. When the floods are on in February, and my cellars and basement are brimming with drink that's no good to me, and the brown water runs by my best bedroom window; or again when it all drops away and, shows patches of mud that smells like plum-cake, and the rushes and weed clog the channels, and I can potter about dry shod over most of the bed of it and find fresh food to eat, and things careless people have dropped out of boats! But isn't it a bit dull at times? the Mole ventured to ask. Just you and the river, and no one else to pass a word with? No one else to--well, I mustnt be hard on you, said the Rat with forbearance. You're new to it, and of course you don't know. The bank is so crowded nowadays that many people are moving away altogether: O no, it isn't what it used to be, at all. Otters, kingfishers, dabchicks, moorhens, all of them about all day long and always wanting you to DO something--as if a fellow had no business of his own to attend to! What lies over THERE asked the Mole, waving a paw towards a background of woodland that darkly framed the water-meadows on one side of the river. That? O, that's just the Wild Wood, said the Rat shortly. We don't go there very much, we river-bankers. Aren't they--aren't they very NICE people in there? said the Mole, a trifle nervously. W-e-ll, replied the Rat, let me see. The squirrels are all right. AND the rabbits--some of them, but rabbits are a mixed lot. And then there's Badger, of course. He lives right in the heart of it; wouldnt live anywhere else, either, if you paid him to do it. Dear old Badger! Nobody interferes with HIM. Theyd better not, he added significantly. Why, who SHOULD interfere with him? asked the Mole. Well, of course--there--are others, explained the Rat in a hesitating sort of way. Weasels--and stoats--and foxes--and so on. They're all right in a way--I'm very good friends with them--pass the time of day when we meet, and all that--but they break out sometimes, there's no denying it, and then--well, you can't really trust them, and that's the fact. ");

  RiTa.sentences = rm.generateSentences(20);

  for (i = 0; i < r.sentences.length; i++) {
    console.log(r.sentences[i]);
  }
  
  var speech = "It approached the " + prevChar + ", " + verbedAdverb() + " to it, " + "and said: " + " <br/></br/>'Excuse me, but I was wondering: " + `${rm.generateSentences(20)} ` + "'" + "\n'Actually,' responded the " + prevChar + ` ${RiTa.randomWord('rb')}` + ", 'I think you'll find the following. " +  `${rm.generateSentences(20)} ` + "'" + "<br/><br/>The " + currentChar + " felt " + `${RiTa.randomWord('jj')} ` + "at this, and " + verbedAdverb() + ". ";
  
   console.log(speech);
  $('div#output').append(speech);
}
  
  
// WHAT GOES ON THE PAGE
  
// exposition 
  
exposition()
  
// description of each of the sentient characters 
  
var i;
for (i = 0; i < characters.length; i++) { 
  if (i == 0) {
  charDesc();
  charActionFirst();
  } else { 
  charAction();
  charDesc();
  charSpeech();
  }
  // characters.splice(0,1);
 characters.push(characters.shift());  // moves first character to end of array so we can start over
}
  
});