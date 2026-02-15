# NaC Language VSCode Extension

VSCode için NaC dil desteği eklentisi.

## Özellikler

- ✅ Syntax highlighting (sözdizimi vurgulama)
- ✅ Keyword highlighting (fn, rn, if, for, while, http, vb.)
- ✅ Built-in fonksiyon vurgulama
- ✅ Yorum satırları (//)
- ✅ String ve sayı vurgulama
- ✅ Otomatik parantez kapama
- ✅ Code folding desteği

## Kullanım

1. `.nac` uzantılı bir dosya açın
2. Syntax highlighting otomatik olarak aktif olacak
3. Sağ alt köşede "NaC" dili seçili olmalı

## Desteklenen Sözdizimi

### Keywords (Anahtar Kelimeler)
```nac
fn, rn, if, for, while, in, out, time, break, continue, array, http
```

### Built-in Functions
```nac
sqrt, pow, sin, cos, tan, abs, floor, ceil, round, log, exp
length, upper, lower, push, pop, trim, replace, substr, indexOf
first, last, reverse, slice, join, read, write, append
```

### Operators
```nac
+, -, *, /, %, ==, !=, <, >, <=, >=, &&, ||, !, ++, --
```

## Örnek

```nac
// HTTP GET isteği
http("GET", "https://api.ipify.org/?format=json");

// While döngüsü
x = 0;
while(x < 5) {
    out(x);
    x++;
};

// Fonksiyon tanımlama
fn fibonacci(n) {
    if(n <= 1) {
        rn n;
    };
    rn fibonacci(n-1) + fibonacci(n-2);
};
```

## Sorun Giderme

**Syntax highlighting çalışmıyor:**
- VSCode'u tamamen kapatıp yeniden açın
- Dosya uzantısının `.nac` olduğundan emin olun
- Sağ alt köşeden manuel olarak "NaC" dilini seçin

**Extension görünmüyor:**
- Extensions klasörünün doğru konumda olduğundan emin olun
- `package.json` dosyasının geçerli JSON formatında olduğunu kontrol edin

## Lisans

MIT