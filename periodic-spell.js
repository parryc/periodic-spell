//Parry Cadwallader
//github.com/parryc
(function (root){
	function periodicSpell(){
		return {
			elements: ["ag","al","am","ar","as","at","au","b","ba","be","bh","bi","bk","br","c",
						"ca","cd","ce","cf","cl","cm","cn","co","cr","cs","cu","db","ds","dy","er",
						"es","eu","f","fe","fl","fm","fr","ga","gd","ge","h","he","hf","hg","ho",
						"hs","i","in","ir","k","kr","la","li","lr","lu","lv","md","mg","mn","mo",
						"mt","n","na","nb","nd","ne","ni","no","np","o","os","p","pa","pb","pd",
						"pm","po","pr","pt","pu","ra","rb","re","rf","rg","rh","rn","ru","s","sb",
						"sc","se","sg","si","sm","sn","sr","ta","tb","tc","te","th","ti","tl","tm",
						"u","uuo","uup","uus","uut","v","w","xe","y","yb","zn","zr"],
			data: {"H":{"name":"Hydrogen","weight":"1.008","num":"1"},"He":{"name":"Helium","weight":"4.002602","num":"2"},"Li":{"name":"Lithium","weight":"6.94","num":"3"},"Be":{"name":"Beryllium","weight":"9.012182","num":"4"},"B":{"name":"Boron","weight":"10.81","num":"5"},"C":{"name":"Carbon","weight":"12.011","num":"6"},"N":{"name":"Nitrogen","weight":"14.007","num":"7"},"O":{"name":"Oxygen","weight":"15.999","num":"8"},"F":{"name":"Fluorine","weight":"18.9984032","num":"9"},"Ne":{"name":"Neon","weight":"20.1797","num":"10"},"Na":{"name":"Sodium","weight":"22.98976928","num":"11"},"Mg":{"name":"Magnesium","weight":"24.3050","num":"12"},"Al":{"name":"Aluminium","weight":"26.9815386","num":"13"},"Si":{"name":"Silicon","weight":"28.085","num":"14"},"P":{"name":"Phosphorus","weight":"30.973762","num":"15"},"S":{"name":"Sulfur","weight":"32.06","num":"16"},"Cl":{"name":"Chlorine","weight":"35.45","num":"17"},"Ar":{"name":"Argon","weight":"39.948","num":"18"},"K":{"name":"Potassium","weight":"39.0983","num":"19"},"Ca":{"name":"Calcium","weight":"40.078","num":"20"},"Sc":{"name":"Scandium","weight":"44.955912","num":"21"},"Ti":{"name":"Titanium","weight":"47.867","num":"22"},"V":{"name":"Vanadium","weight":"50.9415","num":"23"},"Cr":{"name":"Chromium","weight":"51.9961","num":"24"},"Mn":{"name":"Manganese","weight":"54.938045","num":"25"},"Fe":{"name":"Iron","weight":"55.845","num":"26"},"Co":{"name":"Cobalt","weight":"58.933195","num":"27"},"Ni":{"name":"Nickel","weight":"58.6934","num":"28"},"Cu":{"name":"Copper","weight":"63.546","num":"29"},"Zn":{"name":"Zinc","weight":"65.38","num":"30"},"Ga":{"name":"Gallium","weight":"69.723","num":"31"},"Ge":{"name":"Germanium","weight":"72.63","num":"32"},"As":{"name":"Arsenic","weight":"74.92160","num":"33"},"Se":{"name":"Selenium","weight":"78.96","num":"34"},"Br":{"name":"Bromine","weight":"79.904","num":"35"},"Kr":{"name":"Krypton","weight":"83.798","num":"36"},"Rb":{"name":"Rubidium","weight":"85.4678","num":"37"},"Sr":{"name":"Strontium","weight":"87.62","num":"38"},"Y":{"name":"Yttrium","weight":"88.90585","num":"39"},"Zr":{"name":"Zirconium","weight":"91.224","num":"40"},"Nb":{"name":"Niobium","weight":"92.90638","num":"41"},"Mo":{"name":"Molybdenum","weight":"95.96","num":"42"},"Tc":{"name":"Technetium","weight":"98","num":"43"},"Ru":{"name":"Ruthenium","weight":"101.07","num":"44"},"Rh":{"name":"Rhodium","weight":"102.90550","num":"45"},"Pd":{"name":"Palladium","weight":"106.42","num":"46"},"Ag":{"name":"Silver","weight":"107.8682","num":"47"},"Cd":{"name":"Cadmium","weight":"112.411","num":"48"},"In":{"name":"Indium","weight":"114.818","num":"49"},"Sn":{"name":"Tin","weight":"118.710","num":"50"},"Sb":{"name":"Antimony","weight":"121.760","num":"51"},"Te":{"name":"Tellurium","weight":"127.60","num":"52"},"I":{"name":"Iodine","weight":"126.90447","num":"53"},"Xe":{"name":"Xenon","weight":"131.293","num":"54"},"Cs":{"name":"Caesium","weight":"132.9054519","num":"55"},"Ba":{"name":"Barium","weight":"137.327","num":"56"},"La":{"name":"Lanthanum","weight":"138.90547","num":"57"},"Ce":{"name":"Cerium","weight":"140.116","num":"58"},"Pr":{"name":"Praseodymium","weight":"140.90765","num":"59"},"Nd":{"name":"Neodymium","weight":"144.242","num":"60"},"Pm":{"name":"Promethium","weight":"145","num":"61"},"Sm":{"name":"Samarium","weight":"150.36","num":"62"},"Eu":{"name":"Europium","weight":"151.964","num":"63"},"Gd":{"name":"Gadolinium","weight":"157.25","num":"64"},"Tb":{"name":"Terbium","weight":"158.92535","num":"65"},"Dy":{"name":"Dysprosium","weight":"162.500","num":"66"},"Ho":{"name":"Holmium","weight":"164.93032","num":"67"},"Er":{"name":"Erbium","weight":"167.259","num":"68"},"Tm":{"name":"Thulium","weight":"168.93421","num":"69"},"Yb":{"name":"Ytterbium","weight":"173.054","num":"70"},"Lu":{"name":"Lutetium","weight":"174.9668","num":"71"},"Hf":{"name":"Hafnium","weight":"178.49","num":"72"},"Ta":{"name":"Tantalum","weight":"180.94788","num":"73"},"W":{"name":"Tungsten","weight":"183.84","num":"74"},"Re":{"name":"Rhenium","weight":"186.207","num":"75"},"Os":{"name":"Osmium","weight":"190.23","num":"76"},"Ir":{"name":"Iridium","weight":"192.217","num":"77"},"Pt":{"name":"Platinum","weight":"195.084","num":"78"},"Au":{"name":"Gold","weight":"196.966569","num":"79"},"Hg":{"name":"Mercury","weight":"200.59","num":"80"},"Tl":{"name":"Thallium","weight":"204.38","num":"81"},"Pb":{"name":"Lead","weight":"207.2","num":"82"},"Bi":{"name":"Bismuth","weight":"208.98040","num":"83"},"Po":{"name":"Polonium","weight":"209","num":"84"},"At":{"name":"Astatine","weight":"210","num":"85"},"Rn":{"name":"Radon","weight":"222","num":"86"},"Fr":{"name":"Francium","weight":"223","num":"87"},"Ra":{"name":"Radium","weight":"223","num":"88"},"Ac":{"name":"Actinium","weight":"227","num":"89"},"Th":{"name":"Thorium","weight":"232.03806","num":"90"},"Pa":{"name":"Protactinium","weight":"231.03588","num":"91"},"U":{"name":"Uranium","weight":"238.02891","num":"92"},"Np":{"name":"Neptunium","weight":"237","num":"93"},"Pu":{"name":"Plutonium","weight":"244","num":"94"},"Am":{"name":"Americium","weight":"243","num":"95"},"Cm":{"name":"Curium","weight":"247","num":"96"},"Bk":{"name":"Berkelium","weight":"247","num":"97"},"Cf":{"name":"Californium","weight":"251","num":"98"},"Es":{"name":"Einsteinium","weight":"252","num":"99"},"Fm":{"name":"Fermium","weight":"257","num":"100"},"Md":{"name":"Mendelevium","weight":"258","num":"101"},"No":{"name":"Nobelium","weight":"259","num":"102"},"Lr":{"name":"Lawrencium","weight":"262","num":"103"},"Rf":{"name":"Rutherfordium","weight":"267","num":"104"},"Db":{"name":"Dubnium","weight":"268","num":"105"},"Sg":{"name":"Seaborgium","weight":"269","num":"106"},"Bh":{"name":"Bohrium","weight":"270","num":"107"},"Hs":{"name":"Hassium","weight":"269","num":"108"},"Mt":{"name":"Meitnerium","weight":"278","num":"109"},"Ds":{"name":"Darmstadtium","weight":"281","num":"110"},"Rg":{"name":"Roentgenium","weight":"281","num":"111"},"Cn":{"name":"Copernicium","weight":"285","num":"112"},"Uut":{"name":"Ununtrium","weight":"286","num":"113"},"Fl":{"name":"Flerovium","weight":"289","num":"114"},"Uup":{"name":"Ununpentium","weight":"288","num":"115"},"Lv":{"name":"Livermorium","weight":"293","num":"116"},"Uus":{"name":"Ununseptium","weight":"294","num":"117"},"Uuo":{"name":"Ununoctium","weight":"294","num":"118"}},
			check: function(input){
				var clean = input.replace(/\s+/g, '').toLowerCase(),
					spell = this.branch(clean.substring(0,1),clean.substring(1), []) || this.branch(clean.substring(0,2),clean.substring(2), []),
					output = [];

				if(spell) {
					for(var i = 0; i < spell.length; i++){
						output.push(this.lookup(spell[i]));
					}
				}
				return output;
			},
			branch: function(start, remainder, list){
				if(this.elements.indexOf(start) === -1)
					return false;

				//list.push(this.lookup(start));
				list.push(start);
				if(remainder === "") {
					return list;
				} else
					//Prefer one letter answers
					return this.branch(remainder.substring(0,1),remainder.substring(1),list.slice(0)) ||
							this.branch(remainder.substring(0,2),remainder.substring(2),list.slice(0));
							
			},
			capitalize: function(s) {
				return s.charAt(0).toUpperCase() + s.slice(1);
			},
			lookup: function(sym) {
				var standard = this.capitalize(sym),
					data = this.data[standard];
				data.sym = standard;
				return data;
			}
		};
	}

	//export to window
	root.periodicSpell = periodicSpell();
})(this);