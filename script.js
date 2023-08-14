let upper_case_button = document.getElementById("upper-case");
let lower_case_button = document.getElementById("lower-case");
let proper_case_button = document.getElementById("proper-case");
let sentence_case_button = document.getElementById("sentence-case");
let save_text_file_button = document.getElementById("save-text-file");

let textArea = document.querySelector("textarea");

function firstLetterToUpper(text) {
    return text[0].toUpperCase() + text.substring(1).toLowerCase();
}

upper_case_button.addEventListener("click", () =>
    textArea.value = textArea.value.toUpperCase());

lower_case_button.addEventListener("click", () =>
    textArea.value = textArea.value.toLowerCase());

proper_case_button.addEventListener("click", () =>
    textArea.value = textArea.value.split(/\s+/).map(firstLetterToUpper).join(" "));
sentence_case_button.addEventListener("click", () =>
    textArea.value = textArea.value.split(/\.\s+/).map(firstLetterToUpper).join(". "));

function download(filename, text) {
    let element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

save_text_file_button.addEventListener("click", () => {
    download("text.txt", textArea.value);
});
