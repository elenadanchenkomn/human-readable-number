module.exports = function toReadable (number) {
  const units =  ['zero','one','two','three','four', 'five','six','seven','eight','nine' , 'ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen'];
  const dozens =  ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  const hundred = 'hundred';
  let numbToStr = number.toString();
  let numbLength = numbToStr.Length;
  
  let str = ' ';
  let newStr = str.split('');
 if (number < 20) {
    str = units[number];

 }
      return str; 
      

  if(numbLength === 3) {
  str = units[parseInt(numbToStr.charAt(0))] + hundred;
  str += dozens[parseInt(numbToStr.charAt(1))];
  str += units[parseInt(numbToStr.charAt(2))];
} else {
str += units[parseInt(numbToStr.charAt(1))];
str += dozens[parseInt(numbToStr.charAt(0))]; }

 return newStr

    
  
}
