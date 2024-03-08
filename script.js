
function hitung() {
    var angka1 = parseInt(document.getElementById('angka1').value);
    var angka2 = parseInt(document.getElementById('angka2').value);
    
    var hasil = angka1 * angka2;
    
    document.getElementById('hasil').innerText = 'Hasil : '+ hasil;
}