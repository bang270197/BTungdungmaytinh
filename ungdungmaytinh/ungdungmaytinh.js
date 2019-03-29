function cong(){
   let sothunhat=parseFloat(document.getElementById("sothunhat").value);
   let sothuhai=parseFloat(document.getElementById('sothuhai').value);
   let ketq=parseFloat(sothunhat+sothuhai);

   document.getElementById('result').innerHTML='result '+ketq;
}
function tru(){
    let sothunhat=parseFloat(document.getElementById('sothunhat').value);
    let sothuhai=parseFloat(document.getElementById('sothuhai').value);
    let ketq=parseFloat(sothunhat-sothuhai);
    document.getElementById('result').innerHTML='result '+ketq;
}
function nhan(){
    let sothunhat=parseFloat(document.getElementById('sothunhat').value);
    let sothuhai=parseFloat(document.getElementById('sothuhai').value);
    let ketq=parseFloat(sothunhat*sothuhai);
    document.getElementById('result').innerHTML='result '+ketq;
}
function chia(){
    let sothunhat=parseFloat(document.getElementById('sothunhat').value);
    let sothuhai=parseFloat(document.getElementById('sothuhai').value);
    let ketq=parseFloat(sothunhat/sothuhai);
    document.getElementById('result').innerHTML='result '+ketq;
}