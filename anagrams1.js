const btn = document.getElementById("transformAnagram");
const create = (arr) => {
    div = document.getElementById("resposta");
    span = document.createElement("span");
    span.innerText = arr + "\n";
    div.appendChild(span);
};

// const getAnagramsOf = (input) => {
//     let typedText = document.getElementById("inputAnagram").value;
//     typedText = alphabetize(typedText);
//     filtradas = palavras.filter((a) => a.length === typedText.length);
//     let output = [];
//     for (let i = 0; i < filtradas.length; i++) {
//         if (alphabetize(filtradas[i]) === typedText) {
//             output.push(filtradas[i]);
//         }
//     }
//     create(JSON.stringify(output));
// };

function alphabetize(str) {
    return str.toLowerCase().split("").sort().join("").trim();
}

const getSetsOfFiveAnagrams = (palavras) => {
    // let typedText = document.getElementById("inputAnagram").value;
    // typedText = alphabetize(typedText);
    //let newPalavras = palavras.filter(value => value.length === typedText.length);
    let obj = {};
    for (let i = 0; i < palavras.length; i++) {
        const alphabetized = alphabetize(palavras[i]);
        if (obj[alphabetized] === undefined) {
            obj[alphabetized] = [palavras[i]]
        }
        else obj[alphabetized] = [...obj[alphabetized], palavras[i]]
    }
    let output = []
    for (array in obj) {
        if (obj[array].length >= 5) {
            output.push(obj[array])
        }
    }
    create(JSON.stringify(output))
}
getSetsOfFiveAnagrams(palavras)

btn.addEventListener("click", getSetsOfFiveAnagrams);