// Constants for calculations

const extBar = 71; // external part for busbar (mm)
const intBar = 61; // internal part for busbar  (mm)
const termH = 15;  // high of terminal of breaker E 1.2 (mm)
const termL = 25;  // connection place of strip and terminal (mm)
const spacer = 28;  // High of spacer (mm)
const amperage = [800, 1000, 1250, 1600]; // List of amperage of used breakers (A)

// Variables for calculations

function StripSize() {
	
	let busbar = Number(document.getElementById("busbar").value); // Number of set of busbar
	let thinkness  = Number(document.getElementById("thinkness").value); // Think of copper
	let distBackTerm  = Number(document.getElementById("distBackTerm").value); // Measured distance from back to the terminal
	let distBusbarTerm = Number(document.getElementById("distBusbarTerm").value); // Measured distance from busbar to the terminal
	let backS1;

	if (busbar == 1) {
		backS1 = 199;
	}
	else if (busbar == 2) {
		backS1 = 415;
	}
	else {
		backS1 = "Wrong data. Number of sets may be 1 or 2 only"
	}

	let stripeS1L12High = distBusbarTerm + termH + thinkness - spacer;
	let stripeS2L12High = distBusbarTerm - spacer - thinkness;
	let stripeS1L3NHigh = distBusbarTerm + termH + thinkness - spacer - thinkness;
	let stripeS2L3NHigh = distBusbarTerm - spacer;

	let stripe1br = distBackTerm + termL - backS1; // Size of external horizontal part
	let stripe2br = stripe1br -20; // Size of internal horizontal part

	// Calculate stripe S1 legth for phase L3
	let s1L3 = stripe1br + stripeS1L3NHigh + intBar + 1 - 40 - 17;

	// Calculate stripe legth S2 for phase L3
	let s2L3 = stripe2br + stripeS2L3NHigh + extBar - 40 - 17;

	// Calculate stripe S1 legth for phase N
	let s1N = s1L3 + 72;

	// Calculate stripe S2 legth for phase N
	let s2N = s2L3 + 72;

	// Calculate stripe S1 legth for phase L2
	let s1L2 = stripe1br + stripeS1L12High + extBar - 40 - 17;

	// Calculate stripe legth S2 for phase L2
	let s2L2 = stripe2br + stripeS2L12High + intBar +1 - 40 - 17;

	// Calculate stripe S1 legth for phase L1
	let s1L1 = s1L2 + 72;

	// Calculate stripe S2 legth for phase L1
	let s2L1 = s2L2 + 72;

	// Bending programm
	let s1L12Bend1 = (stripe1br - 100) + 48 + 60;
	let s1L12Bend2 = s1L12Bend1 - 60;
	let s1L12Bend3 = stripeS1L12High - 8 + 10;
	document.getElementById("s1L12Bend1").innerHTML = s1L12Bend1;
	document.getElementById("s1L12Bend2").innerHTML = s1L12Bend2;
	document.getElementById("s1L12Bend3").innerHTML = s1L12Bend3;

	let s2L12Bend1 = (stripe2br - 100) + 48 + 60;
	let s2L12Bend2 = s2L12Bend1 - 60;
	let s2L12Bend3 = distBusbarTerm - thinkness - spacer - 110 + 10;
	let s2L12Bend4 = distBusbarTerm - thinkness - spacer - 110 - 57;
	let s2L12Bend5 = distBusbarTerm - thinkness - spacer - 8 + 10;
	document.getElementById("s2L12Bend1").innerHTML = s2L12Bend1;
	document.getElementById("s2L12Bend2").innerHTML = s2L12Bend2;
	document.getElementById("s2L12Bend3").innerHTML = s2L12Bend3;
	document.getElementById("s2L12Bend4").innerHTML = s2L12Bend4;
	document.getElementById("s2L12Bend5").innerHTML = s2L12Bend5;

	let s1L3NBend1 = (stripe1br - 100) + 48 + 60;
	let s1L3NBend2 = s1L3NBend1 - 60;
	let s1L3NBend3 = distBusbarTerm - thinkness - spacer - 110;
	let s1L3NBend4 = distBusbarTerm - thinkness - spacer - 110 - 57 +10;
	let s1L3NBend5 = distBusbarTerm - thinkness - spacer - 8;
	document.getElementById("s1L3NBend1").innerHTML = s1L3NBend1;
	document.getElementById("s1L3NBend2").innerHTML = s1L3NBend2;
	document.getElementById("s1L3NBend3").innerHTML = s1L3NBend3;
	document.getElementById("s1L3NBend4").innerHTML = s1L3NBend4;
	document.getElementById("s1L3NBend5").innerHTML = s1L3NBend5;

	let s2L3NBend1 = (stripe2br - 100) + 48 + 60;
	let s2L3NBend2 = s2L3NBend1 - 60;
	let s2L3NBend3 = stripeS2L3NHigh - 8;
	document.getElementById("s2L3NBend1").innerHTML = s2L3NBend1;
	document.getElementById("s2L3NBend2").innerHTML = s2L3NBend2;
	document.getElementById("s2L3NBend3").innerHTML = s2L3NBend3;

	// Output
	document.getElementById("stripe_1_L3").innerHTML = s1L3;
	document.getElementById("stripe_2_L3").innerHTML = s2L3;
	document.getElementById("stripe_1_L2").innerHTML = s1L2;
	document.getElementById("stripe_2_L2").innerHTML = s2L2;
	document.getElementById("stripe_1_L1").innerHTML = s1L1;
	document.getElementById("stripe_2_L1").innerHTML = s2L1;
	document.getElementById("stripe_1_N").innerHTML = s1N;
	document.getElementById("stripe_2_N").innerHTML = s2N;

	console.log(typeof s1L1, s1L1, typeof s2L1, s2L1);
}