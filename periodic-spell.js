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
			list: [],
			check: function(input){
				var clean = input.replace(/\s+/g, '').toLowerCase();
				return this.branch(clean.substring(0,1),clean.substring(1), []) || this.branch(clean.substring(0,2),clean.substring(2), []);
			},
			branch: function(start, remainder, list){
				if(this.elements.indexOf(start) === -1)
					return false;
				
				list.push(start);
				if(remainder === "") {
					return list;
				} else
					return this.branch(remainder.substring(0,1),remainder.substring(1),list) ||
							this.branch(remainder.substring(0,2),remainder.substring(2),list);
			}
		};
	}

	//export to window
	root.periodicSpell = periodicSpell();
})(this);