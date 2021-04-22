const btn = document.getElementById("transformAnagram");
const create = (arr) => {
    div = document.getElementById("resposta");
    span = document.createElement("span");
    span.innerText = arr + "\n";
    div.appendChild(span);
};

function alphabetize(str) {
    return str.toLowerCase().split("").sort().join("").trim();
}

const getSetsOfFiveAnagrams = (palavras) => {
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

const getSetsOfTwo = (palavras) => {
    let typedText = document.getElementById("inputAnagram").value;
    let arrayDeInput = typedText.split(" ")
    let output = [];
    for (let i = 0; i < arrayDeInput.length; i++) {
        arrayDeInput[i] = alphabetize(arrayDeInput[i]);
    }
    let obj = {};
    for (let i = 0; i < palavras.length; i++) {
        const alphabetized = alphabetize(palavras[i]);
        if (obj[alphabetized] === undefined) {
            obj[alphabetized] = [palavras[i]]
        }
        else obj[alphabetized] = [...obj[alphabetized], palavras[i]]
    }
    for (let i = 0; i < palavras.length; i++) {
        if (alphabetize(palavras[i]) === arrayDeInput[0] || alphabetize(palavras[i]) === arrayDeInput[1]) {
            output.push(palavras[i])
        }
    }
    create(JSON.stringify(output))
}

btn.addEventListener("click", (evt) => {
    getSetsOfTwo(palavras);
});