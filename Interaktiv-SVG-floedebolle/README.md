# infografik
1. Fork og clon repo
2. følg videotutorials og gør "kortet" interaktivt

Link til tutorials:
http://mabe-kea.dk/category/svg/

Note:
Man kan bruge en async function og fetch til at loade en svg fil:
     

            async function loadSvg() {
            // 1. Load svg
            //------------------------------------------------------------	
            let mySvg = await fetch("layers.svg");
            let svg = await mySvg.text();

            document.querySelector("#graphic").innerHTML = svg;
             }
       
         

