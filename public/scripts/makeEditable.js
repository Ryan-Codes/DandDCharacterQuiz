function makeEditable(element)
{
    // Create an input field
    var inputField = document.createElement("input");
    inputField.type = "text";
    inputField.value = element.innerText.trim();

    // Replace the paragraph with the input field
    element.innerHTML = "";
    element.appendChild(inputField);

    // Focus on the input field
    inputField.focus();

    // Handle input field blur event
    inputField.addEventListener("blur", () => {
        // Replace the input field with a paragraph
        var paragraph = document.createElement("p");
        paragraph.innerText = inputField.value;
        element.innerHTML = "";
        element.appendChild(paragraph);
    });
}