module.exports = function toReadable (number) {
  const units =  ['one','two','three','four', 'five','six','seven','eight','nine' , 'ten','eleven','twelve','thirteen', 'fourteen','fifteen','sixteen', 'seventeen','eighteen','nineteen','twenty'];
  const dozens =  ['twenty','thirty','forty','fifty', 'sixty','seventy','eighty','ninety'];
  const hundred = ' hundred';
  
  let str = '';
  
 
 if (number <= 20) {
    str = units[number];
    return str; 
 } else {

 if (20 < number < 100) {
    number = number.toString();
    str = dozens[number.charAt(0)];
    str += units[number.charAt(1)];
    return str;
 }
   

 } 

}
