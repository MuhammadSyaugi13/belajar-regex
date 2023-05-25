//Karakter Pemilihan (Alternasi).
//simbol: |

// contoh untuk mengambil huruf i & s

console.log('Alternasi - |\n\n')

let text = "Visit W3Schools";
let pattern = /i|s/g;

let result = text.match(pattern); //['i', 'i']
console.log(result)

// contoh untuk mengambil nama ogi & andi

text = "ogi pergi ke pasar ditemani dengan andi, kemudian ogi membeli sepatu dan andi membeli rumah";
pattern = /ogi|andi/g;

result = text.match(pattern); // ['ogi', 'andi', 'ogi', 'andi']
console.log(result)


//Karakter Pengelompokan.
//simbol: ()

// contoh untuk mengambil huruf i & s

console.log('\n\n Pengelompokan - |\n\n')

text = "
	
";
pattern = /ogi|andi/g;

result = text.match(pattern); // ['ogi', 'andi', 'ogi', 'andi']
console.log(result)