function hitung() {
    // Mendapatkan nilai panjang sisi dari input
    var panjangSisi = document.getElementById('sisi').value;
  
    // Menghitung luas persegi (sisi * sisi)
    var luas = panjangSisi * panjangSisi;
  
    // Menghitung keliling persegi (4 * sisi)
    var keliling = 4 * panjangSisi;
  
    // Menampilkan hasil luas dan keliling
    document.getElementById('luas').innerHTML = 'Luas Persegi: ' + luas;
    document.getElementById('keliling').innerHTML = 'Keliling Persegi: ' + keliling;
  }
  
  function reset() {
    // Mengatur nilai input dan hasil ke nilai awal
    document.getElementById('sisi').value = '';
    document.getElementById('luas').innerHTML = 'Luas Persegi: -';
    document.getElementById('keliling').innerHTML = 'Keliling Persegi: -';
  }  