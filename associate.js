document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
var wordhole;

        function changeSpointCheck(numnum) {
            localStorage.setItem('spointChecker', numnum);

        }


        var spoint = 0;

        function reloader() {
            var cheese = localStorage.getItem('spointChecker');
            var integer = parseInt(cheese, 10);
            spoint = integer;
            checkCookie();
        }

        function selecta(type) {
         
            localStorage.setItem('game', type);
            var lgame = localStorage.getItem('newgame');
            if (type != lgame) {
                document.getElementById("gfg").style.display = "none";
           
            }
         
            document.getElementById("frame1").style.display = "none";
            document.getElementById("frame2").style.display = "inline";
            titleLoader()
        }

        function titleLoader() {
          
            var user = localStorage.getItem('game');
            if (user != "") {
                if (user == "famous") {
                 
                    document.getElementById("whatGame").innerHTML = "Celebrities & Famous Folk \(33 Terms\)";
                }
                if (user == "things") {
                    document.getElementById("whatGame").innerHTML = "Stuff & Things \(50 Terms\)";
                }
                if (user == "food") {
                    document.getElementById("whatGame").innerHTML = "🍔 Food & Drink \(46 Terms\)";
                }
                if (user == "beer") {
                    document.getElementById("whatGame").innerHTML = "🍺 Drinking Game \(41 Terms\)";

                }
                if (user == "verbs") {
                    document.getElementById("whatGame").innerHTML = "Action Verbs \(66 Terms\)";
                }
                if (user == "original") {
                    document.getElementById("whatGame").innerHTML = "Ultra Long Game \(201 Random Terms\)";
                }
                if (user == "aussies") {
                    document.getElementById("whatGame").innerHTML = "A game about Australia \(43 Terms\)";
                }
                if (user == "yankees") {
                    document.getElementById("whatGame").innerHTML = "America\: Home of the Brave \(43 Terms\)";
                }
                if (user == "poms") {
                    document.getElementById("whatGame").innerHTML = "Everything England \(42 Terms\)";
                }
                if (user == "kiwis") {
                    document.getElementById("whatGame").innerHTML = "A game about New Zealand \(23 Terms\)";
                }
                if (user == "places") {
                    document.getElementById("whatGame").innerHTML = "Amazing Places \(47 Terms\)";
                }
                if (user == "brands") {
                    document.getElementById("whatGame").innerHTML = "Well Known Brands \(48 Terms\)";
                }
                if (user == "concepts") {
                    document.getElementById("whatGame").innerHTML = "Abstract Concepts \(43 Terms\)";
                }
                if (user == "kriskringle") {
                    document.getElementById("whatGame").innerHTML = "🎄 The Kris Kringle Christmas Game \(44 Terms\)";

                }
            } else {

            }
        }



        function checkCookie() {
            var user = localStorage.getItem('game');
            localStorage.setItem('newgame', user);
            if (user != "") {
                if (user == "food") {
                    food();
                    atype();
                }
                if (user == "beer") {
                    beer();
                    atype();

                }
                if (user == "famous") {
                    famous();
                    atype();
                }
                if (user == "things") {
                    things();
                    atype();
                }
                if (user == "verbs") {
                    verbs();
                    atype();
                }
                if (user == "original") {
                    original();
                    atype();
                }
                if (user == "aussies") {
                    aussies();
                    atype();
                }
                if (user == "yankees") {
                    yankees();
                    atype();
                }
                if (user == "poms") {
                    poms();
                    atype();
                }
                if (user == "kiwis") {
                    kiwis();
                    atype();
                }
                if (user == "places") {
                    places();
                    atype();
                }
                if (user == "brands") {
                    brands();
                    atype();
                }
                if (user == "concepts") {
                    concepts();
                    atype();
                }
                if (user == "kriskringle") {
                    kriskringle();
                    atype();

                }
            } else {
                window.location = 'https://partygame.com.au'
            }
        }
