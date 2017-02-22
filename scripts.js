function makeray (){
	var set1 = [];
	var set2 = [];
	var sum1 = 0;
	var sum2 = 0;
	mmr_stuff = document.getElementsByClassName('mmr');
	name_stuff = document.getElementsByClassName('name');
	var descArray = [].map.call(mmr_stuff, function(input) {return input.value;});
	var nameArray = [].map.call(name_stuff, function(input) {return input.value;});
	console.log(nameArray);
	console.log(descArray);
	var Data = { 
	};
	for (i = 0; i <= 10; i++){
		Data[descArray[i]] = nameArray[i];
	}
	console.log(Data);
	descArray = descArray.map(Number).sort(function(a, b){return b-a});
	calc();
	
	
	function calc(){

  	var sum1 = 0
  	var sum2 = 0
  	var set1 = []
  	var set2 = []

  	sum1 += descArray[0];
  	sum2 += descArray[1];
  	set1.push(descArray[0]);
  	set2.push(descArray[1]);
  	descArray.splice(0,2);
  
  	for(var i = 0; i < descArray.length-2; i+= 2){
      if(sum1 + descArray[i] > sum2 + descArray[i]){
        sum2 += descArray[i];
        sum1 += descArray[i+1];
        set1.push(descArray[i+1]);
        set2.push(descArray[i]);
      }
      if(sum1 + descArray[i] < sum2 + descArray[i]){
        sum1 += descArray[i];
        sum2 += descArray[i+1];
        set1.push(descArray[i]);
        set2.push(descArray[i+1]);
      }
      else{
				sum1 += descArray[i];
        sum2 += descArray[i+1];
        set1.push(descArray[i]);
        set2.push(descArray[i+1]);
      }
  }
		for (i = 0; i <= 5; i++){
			console.log(Data[set1[i]]);
			console.log(set1[i]);
		}
	}
}