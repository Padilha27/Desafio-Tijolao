const texto = "333 666 666 3 555 666 888 33 777 7777";
function tradutor(texto) {
    const textoarray = texto.split(" ");
    let mensagem = "";
    for (var i = 0; i < textoarray.length; i++) {
        switch (textoarray[i]) {
            case "2":
                mensagem += "a";
                break;
            case "22":
                mensagem += "b";
                break;
            case "222":
                mensagem += "c";
                break;
            case "3":
                mensagem += "d";
                break;
            case "33":
                mensagem += "e";
                break;
            case "333":
                mensagem += "f";
                break;
            case "4":
                mensagem += "g";
                break;
            case "44":
                mensagem += "h";
                break;
            case "444":
                mensagem += "i";
                break;
            case "5":
                mensagem += "j";
                break;
            case "55":
                mensagem += "k";
                break;
            case "555":
                mensagem += "l";
                break;
            case "6":
                mensagem += "m";
                break;
            case "66":
                mensagem += "n";
                break;
            case "666":
                mensagem += "o";
                break;
            case "7":
                mensagem += "p";
                break;
            case "77":
                mensagem += "q";
                break;
            case "777":
                mensagem += "r";
                break;
            case "7777":
                mensagem += "s";
                break;
            case "8":
                mensagem += "t";
                break;
            case "88":
                mensagem += "u";
                break;
            case "888":
                mensagem += "v";
                break;
            case "9":
                mensagem += "w";
                break;
            case "99":
                mensagem += "x";
                break;
            case "999":
                mensagem += "y";
                break;
            case "9999":
                mensagem += "z";
                break;

            default:
                mensagem += "[]"
                break;
        }
    }

    return mensagem;
}

console.log(tradutor(texto));

