function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }
function code() {
    output = ""
    input = document.getElementById('container').value;
    for (var i = 0; i < input.length; i++) {
        if(input.charAt(i)=="a"){
            output = output+dec2bin(1)
        }
        if(input.charAt(i)=="a"){
            output = output+dec2bin(1)
        }
      }
    console.log('output: '+output)
}