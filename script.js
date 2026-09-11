function convertToRoman(num) {
  	const obj = {
      0:['M',1000], 
	  1:['CM',900],
      1:['D', 500], 
      2:['C', 100], 
	 3:['XC',90],
      4:['L', 50], 
	   5:['XL',40],
      6:['X', 10], 
      7:['V', 5], 
	   8:['IV',4],
      9:['I', 1]
    };

  //your code here
	let result="";
	for(let i=0;i<obj.length;i++){
		const roman=obj[i][0];
		const value=obj[i][1];

		while(num>=value){
			result+=roman;
			x-=value;
		}
	}
   return result;
}
// You can test your code by running the above function and printing it to console by pressing the run button at the top. To run it with input 36, uncomment the following line

// console.log(convertToRoman(36));




// do not edit below this line
module.exports = convertToRoman