var firstwords;
        function atype() {
            var squote = new Array;
            squote[0] = "Double Points Maxi Round.\n The Jiber chooses three responses. Players choose six responses";
            squote[1] = "Bullseye Round.\n  The Jiber chooses one response. Players choose three";
            squote[2] = "Bullseye Round.\n  The Jiber chooses one response. Players choose three responses";
            squote[3] = "Double Points Bullseye Round. \n  The Jiber chooses one response. Players choose three response";
            squote[4] = "Regular Round.\n  The Jiber and players all choose three responses";
            squote[5] = "Regular Round.\n  The Jiber and players all choose three responses";
            squote[6] = "Regular Round.\n  The Jiber and players all choose three responses";
            squote[7] = "Regular Round.\n  The Jiber and players all choose three responses";
            squote[8] = "Regular Round.\n  The Jiber and players all choose three responses";
            squote[9] = "Regular Round.\n  The Jiber and players all choose three responses";
            squote[10] = "Regular Round.\n  The Jiber and players all choose three responses";
            squote[11] = "Regular Round.\n  The Jiber and players all choose three responses";
            squote[12] = "Regular Round.\n  The Jiber and players all choose three responses";
            squote[13] = "Regular Round.\n The Jiber and players all choose three responses";
            squote[14] = "Double Points Regular Round.\n  The Jiber and players all choose three responses";
            squote[15] = "Triple Points Regular Round.\n  The Jiber and players all choose three responses";
            squote[16] = "Maxi Round.\n  The Jiber chooses three responses. Players choose six responses";
            squote[17] = "Maxi Round.\n  The Jiber chooses three responses. Players choose six responses";
            squote[18] = "Triple Points Bullseye Round. \n  The Jiber chooses one response. Players choose three responses";
            squote[19] = "Triple Points Maxi Round.\n  The Jiber chooses three responses. Players choose six responses";



            var rdmGame = Math.floor(Math.random() * squote.length);
            var element = document.getElementById("gameType");
            element.innerHTML = squote[rdmGame];
            firstwords = squote[rdmGame]
            Mchoose(rdmGame);
        }



        function Mchoose(trig) {
  var secondWords = "Your term for this round is" + wordhole + "I repeat, your term for this round is" + wordhole;
  var thirdWords = "Pens on the table. On your marks, get set, start writing.";
  var firstwords2 = firstwords + "I Repeat" + firstwords;
  var fwrd = firstwords2 + secondWords + thirdWords;
  const utterance = new SpeechSynthesisUtterance(fwrd);



  // Set the rate at which the text is spoken (1 = normal speed)
  utterance.rate = 0.8; // Adjust the value to slow down or speed up the voice



utterance.onend = function() {
    setTimeout(function() {
      var yfwrd = "Pens down, the round is complete. The jiber reads out his responses and the score is tallied. This was a" + firstwords;
      var secondUtterance = new SpeechSynthesisUtterance(yfwrd);
      speechSynthesis.speak(secondUtterance);
    }, 30000);
  };

  speechSynthesis.speak(utterance);
        
}


        function buttonHide() {
            document.getElementById("triggerMusic").style.display = "none";
            document.getElementById("myAudioX").style.display = "inline";
        }




        //Create New Round Button
        function newRound1() {

          


        }


        //Start Game Shows Everything

        function initialShowButton() {

            document.getElementById("whatGameCage").style.display = "none";
            document.getElementById("funct").style.display = "block";
            document.getElementById("sterm").style.display = "block";
            document.getElementById("newRound").style.display = "block";
            document.getElementById("newgame").style.display = "block";
            document.getElementById("starter").style.display = "none";
            document.getElementById("gamereload").style.display = "none";
          
        }

        function showhideDiv() {

            var y = document.getElementById("showsit2");
            if (y.style.display === "none") {

                y.style.display = "block";
            } else {

                y.style.display = "none";
            }
        }

        function loader() {

            document.getElementById("sterm").style.display = "none";
            document.getElementById("newRound").style.display = "none";
       


        }










        function setCheck(gameT) {
            localStorage.setItem('crossCheck', gameT);
        }

        function spointCheck(roundN) {
            localStorage.setItem('spointChecker', roundN);
        }






        function famous() {


            var aquote;
            aquote = new Array;
            aquote[0] = "\"Shania Twain\"";
            aquote[1] = "\"Oprah Winfrey\"";
            aquote[2] = "\"Walt Disney\"";
            aquote[3] = "\"Neil Armstrong\"";
            aquote[4] = "\"John Travolta\"";
            aquote[5] = "\"Oliva Newton John\"";
            aquote[6] = "\"Chris Rock\"";
            aquote[7] = "\"Janet Jackson\"";
            aquote[8] = "\"Gandhi\"";
            aquote[9] = "\"Merryl Streep\"";
            aquote[10] = "\"Peter Jackson\"";
            aquote[11] = "\"Ridley Scott\""
            aquote[12] = "\"Crocadile Dundee\"";
            aquote[13] = "\"Steve Irwin\"";
            aquote[14] = "\"The Guy off Blues Clues\"";
            aquote[15] = "\"Albert Einstein\"";
            aquote[16] = "\"Kylie Kardashian\"";
            aquote[17] = "\"Victoria Beckham\"";
            aquote[18] = "\"Nicki Minaj\"";
            aquote[19] = "\"Dr Phil\"";
            aquote[20] = "\"Hugh Jackman\""
            aquote[21] = "\"Harry Potter\"";
            aquote[22] = "\"Michael Jordan\"";
            aquote[23] = "\"Peter Gabriel\""
            aquote[24] = "\"David Copperfield\"";
            aquote[25] = "\"Hugh Jackman\"";
            aquote[26] = "\"Tom Cruise\""
            aquote[27] = "\"Serena Williams\"";
            aquote[28] = "\"Michelle Obama\"";
            aquote[29] = "\"Miley Cyrus\""
            aquote[30] = "\"Marilyn Munroe\"";
            aquote[31] = "\"George Orwell\"";
            aquote[32] = "\"Captain Planet\"";


            fLen = aquote.length;
            if (spoint == fLen) {
                document.getElementById("demo").innerHTML = "Game Over Folks!";
                document.getElementById("endHide").style.display = "none";
                document.getElementById("endHide2").style.display = "none";

                spoint = 0;
                spointCheck(0);
            }
            else {


                var wh = aquote[spoint];
                document.getElementById("demo").innerHTML = wh;
                wordhole = wh;

                setCheck("famous");
                spointCheck(spoint);
                spoint = spoint + 1;

            }
        }

        function food() {


            var aquote;
            aquote = new Array;
            aquote[0] = "\"Chocolate\"";
            aquote[1] = "\"Crepes\"";
            aquote[2] = "\"Dining Out\""
            aquote[3] = "\"Big Mac\"";
            aquote[4] = "\"Burger King\"";
            aquote[5] = "\"Mars Bar\""
            aquote[6] = "\"Sprite\"";
            aquote[7] = "\"Stove\"";
            aquote[8] = "\"Kitchen\""
            aquote[9] = "\"Chef\"";
            aquote[10] = "\"Knife & Fork\"";
            aquote[11] = "\"Wine\""
            aquote[12] = "\"Cheese\"";
            aquote[13] = "\"Food\"";
            aquote[14] = "\"Beer\""
            aquote[15] = "\"Tongue\"";
            aquote[16] = "\"Indigestion\"";
            aquote[17] = "\"Space Food\""
            aquote[18] = "\"Supermarket\"";
            aquote[19] = "\"Fish\"";
            aquote[20] = "\"Meat\""
            aquote[21] = "\"Seven Eleven\"";
            aquote[22] = "\"Tuck Shop\"";
            aquote[23] = "\"Lunch\""
            aquote[24] = "\"Second Breakfast\"";
            aquote[25] = "\"Burp\"";
            aquote[26] = "\"Bali Belly\""
            aquote[27] = "\"Pie\"";
            aquote[28] = "\"Water\"";
            aquote[29] = "\"Curry\""
            aquote[30] = "\"Herbs\"";
            aquote[31] = "\"Eat\"";
            aquote[32] = "\"Pizza\""
            aquote[33] = "\"Dessert\"";
            aquote[34] = "\"Pickle\"";
            aquote[35] = "\"Salt\""
            aquote[36] = "\"Fruit\"";
            aquote[37] = "\"Watermelon\"";
            aquote[38] = "\"Potato\""
            aquote[39] = "\"Packaged Food\"";
            aquote[40] = "\"MSG\"";
            aquote[41] = "\"Diet\""
            aquote[42] = "\"Feast\"";
            aquote[43] = "\"Chocolate Bar\"";
            aquote[44] = "\"Table\""
            aquote[45] = "\"Washing Up\"";




            fLen = aquote.length;
            if (spoint == fLen) {
                document.getElementById("demo").innerHTML = "Game Over Folks!";
                document.getElementById("endHide").style.display = "none";
                document.getElementById("endHide2").style.display = "none";

                spoint = 0;
                spointCheck(0);
            }
            else {


                var wh = aquote[spoint];
                document.getElementById("demo").innerHTML = wh;
                wordhole = wh;

                setCheck("famous");
                spointCheck(spoint);
                spoint = spoint + 1;

            }
        }


        function beer() {


            var aquote;
            aquote = new Array;
            aquote[0] = "\"Beer Bong\"";
            aquote[1] = "\"Camping\"";
            aquote[2] = "\"Pub\""
            aquote[3] = "\"Over the limit\"";
            aquote[4] = "\"Tipsy\"";
            aquote[5] = "\"Mates\""
            aquote[6] = "\"Party\"";
            aquote[7] = "\"Sausage Sandwich\"";
            aquote[8] = "\"BBQ\""
            aquote[9] = "\"Cigarette\"";
            aquote[10] = "\"Cheers\"";
            aquote[11] = "\"Music\""
            aquote[12] = "\"Fire Pit\"";
            aquote[13] = "\"Shoey\"";
            aquote[14] = "\"Rambling\""
            aquote[15] = "\"Fight\"";
            aquote[16] = "\"Swearing\"";
            aquote[17] = "\"After Dark\""
            aquote[18] = "\"Camp Fire\"";
            aquote[19] = "\"Local Bands\"";
            aquote[20] = "\"Poker Machines\""
            aquote[21] = "\"Cold Chisel\"";
            aquote[22] = "\"Night on the town\"";
            aquote[23] = "\"Your Shout!\""
            aquote[24] = "\"Flirting\"";
            aquote[25] = "\"Scull\"";
            aquote[26] = "\"Jokes\""
            aquote[27] = "\"Fun\"";
            aquote[28] = "\"Tall Stories\"";
            aquote[29] = "\"Jack Daniels\""
            aquote[30] = "\"Shots\"";
            aquote[31] = "\"Dancing\"";
            aquote[32] = "\"Laughter\""
            aquote[33] = "\"Designated Driver\"";
            aquote[34] = "\"Bouncers\"";
            aquote[35] = "\"Pashing\""
            aquote[36] = "\"Rejection on the dance floor\"";
            aquote[37] = "\"Drunk\"";
            aquote[38] = "\"Kebab\""
            aquote[39] = "\"Vomit\"";
            aquote[40] = "\"Hangover\"";



            fLen = aquote.length;
            if (spoint == fLen) {
                document.getElementById("demo").innerHTML = "Game Over Folks!";
                document.getElementById("endHide").style.display = "none";
                document.getElementById("endHide2").style.display = "none";

                spoint = 0;
                spointCheck(0);
            }
            else {


                var wh = aquote[spoint];
                document.getElementById("demo").innerHTML = wh;
                wordhole = wh;

                setCheck("famous");
                spointCheck(spoint);
                spoint = spoint + 1;

            }
        }



        function original() {


            var aquote;
            aquote = new Array;
            aquote[0] = "\"Heavy\"";
            aquote[1] = "\"Cooking\"";
            aquote[2] = "\"Teeth\""
            aquote[3] = "\"Gravity\"";
            aquote[4] = "\"Isolation\"";
            aquote[5] = "\"Uluru\""
            aquote[6] = "\"Rocket Ship\"";
            aquote[7] = "\"Trauma\"";
            aquote[8] = "\"Cake\""
            aquote[9] = "\"Yummy\"";
            aquote[10] = "\"Steel\"";
            aquote[11] = "\"Queen Victoria\""
            aquote[12] = "\"Cheese\"";
            aquote[13] = "\"Food\"";
            aquote[14] = "\"Shoes\""
            aquote[15] = "\"Flight\"";
            aquote[16] = "\"Swimming\"";
            aquote[17] = "\"Truck\""
            aquote[18] = "\"Air Conditioner\"";
            aquote[19] = "\"Time\"";
            aquote[20] = "\"Monday\""
            aquote[21] = "\"Work\"";
            aquote[22] = "\"Taste\"";
            aquote[23] = "\"Crime\""
            aquote[24] = "\"Eyes\"";
            aquote[25] = "\"Toilet\"";
            aquote[26] = "\"Fart\""
            aquote[27] = "\"Oval\"";
            aquote[28] = "\"Branding\"";
            aquote[29] = "\"McDonalds\""
            aquote[30] = "\"Wi-Fi\"";
            aquote[31] = "\"Home\"";
            aquote[32] = "\"Lungs\""
            aquote[33] = "\"Cheese\"";
            aquote[34] = "\"Pickle\"";
            aquote[35] = "\"Money\""
            aquote[36] = "\"Credit Card\"";
            aquote[37] = "\"Smile\"";
            aquote[38] = "\"Clock\""
            aquote[39] = "\"Dress\"";
            aquote[40] = "\"Space\"";
            aquote[41] = "\"Light\""
            aquote[42] = "\"Family\"";
            aquote[43] = "\"Chocolate Bar\"";
            aquote[44] = "\"Nike\""
            aquote[45] = "\"Fertilizer\"";
            aquote[46] = "\"Shopping\"";
            aquote[47] = "\"Test\""
            aquote[48] = "\"Zebra\"";
            aquote[49] = "\"Microbe\"";
            aquote[50] = "\"David\""
            aquote[51] = "\"Trump\"";
            aquote[52] = "\"Teeth\""
            aquote[53] = "\"Knife\"";
            aquote[54] = "\"Shovel\"";
            aquote[55] = "\"Paper\""
            aquote[56] = "\"Towel\"";
            aquote[57] = "\"Toilet\"";
            aquote[58] = "\"Beach Ball\""
            aquote[59] = "\"Champion\"";
            aquote[60] = "\"Slug\"";
            aquote[61] = "\"Sluggish\""
            aquote[62] = "\"Jesus\"";
            aquote[63] = "\"Faith\"";
            aquote[64] = "\"Grace\""
            aquote[65] = "\"Chocolate\"";
            aquote[66] = "\"Google\"";
            aquote[67] = "\"Computer\""
            aquote[68] = "\"Password\"";
            aquote[69] = "\"Pie\"";
            aquote[70] = "\"Bleach\""
            aquote[71] = "\"Head\"";
            aquote[72] = "\"Ball\"";
            aquote[73] = "\"Cross\""
            aquote[74] = "\"Plague\"";
            aquote[75] = "\"Vote\"";
            aquote[76] = "\"Punch\""
            aquote[77] = "\"Leap\"";
            aquote[78] = "\"Fast\"";
            aquote[79] = "\"Trigger\""
            aquote[80] = "\"Kind\"";
            aquote[81] = "\"Candle\"";
            aquote[82] = "\"Bright\""
            aquote[83] = "\"Bruised\"";
            aquote[84] = "\"Scratch\"";
            aquote[85] = "\"Clear\""
            aquote[86] = "\"Bold\"";
            aquote[87] = "\"Growth\"";
            aquote[88] = "\"Tooth\""
            aquote[89] = "\"Band\"";
            aquote[90] = "\"Musician\"";
            aquote[91] = "\"Eggs\""
            aquote[92] = "\"Run\"";
            aquote[93] = "\"Stork\"";
            aquote[94] = "\"Fish\""
            aquote[95] = "\"Turtle Dove\"";
            aquote[96] = "\"Opera House\"";
            aquote[97] = "\"Plug\""
            aquote[98] = "\"Democracy\"";
            aquote[99] = "\"Electricity\"";
            aquote[100] = "\"Stool\""
            aquote[101] = "\"Cooking\"";
            aquote[102] = "\"Teeth\""
            aquote[103] = "\"Black\"";
            aquote[104] = "\"Plague\"";
            aquote[105] = "\"Engaged\""
            aquote[106] = "\"Blossom\"";
            aquote[107] = "\"Table\"";
            aquote[108] = "\"Chair\""
            aquote[109] = "\"Bill Gates\"";
            aquote[110] = "\"Climate Change\"";
            aquote[111] = "\"Stick\""
            aquote[112] = "\"Leaf\"";
            aquote[113] = "\"Green\"";
            aquote[114] = "\"Thai\""
            aquote[115] = "\"Fashion\"";
            aquote[116] = "\"New Zealand\"";
            aquote[117] = "\"England\""
            aquote[118] = "\"French\"";
            aquote[119] = "\"Russia\"";
            aquote[120] = "\"Zimbabwe\""
            aquote[121] = "\"Heavy Metal\"";
            aquote[122] = "\"Easter\"";
            aquote[123] = "\"Christmas\""
            aquote[124] = "\"Madonna\"";
            aquote[125] = "\"Gandhi\"";
            aquote[126] = "\"Nelson Mandela\""
            aquote[127] = "\"Martin Luther King\"";
            aquote[128] = "\"Fine\"";
            aquote[129] = "\"Clueless\""
            aquote[130] = "\"Zen\"";
            aquote[131] = "\"Pragmatic\"";
            aquote[132] = "\"Model\""
            aquote[133] = "\"Horse\"";
            aquote[134] = "\"Gamble\"";
            aquote[135] = "\"Smoked\""
            aquote[136] = "\"Derelict\"";
            aquote[137] = "\"Game of Thrones\"";
            aquote[138] = "\"Cool\""
            aquote[139] = "\"America\"";
            aquote[140] = "\"Carols\"";
            aquote[141] = "\"Axe\""
            aquote[142] = "\"Hat\"";
            aquote[143] = "\"Spoon\"";
            aquote[144] = "\"Middle\""
            aquote[145] = "\"Mainstream\"";
            aquote[146] = "\"Matched\"";
            aquote[147] = "\"Match\""
            aquote[148] = "\"Australian Idol\"";
            aquote[149] = "\"Masked Singer\"";
            aquote[150] = "\"Kylie Minogue\""
            aquote[151] = "\"Cooking\"";
            aquote[152] = "\"Teeth\""
            aquote[153] = "\"Daniel Craig\"";
            aquote[154] = "\"Bert Newton\"";
            aquote[155] = "\"Teddy bear\""
            aquote[156] = "\"Rugby League\"";
            aquote[157] = "\"Harry Potter\"";
            aquote[158] = "\"Rainbow\""
            aquote[159] = "\"Care Bears\"";
            aquote[160] = "\"Star Wars\"";
            aquote[161] = "\"Lord of the Rings\""
            aquote[162] = "\"Jewels\"";
            aquote[163] = "\"Gold\"";
            aquote[164] = "\"State\""
            aquote[165] = "\"Calming\"";
            aquote[166] = "\"Drink\"";
            aquote[167] = "\"Spot\""
            aquote[168] = "\"Change\"";
            aquote[169] = "\"Settle\"";
            aquote[170] = "\"Selfie\""
            aquote[171] = "\"Tangle\"";
            aquote[172] = "\"Single\"";
            aquote[173] = "\"Plain\""
            aquote[174] = "\"Symbol\"";
            aquote[175] = "\"Battle\"";
            aquote[176] = "\"Tackle\""
            aquote[177] = "\"Passion\"";
            aquote[178] = "\"Gas\"";
            aquote[179] = "\"Tone\""
            aquote[180] = "\"Zipper\"";
            aquote[181] = "\"Goals\"";
            aquote[182] = "\"Pleased\""
            aquote[183] = "\"Easy\"";
            aquote[184] = "\"Strange\"";
            aquote[185] = "\"Pump\""
            aquote[186] = "\"Penny\"";
            aquote[187] = "\"Water\"";
            aquote[188] = "\"Ocean\""
            aquote[189] = "\"Coast\"";
            aquote[190] = "\"Bland\"";
            aquote[191] = "\"Sick\""
            aquote[192] = "\"Lego\"";
            aquote[193] = "\"Tea\"";
            aquote[194] = "\"Fish\""
            aquote[195] = "\"Turtle Dove\"";
            aquote[196] = "\"Opera House\"";
            aquote[197] = "\"Plug\""
            aquote[198] = "\"Democracy\"";
            aquote[199] = "\"Electricity\"";
            aquote[200] = "\"Punk\""



            fLen = aquote.length;
            if (spoint == fLen) {
                document.getElementById("demo").innerHTML = "Game Over Folks!";
                document.getElementById("endHide").style.display = "none";
                document.getElementById("endHide2").style.display = "none";

                spoint = 0;
                spointCheck(0);
            }
            else {


                var wh = aquote[spoint];
                document.getElementById("demo").innerHTML = wh;
                wordhole = wh;

                setCheck("famous");
                spointCheck(spoint);
                spoint = spoint + 1;

            }
        }


        function things() {


            var aquote;
            aquote = new Array;
            aquote[0] = "\"Car\"";
            aquote[1] = "\"Desk\"";
            aquote[2] = "\"Teeth\""
            aquote[3] = "\"Lego\"";
            aquote[4] = "\"Grass\"";
            aquote[5] = "\"Foot\""
            aquote[6] = "\"Rocket Ship\"";
            aquote[7] = "\"Table\"";
            aquote[8] = "\"Cake\""
            aquote[9] = "\"Superman\"";
            aquote[10] = "\"Steel\"";
            aquote[11] = "\"Crown\""
            aquote[12] = "\"Cheese\"";
            aquote[13] = "\"Dice\"";
            aquote[14] = "\"Shoes\""
            aquote[15] = "\"Shovel\"";
            aquote[16] = "\"Rock Salt\"";
            aquote[17] = "\"Truck\""
            aquote[18] = "\"Air Conditioner\"";
            aquote[19] = "\"Timepiece\"";
            aquote[20] = "\"Stick\""
            aquote[21] = "\"Eye\"";
            aquote[22] = "\"Bobble Head\"";
            aquote[23] = "\"Suit\""
            aquote[24] = "\"Eyes\"";
            aquote[25] = "\"Toilet\"";
            aquote[26] = "\"Gland\""
            aquote[27] = "\"Oval\"";
            aquote[28] = "\"House\"";
            aquote[29] = "\"Make Up\""
            aquote[30] = "\"Teddy Bear\"";
            aquote[31] = "\"Carrot\"";
            aquote[32] = "\"Lungs\""
            aquote[33] = "\"Burr\"";
            aquote[34] = "\"Pickle\"";
            aquote[35] = "\"Money\""
            aquote[36] = "\"Credit Card\"";
            aquote[37] = "\"Spanks\"";
            aquote[38] = "\"Clothing\""
            aquote[39] = "\"Drum\"";
            aquote[40] = "\"Asteroid\"";
            aquote[41] = "\"Log\""
            aquote[42] = "\"Frame\"";
            aquote[43] = "\"Thermos\"";
            aquote[44] = "\"Night Gown\""
            aquote[45] = "\"Fern\"";
            aquote[46] = "\"Ship\"";
            aquote[47] = "\"Bear\""
            aquote[48] = "\"Rain\"";
            aquote[49] = "\"Barrel\"";


            fLen = aquote.length;
            if (spoint == fLen) {
                document.getElementById("demo").innerHTML = "Game Over Folks!";
                document.getElementById("endHide").style.display = "none";
                document.getElementById("endHide2").style.display = "none";

                spoint = 0;
                spointCheck(0);
            }
            else {


                var wh = aquote[spoint];
                document.getElementById("demo").innerHTML = wh;
                wordhole = wh;

                setCheck("famous");
                spointCheck(spoint);
                spoint = spoint + 1;

            }
        }


        function verbs() {


            var aquote;
            aquote = new Array;
            aquote[0] = "\"Yell\"";
            aquote[1] = "\"Write\"";
            aquote[2] = "\"Walk\""
            aquote[3] = "\"Wait\"";
            aquote[4] = "\"Vote\"";
            aquote[5] = "\"Visit\""
            aquote[6] = "\"Turn\"";
            aquote[7] = "\"Touch\"";
            aquote[8] = "\"Throw\""
            aquote[9] = "\"Think\"";
            aquote[10] = "\"Talk\"";
            aquote[11] = "\"Stand\""
            aquote[12] = "\"Spend\"";
            aquote[13] = "\"Smile\"";
            aquote[14] = "\"Sit\""
            aquote[15] = "\"Sing\"";
            aquote[16] = "\"Swimming\"";
            aquote[17] = "\"Shout\""
            aquote[18] = "\"Send\"";
            aquote[19] = "\"Run\"";
            aquote[20] = "\"Ride\""
            aquote[21] = "\"Read\"";
            aquote[22] = "\"Taste\"";
            aquote[23] = "\"Push\""
            aquote[24] = "\"Play\"";
            aquote[25] = "\"Open\"";
            aquote[26] = "\"Fart\""
            aquote[27] = "\"Nod\"";
            aquote[28] = "\"Move\"";
            aquote[29] = "\"March\""
            aquote[30] = "\"Make\"";
            aquote[31] = "\"Listen\"";
            aquote[32] = "\"Lift\""
            aquote[33] = "\"Leave\"";
            aquote[34] = "\"Laugh\"";
            aquote[35] = "\"Kick\""
            aquote[36] = "\"Jump\"";
            aquote[37] = "\"Joke\"";
            aquote[38] = "\"Insult\""
            aquote[39] = "\"Hop\"";
            aquote[40] = "\"Hit\"";
            aquote[41] = "\"Help\""
            aquote[42] = "\"Grab\"";
            aquote[43] = "\"Go\"";
            aquote[44] = "\"Give\""
            aquote[45] = "\"Fix\"";
            aquote[46] = "\"Fall\"";
            aquote[47] = "\"Exit\""
            aquote[48] = "\"Enter\"";
            aquote[49] = "\"Eat\"";
            aquote[50] = "\"Drink\""
            aquote[51] = "\"Dream\"";
            aquote[52] = "\"Dance\""
            aquote[53] = "\"Cry\"";
            aquote[54] = "\"Come\"";
            aquote[55] = "\"Close\""
            aquote[56] = "\"Climb\"";
            aquote[57] = "\"Call\"";
            aquote[58] = "\"Buy\""
            aquote[59] = "\"Build\"";
            aquote[60] = "\"Bring\"";
            aquote[61] = "\"Bake\""
            aquote[62] = "\"Ask\"";
            aquote[63] = "\"Arrive\"";
            aquote[64] = "\"Agree\""
            aquote[65] = "\"Act\"";


            fLen = aquote.length;
            if (spoint == fLen) {
                document.getElementById("demo").innerHTML = "Game Over Folks!";
                document.getElementById("endHide").style.display = "none";
                document.getElementById("endHide2").style.display = "none";

                spoint = 0;
                spointCheck(0);
            }
            else {


                var wh = aquote[spoint];
                document.getElementById("demo").innerHTML = wh;
                wordhole = wh;

                setCheck("famous");
                spointCheck(spoint);
                spoint = spoint + 1;

            }
        }


        function aussies() {


            var aquote;
            aquote = new Array;
            aquote[0] = "\"Thongs\"";
            aquote[1] = "\"BBQ\"";
            aquote[2] = "\"Sun\""
            aquote[3] = "\"Bondi Beach\"";
            aquote[4] = "\"Outback\"";
            aquote[5] = "\"Gumtree\""
            aquote[6] = "\"Crocodile Dundee\"";
            aquote[7] = "\"Bushfires\"";
            aquote[8] = "\"Budgie Smugglers\""
            aquote[9] = "\"Koala Bears\"";
            aquote[10] = "\"Banjo Patterson\"";
            aquote[11] = "\"Opera House\""
            aquote[12] = "\"Southern Cross\"";
            aquote[13] = "\"John Farnham\"";
            aquote[14] = "\"Witchetty Grub\""
            aquote[15] = "\"Bush Tucker\"";
            aquote[16] = "\"Steve Irwin\"";
            aquote[17] = "\"Hey True Blue\""
            aquote[18] = "\"Sydney\"";
            aquote[19] = "\"Twelve Apostles\"";
            aquote[20] = "\"Big Banana\""
            aquote[21] = "\"Goanna\"";
            aquote[22] = "\"Sydney Morning Herald\"";
            aquote[23] = "\"Kakadu\""
            aquote[24] = "\"Akubra\"";
            aquote[25] = "\"Bourke\"";
            aquote[26] = "\"Cricket\""
            aquote[27] = "\"MCG\"";
            aquote[28] = "\"Woolworths\"";
            aquote[29] = "\"Redback\""
            aquote[30] = "\"Parkes Radio Telescope\"";
            aquote[31] = "\"Gallipoli\"";
            aquote[32] = "\"The Castle\""
            aquote[33] = "\"ACDC\"";
            aquote[34] = "\"Milo\"";
            aquote[35] = "\"Red Rooster\""
            aquote[36] = "\"Gough Whitlam\"";
            aquote[37] = "\"Don Bradman\"";
            aquote[38] = "\"Cathy Freeman\""
            aquote[39] = "\"Uluru\"";
            aquote[40] = "\"Sulfur-Crested Cockatoo\"";
            aquote[41] = "\"Funnel Web Spider\""
            aquote[42] = "\"Skippy\"";




            fLen = aquote.length;
            if (spoint == fLen) {
                document.getElementById("demo").innerHTML = "Game Over Folks!";
                document.getElementById("endHide").style.display = "none";
                document.getElementById("endHide2").style.display = "none";

                spoint = 0;
                spointCheck(0);
            }
            else {


                var wh = aquote[spoint];
                document.getElementById("demo").innerHTML = wh;
                wordhole = wh;

                setCheck("famous");
                spointCheck(spoint);
                spoint = spoint + 1;

            }
        }


        function yankees() {


            var aquote;
            aquote = new Array;
            aquote[0] = "\"Baseball\"";
            aquote[1] = "\"Abraham Lincoln\"";
            aquote[2] = "\"Statue of Liberty\""
            aquote[3] = "\"Michael Jordon\"";
            aquote[4] = "\"McDonalds\"";
            aquote[5] = "\"Hollywood\""
            aquote[6] = "\"Grand Canyon\"";
            aquote[7] = "\"Racoons\"";
            aquote[8] = "\"Top Gun\""
            aquote[9] = "\"Jackson Pollock\"";
            aquote[10] = "\"Arizona\"";
            aquote[11] = "\"Ford Mustang\""
            aquote[12] = "\"Stephen King\"";
            aquote[13] = "\"Netflix\"";
            aquote[14] = "\"Disney Land\""
            aquote[15] = "\"Wall Street\"";
            aquote[16] = "\"Vietnam\"";
            aquote[17] = "\"Evangelical\""
            aquote[18] = "\"Cowboy\"";
            aquote[19] = "\"Time Magazine\"";
            aquote[20] = "\"Halloween\""
            aquote[21] = "\"Civil War\"";
            aquote[22] = "\"Yellowstone\"";
            aquote[23] = "\"Rolling Stone\""
            aquote[24] = "\"Congress\"";
            aquote[25] = "\"Empire State Building\"";
            aquote[26] = "\"Harvard University\""
            aquote[27] = "\"Fourth of July\"";
            aquote[28] = "\"CocaCola\"";
            aquote[29] = "\"Babe Ruth\""
            aquote[30] = "\"Apollo 11\"";
            aquote[31] = "\"Wizard of Oz\"";
            aquote[32] = "\"Thanksgiving\""
            aquote[33] = "\"Ivy League\"";
            aquote[34] = "\"Fonzie\"";
            aquote[35] = "\"Elvis\""
            aquote[36] = "\"Ron Howard\"";
            aquote[37] = "\"New York City\"";
            aquote[38] = "\"The Blues\""
            aquote[39] = "\"Civil Rights Movement\"";
            aquote[40] = "\"Space Race\"";
            aquote[41] = "\"Mr Ed\""
            aquote[42] = "\"Star Wars\"";



            fLen = aquote.length;
            if (spoint == fLen) {
                document.getElementById("demo").innerHTML = "Game Over Folks!";
                document.getElementById("endHide").style.display = "none";
                document.getElementById("endHide2").style.display = "none";

                spoint = 0;
                spointCheck(0);
            }
            else {


                var wh = aquote[spoint];
                document.getElementById("demo").innerHTML = wh;
                wordhole = wh;

                setCheck("famous");
                spointCheck(spoint);
                spoint = spoint + 1;

            }
        }


        function poms() {


            var aquote;
            aquote = new Array;
            aquote[0] = "\"Big Ben\"";
            aquote[1] = "\"Gordon Ramsey\"";
            aquote[2] = "\"Westminster Abbey\""
            aquote[3] = "\"Church of England\"";
            aquote[4] = "\"Thames\"";
            aquote[5] = "\"The Goodies\""
            aquote[6] = "\"Winston Churchill\"";
            aquote[7] = "\"The Beetles\"";
            aquote[8] = "\"Teletubbies\""
            aquote[9] = "\"BBC\"";
            aquote[10] = "\"Cockney\"";
            aquote[11] = "\"Queen Victoria\""
            aquote[12] = "\"Rolls Royce\"";
            aquote[13] = "\"Pound Sterling\"";
            aquote[14] = "\"William Shakespeare\""
            aquote[15] = "\"Oxford\"";
            aquote[16] = "\"Red Buses\"";
            aquote[17] = "\"Royal Family\""
            aquote[18] = "\"House of Commons\"";
            aquote[19] = "\"Downing Street\"";
            aquote[20] = "\"Black Cabs\""
            aquote[21] = "\"David Beckham\"";
            aquote[22] = "\"Tea\"";
            aquote[23] = "\"The Spice Girls\""
            aquote[24] = "\"London\"";
            aquote[25] = "\"The Rolling Stones\"";
            aquote[26] = "\"Black Adder\""
            aquote[27] = "\"David Bowie\"";
            aquote[28] = "\"Stone Henge\"";
            aquote[29] = "\"Monty Python\""
            aquote[30] = "\"Rowan Atkinson\"";
            aquote[31] = "\"Sherwood Forrest\"";
            aquote[32] = "\"Prince Harry\""
            aquote[33] = "\"Badgers\"";
            aquote[34] = "\"King Arthur\"";
            aquote[35] = "\"Industrial Revolution\""
            aquote[36] = "\"Please Sir can I've some more?\"";
            aquote[37] = "\"Bangers & Mash\"";
            aquote[38] = "\"007\""
            aquote[39] = "\"MI6\"";
            aquote[40] = "\"Bridget Jones\"";
            aquote[41] = "\"Cricket\""




            fLen = aquote.length;
            if (spoint == fLen) {
                document.getElementById("demo").innerHTML = "Game Over Folks!";
                document.getElementById("endHide").style.display = "none";
                document.getElementById("endHide2").style.display = "none";

                spoint = 0;
                spointCheck(0);
            }
            else {


                var wh = aquote[spoint];
                document.getElementById("demo").innerHTML = wh;
                wordhole = wh;

                setCheck("famous");
                spointCheck(spoint);
                spoint = spoint + 1;

            }
        }


        function kiwis() {


            var aquote;
            aquote = new Array;
            aquote[0] = "\"Kiwi\"";
            aquote[1] = "\"Aotearoa\"";
            aquote[2] = "\"All Blacks\""
            aquote[3] = "\"Hobbits\"";
            aquote[4] = "\"Sheep\"";
            aquote[5] = "\"Jacinda Ardern\""
            aquote[6] = "\"Auckland\"";
            aquote[7] = "\"Kea\"";
            aquote[8] = "\"Haka\""
            aquote[9] = "\"Maori\"";
            aquote[10] = "\"Sir Edmund Hillary\"";
            aquote[11] = "\"Wellington\""
            aquote[12] = "\"Taika Waititi\"";
            aquote[13] = "\"Fush & Chups\"";
            aquote[14] = "\"Sam Neil\""
            aquote[15] = "\"Lamingtons\"";
            aquote[16] = "\"Kakapo\"";
            aquote[17] = "\"Rotorua\""
            aquote[18] = "\"Russell Crowe\"";
            aquote[19] = "\"Tasman Sea\"";
            aquote[20] = "\"Moa\""
            aquote[21] = "\"Hāngi\"";
            aquote[22] = "\"Pavlova\"";



            fLen = aquote.length;
            if (spoint == fLen) {
                document.getElementById("demo").innerHTML = "Game Over Folks!";
                document.getElementById("endHide").style.display = "none";
                document.getElementById("endHide2").style.display = "none";

                spoint = 0;
                spointCheck(0);
            }
            else {


                var wh = aquote[spoint];
                document.getElementById("demo").innerHTML = wh;
                wordhole = wh;

                setCheck("famous");
                spointCheck(spoint);
                spoint = spoint + 1;

            }
        }


        function places() {


            var aquote;
            aquote = new Array;
            aquote[0] = "\"Earth\"";
            aquote[1] = "\"Grand Canyon\"";
            aquote[2] = "\"Mariana Trench\""
            aquote[3] = "\"Las Vegas\"";
            aquote[4] = "\"The Outback\"";
            aquote[5] = "\"Erinsborough\""
            aquote[6] = "\"Mayfair\"";
            aquote[7] = "\"Great Pyramid of Giza\"";
            aquote[8] = "\"The 12 Apostles\""
            aquote[9] = "\"Middle Earth\"";
            aquote[10] = "\"India\"";
            aquote[11] = "\"Milky Way\""
            aquote[12] = "\"Tatooine\"";
            aquote[13] = "\"Red Square\"";
            aquote[14] = "\"Buckingham Palace\""
            aquote[15] = "\"Pacific Ocean\"";
            aquote[16] = "\"Dunkirk\"";
            aquote[17] = "\"Mars\""
            aquote[18] = "\"Leaning Tower of Pisa\"";
            aquote[19] = "\"The Colosseum\"";
            aquote[20] = "\"Land of Oz\""
            aquote[21] = "\"Great Barrier Reef\"";
            aquote[22] = "\"Lake Superior\"";
            aquote[23] = "\"Sweden\""
            aquote[24] = "\"10 Downing Street\"";
            aquote[25] = "\"Hogwarts\"";
            aquote[26] = "\"Great Dividing Range\""
            aquote[27] = "\"Aotearoa\"";
            aquote[28] = "\"International Space Station\"";
            aquote[29] = "\"Central Park\""
            aquote[30] = "\"Sydney Opera House\"";
            aquote[31] = "\"California\"";
            aquote[32] = "\"Amazon Rain Forest\""
            aquote[33] = "\"Nile River\"";
            aquote[34] = "\"Area 51\"";
            aquote[35] = "\"Money\""
            aquote[36] = "\"Bermuda Triangle\"";
            aquote[37] = "\"Hades\"";
            aquote[38] = "\"Alpha Centauri\""
            aquote[39] = "\"El Dorado\"";
            aquote[40] = "\"France\"";
            aquote[41] = "\"The Mediteranian\""
            aquote[42] = "\"Serengeti\"";
            aquote[43] = "\"Berlin\"";
            aquote[44] = "\"The Forbidden City\""
            aquote[45] = "\"Atlantis\"";
            aquote[46] = "\"1600 Pennsylvania Avenue\"";




            fLen = aquote.length;
            if (spoint == fLen) {
                document.getElementById("demo").innerHTML = "Game Over Folks!";
                document.getElementById("endHide").style.display = "none";
                document.getElementById("endHide2").style.display = "none";

                spoint = 0;
                spointCheck(0);
            }
            else {


                var wh = aquote[spoint];
                document.getElementById("demo").innerHTML = wh;
                wordhole = wh;

                setCheck("famous");
                spointCheck(spoint);
                spoint = spoint + 1;

            }
        }


        function brands() {




            var aquote;
            aquote = new Array;
            aquote[0] = "\"Nike\"";
            aquote[1] = "\"Boeing\"";
            aquote[2] = "\"Mars\""
            aquote[3] = "\"East India Trading Company\"";
            aquote[4] = "\"Milton Bradley\"";
            aquote[5] = "\"Kraft\""
            aquote[6] = "\"Rio Tinto\"";
            aquote[7] = "\"Honda\"";
            aquote[8] = "\"Kawasaki\""
            aquote[9] = "\"Nintendo\"";
            aquote[10] = "\"NBC\"";
            aquote[11] = "\"UBER\""
            aquote[12] = "\"Akubra\"";
            aquote[13] = "\"Aldi\"";
            aquote[14] = "\"Shell\""
            aquote[15] = "\"Kentucky Fried Chicken\"";
            aquote[16] = "\"TikTok\"";
            aquote[17] = "\"Colgate\""
            aquote[18] = "\"IKEA\"";
            aquote[19] = "\"Microsoft\"";
            aquote[20] = "\"Playstation\""
            aquote[21] = "\"HSBC\"";
            aquote[22] = "\"Dell Technologies\"";
            aquote[23] = "\"BMW\""
            aquote[24] = "\"Amazon\"";
            aquote[25] = "\"Intel\"";
            aquote[26] = "\"Loreal\""
            aquote[27] = "\"Toyota\"";
            aquote[28] = "\"Vodafone\"";
            aquote[29] = "\"Chanel\""
            aquote[30] = "\"Dominos\"";
            aquote[31] = "\"Instagram\"";
            aquote[32] = "\"Starbucks\""
            aquote[33] = "\"Mercedes-Benz\"";
            aquote[34] = "\"Virgin\"";
            aquote[35] = "\"Costco\""
            aquote[36] = "\"Gucci\"";
            aquote[37] = "\"Samsung\"";
            aquote[38] = "\"Marlboro\""
            aquote[39] = "\"YouTube\"";
            aquote[40] = "\"Mastercard\"";
            aquote[41] = "\"Facebook\""
            aquote[42] = "\"Apple\"";
            aquote[43] = "\"Louis Vuitton\"";
            aquote[44] = "\"Google\""
            aquote[45] = "\"Adobe\"";
            aquote[46] = "\"IBM\"";
            aquote[47] = "\"Hasbro\""



            fLen = aquote.length;
            if (spoint == fLen) {
                document.getElementById("demo").innerHTML = "Game Over Folks!";
                document.getElementById("endHide").style.display = "none";
                document.getElementById("endHide2").style.display = "none";

                spoint = 0;
                spointCheck(0);
            }
            else {


                var wh = aquote[spoint];
                document.getElementById("demo").innerHTML = wh;
                wordhole = wh;

                setCheck("famous");
                spointCheck(spoint);
                spoint = spoint + 1;

            }
        }


        function concepts() {


            var aquote;
            aquote = new Array;
            aquote[0] = "\"Evaporation\"";
            aquote[1] = "\"Induction\"";
            aquote[2] = "\"Entropy\""
            aquote[3] = "\"Growth\"";
            aquote[4] = "\"Time\"";
            aquote[5] = "\"Future\""
            aquote[6] = "\"Hydrology\"";
            aquote[7] = "\"Trauma\"";
            aquote[8] = "\"Harmony\""
            aquote[9] = "\"Worm Holes\"";
            aquote[10] = "\"Electricity\"";
            aquote[11] = "\"Individualism\""
            aquote[12] = "\"Adaptation\"";
            aquote[13] = "\"Synchronocity\"";
            aquote[14] = "\"Temperature\""
            aquote[15] = "\"Apologetics\"";
            aquote[16] = "\"Science\"";
            aquote[17] = "\"Behaviourism\""
            aquote[18] = "\"Tabula Rasa\"";
            aquote[19] = "\"Calendar\"";
            aquote[20] = "\"Phenomenology\""
            aquote[21] = "\"Reflective Thinking\"";
            aquote[22] = "\"Reflexology\"";
            aquote[23] = "\"Pronouns\""
            aquote[24] = "\"Creationism\"";
            aquote[25] = "\"Paleo Diet\"";
            aquote[26] = "\"Clickbait\""
            aquote[27] = "\"Probability\"";
            aquote[28] = "\"Network Marketing\"";
            aquote[29] = "\"Sexology\""
            aquote[30] = "\"Memes\"";
            aquote[31] = "\"Post-Modernism\"";
            aquote[32] = "\"Agnosticism\""
            aquote[33] = "\"Democracy\"";
            aquote[34] = "\"First Principles\"";
            aquote[35] = "\"Topography\""
            aquote[36] = "\"History\"";
            aquote[37] = "\"Culture\"";
            aquote[38] = "\"Binary\""
            aquote[39] = "\"Trickle Down Economics\"";
            aquote[40] = "\"Law\"";
            aquote[41] = "\"Stoicism\""
            aquote[42] = "\"Phrenology\"";




            fLen = aquote.length;
            if (spoint == fLen) {
                document.getElementById("demo").innerHTML = "Game Over Folks!";
                document.getElementById("endHide").style.display = "none";
                document.getElementById("endHide2").style.display = "none";

                spoint = 0;
                spointCheck(0);
            }
            else {


                var wh = aquote[spoint];
                document.getElementById("demo").innerHTML = wh;
                wordhole = wh;

                setCheck("famous");
                spointCheck(spoint);
                spoint = spoint + 1;

            }
        }


        function kriskringle() {


            var aquote;
            aquote = new Array;
            aquote[0] = "\"Christmas\"";
            aquote[1] = "\"Jingle Bells\"";
            aquote[2] = "\"Mistletoe\""
            aquote[3] = "\"Ginger Bread Man\"";
            aquote[4] = "\"Turkey\"";
            aquote[5] = "\"Santa Claus\""
            aquote[6] = "\"Cookies & Milk\"";
            aquote[7] = "\"Presents\"";
            aquote[8] = "\"Baby Jesus\""
            aquote[9] = "\"Carols\"";
            aquote[10] = "\"Nativity Scene\"";
            aquote[11] = "\"Boxing Day\""
            aquote[12] = "\"Christmas Eve\"";
            aquote[13] = "\"Food\"";
            aquote[14] = "\"Family\""
            aquote[15] = "\"Stocking\"";
            aquote[16] = "\"Advent Calendar\"";
            aquote[17] = "\"12 Days of Christmas\""
            aquote[18] = "\"Festivous\"";
            aquote[19] = "\"Christmas Cheer\"";
            aquote[20] = "\"Eggnog\""
            aquote[21] = "\"Christmas Pudding\"";
            aquote[22] = "\"Mariah Carey\"";
            aquote[23] = "\"The Grinch\""
            aquote[24] = "\"Rudolf\"";
            aquote[25] = "\"Tinsel\"";
            aquote[26] = "\"Wrapping Paper\""
            aquote[27] = "\"Die Hard\"";
            aquote[28] = "\"Mary & Joseph\"";
            aquote[29] = "\"Jack Frost\""
            aquote[30] = "\"Home Alone\"";
            aquote[31] = "\"Ham\"";
            aquote[32] = "\"Children\""
            aquote[33] = "\"Elves\"";
            aquote[34] = "\"Bon Bons\"";
            aquote[35] = "\"Little Drummer Boy\""
            aquote[36] = "\"Toys\"";
            aquote[37] = "\"Party\"";
            aquote[38] = "\"Relatives\""
            aquote[39] = "\"Sport\"";
            aquote[40] = "\"Afternoon Nap\"";
            aquote[41] = "\"North Pole\""
            aquote[42] = "\"Christmas Tree\"";
            aquote[43] = "\"Secret Santa\"";



            fLen = aquote.length;
            if (spoint == fLen) {
                document.getElementById("demo").innerHTML = "Game Over Folks!";
                document.getElementById("endHide").style.display = "none";
                document.getElementById("endHide2").style.display = "none";

                spoint = 0;
                spointCheck(0);
            }
            else {


                var wh = aquote[spoint];
                document.getElementById("demo").innerHTML = wh;
                wordhole = wh;

                setCheck("famous");
                spointCheck(spoint);
                spoint = spoint + 1;

            }
        }


 