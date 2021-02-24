// Calculation of strips for Circuit Breaker 1.2 without Circuit Transformer

var t; // Thickness of copper (mm)
var amperage; // Amperage of Circuit Breaker (A)
const spacer = 28; // High of spacer (mm)
const shs = 61; // Short shelf (mm)
const shb = 71; // Big shelf (mm)
var h; // Size from CB to Busbar (mm)
var bb; // Size from CB to Back (mm)
var corr; // Correction of binding on the machine
const bs1 = 199; // Size from back to stripe S1
var delta; // Correction for binding depends of thickness
var l1s1; // Lenght of stripe L1s1
var l1s2; // Lenght of stripe L1s2
var l2s1; // Lenght of stripe L2s1
var l2s2; // Lenght of stripe L2s2
var l3s1; // Lenght of stripe L3s1
var l3s2; // Lenght of stripe L3s2
var ns1; // Lenght of stripe Ns1
var ns2; // Lenght of stripe Ns2

var S1L;
var S1H1;
var S2L;
var S2H1;
var S1H;
var S2H;
var tab01, tab02, tab03, tab04, tab05, tab06, tab07, tab08, tab09, tab10, tab11, tab12;

function checkthinkness() {
	if (t == 10) {
		corr = 8.5;
	}
	else if  (t == 12) {
		corr = 9.0;
	}
	else {
		corr = "Check thinkness!"
	}
	
	document.getElementById("corr").innerHTML = corr;
}

function copperlength() {
	
	bb = Number(document.getElementById("bb").value);
	t  = Number(document.getElementById("t").value);
	h  = Number(document.getElementById("h").value);
	amperage = Number(document.getElementById("amperage").value);

	document.getElementById("rest").innerHTML = t;
	document.getElementById("resh").innerHTML = h;
	document.getElementById("resbb").innerHTML = bb;
	document.getElementById("resamperage").innerHTML = amperage;

	checkthinkness();

	S1L = bb + 25 - bs1;
	S2L = S1L - (t + 10);
	S2H1 = h - spacer;
	S1H = S2H1 + 15 + t;
	S2H = S2H1 - t;
	S1H1 = S1H - t;

	l3s1 = S1L + S1H1 + shs - (2 * 17) + 1;
	l3s2 = S2L + S2H1 + shb - (2 * 17);
	l2s1 = S1L + S1H + shb - (2 * 17);
	l2s2 = S2L + S2H + shs - (2 * 17) + 1;
	l1s1 = l2s1 + 72;
	l1s2 = l2s2 + 72;
	ns1 = l3s1 + 72;
	ns2 = l3s2 + 72;

	document.getElementById("resl3s1").innerHTML = l3s1;
	document.getElementById("resl3s2").innerHTML = l3s2;
	document.getElementById("resl2s1").innerHTML = l2s1;
	document.getElementById("resl2s2").innerHTML = l2s2;
	document.getElementById("resl1s1").innerHTML = l1s1;
	document.getElementById("resl1s2").innerHTML = l1s2;
	document.getElementById("resns1").innerHTML = ns1;
	document.getElementById("resns2").innerHTML = ns2;
	console.log(t, bb, bs1, S1L, S1H1, shs, l3s1, l3s2, l2s1, l2s2, l1s1, l1s2, ns1, ns2, corr);
}

function calcprogram() {
	if ( t == 10 ) {
		delta = 8;
	}

	else {
		delta = 10;
	}

	// Bending L3S1 and NS1
	tab01 = S1L - delta;
	tab02 = S1H1 - 100;
	tab03 = S1H1 - 157;
	tab04 = S1H1 - delta;
	document.getElementById("tab01").innerHTML = tab01;
	document.getElementById("tab02").innerHTML = tab02;
	document.getElementById("tab03").innerHTML = tab03;
	document.getElementById("tab04").innerHTML = tab04;
	// Bending L3S2 and NS2
	tab05 = S2L - delta;
	tab06 = S2H1 - delta;
	document.getElementById("tab05").innerHTML = tab05;
	document.getElementById("tab06").innerHTML = tab06;
	// Bending L2S1 and L1S1
	tab07 = S1L - delta;
	tab08 = S1H - delta;
	document.getElementById("tab07").innerHTML = tab07;
	document.getElementById("tab08").innerHTML = tab08;
	// Bending L2S2 and L1S2
	tab09 = S2L - delta;
	tab10 = S2H - 100;
	tab11 = S2H - 157;
	tab12 = S2H - delta;
	document.getElementById("tab09").innerHTML = tab09;
	document.getElementById("tab10").innerHTML = tab10;
	document.getElementById("tab11").innerHTML = tab11;
	document.getElementById("tab12").innerHTML = tab12;
}
