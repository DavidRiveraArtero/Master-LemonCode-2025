# ZZCrypt

```javascript
// Descifra el siguiente secreto:
var secret =
  "': rg!qg yq,urae: ghsrf wuran shrerg jq,u'qf ra r' ,qaq' er g'q,o rg,fuwurae: m!hfua( t'usqfuq ,:apu(:m xv";

// Sabiendo que el alfabeto original ha sufrido la siguiente transformación:
var plain = "abcdefghijklmnopqrstuvwxyz:()!¡,'";
var cipher = "qw,ert(yuio'pa:sdfg!hjklz¡xcv)bnm";

function decrypt(secret) {
  // Implementation here.
}

// MI SOLUCION
function decrypt(secret) {
  resolveSecret = "";
  for (const char of secret) {
    resolveSecret += decryptLetter(char);
  }
  return resolveSecret;
  // return secret.split("").map(decryptLetter).join(""); -> Solucion Profe
}

function decryptLetter(char) {
  for (var x = 0; x < cipher.length; x++) {
    if (cipher[x] === char) {
      return plain[x];
    }
  }
  return " ";
  // return letter !== " " ? plain[cipher.indexOf(letter)]: " "; -> Solucion Profe
}

console.log(decrypt(secret));
```

# About Basefactor + Lemoncode

We are an innovating team of Javascript experts, passionate about turning your ideas into robust products.

[Basefactor, consultancy by Lemoncode](http://www.basefactor.com) provides consultancy and coaching services.

[Lemoncode](http://lemoncode.net/services/en/#en-home) provides training services.

For the LATAM/Spanish audience we are running an Online Front End Master degree, more info: http://lemoncode.net/master-frontend
