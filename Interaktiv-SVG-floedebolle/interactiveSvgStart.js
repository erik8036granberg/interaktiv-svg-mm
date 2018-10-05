document.addEventListener("DOMContentLoaded", function () {
	runProgram();
});

async function runProgram() {

	//	funktionsvariabler

	//	Det valgte
	let selected;
	//	Det valgtes ID
	let selectedID;
	//	Det valgtes farves
	let basecolor;
	//	Det aktive prik
	let active;
	//	infoboks vist
	let infoboks;

	// 1. Load svg map
	//------------------------------------------------------------------------------------

	//	indhent svg
	let mySvg = await fetch("Kunstpakhuset3.svg");
	//	console.log(mySvg);

	//	Tolk indhold som text
	let svg = await mySvg.text();
	//	console.log(svg);

	//	vis i DOM (modtager-div) som HTML
	document.querySelector("#graphic").innerHTML = svg;


	// 2. find infobokse og skjul dem
	//------------------------------------------------------------------------------

	//	lav bokse til variabler vis deres ID - #grafik-kasse + #lag
	let info_1 = document.querySelector("#graphic #info-1");
	let info_2 = document.querySelector("#graphic #info-2");
	let info_3 = document.querySelector("#graphic #info-3");
	let info_4 = document.querySelector("#graphic #info-4");

	//	Skjul bokse med visibility
	info_1.style.visibility = "hidden";
	info_2.style.visibility = "hidden";
	info_3.style.visibility = "hidden";
	info_4.style.visibility = "hidden";


	// 3. Skift farve ved klik, og vis tekst
	//-----------------------------------------------------------------------

	//	laver eventlistner og går funktionen "clicked" med hvad der er klikket på
	document.querySelector("#graphic #points").addEventListener("click",
		function (event) {
			clicked(event);
		})

	//function clicked
	//--------------------------------------------------------------------

	function clicked(klikketObjekt) {


		//		hvis der er blevet klikke før, så skal boksen være skjult
		if (infoboks != undefined) {
			infoboks.style.visibility = "hidden";
		}


		//Log det klikkede objekt sendt til funktionen
		//		console.log(klikketObjekt.target);


		// a. find det klikkede element - sæt til variablen selected
		//----------------------------------------------
		selected = klikketObjekt.target;

		// b. find det klikkede elementets ID - sæt til variablen selectedID
		//---------------------------------------------
		selectedID = selected.getAttribute("id");
		console.log(selectedID);



		// c. find  det klikkede elements fillfarve
		//---------------------------------------------
		basecolor = selected.getAttribute("fill");
		console.log(basecolor);


		// d. vis infobokse
		//--------------------------------------------
		if (active != undefined) {
			active.setAttribute("fill", basecolor);
		}


		// 4. hvis der tidligere har været klikket skal det forige element skifte farve til original
		//------------------------------------------------------------------------------------
		//sdfsdg


		if (selectedID === "punkt1") {
			info_1.style.visibility = "visible";

			//			definerer at der er blevet klikket
			infoboks = info_1;
		}
		if (selectedID === "punkt2") {
			info_2.style.visibility = "visible";
			//			definerer at der er blevet klikket
			infoboks = info_2;
		}
		if (selectedID === "punkt3") {
			info_3.style.visibility = "visible";
			//			definerer at der er blevet klikket
			infoboks = info_3;
		}
		if (selectedID === "punkt4") {
			info_4.style.visibility = "visible";
			//			definerer at der er blevet klikket
			infoboks = info_4;
		}

		//gør det klikkede til det aktive
		//-------------------------------------------------------------------------

		active = selected;



		//skift farve på det valgte
		//-------------------------------------------------------------------------

		//		hvis er farven er rød, skal den ved klik skilfte til blå
		if (basecolor === "#b62300") {
			document.querySelector("#" + selectedID).setAttribute("fill", "#123456");
		}


		//reset farve og skjul tekst hvis valgt elementet allerede er aktivt
		//--------------------------------------------------------------------------
		else {

			document.querySelector("#" + selectedID).setAttribute("fill", "#b62300");
			infoboks.style.visibility = "hidden";
		}
	}
};
