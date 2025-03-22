console.log("helloalsj")
console.log(document)


console.log("hellow" + document.getElementsByClassName("font-medium items-center whitespace-nowrap focus:outline-none inline-flex relative select-none rounded-none px-3 py-1.5 bg-transparent dark:bg-transparent text-green-60 dark:text-green-60")[0])

document.getElementsByClassName("font-medium items-center whitespace-nowrap focus:outline-none inline-flex relative select-none rounded-none px-3 py-1.5 bg-transparent dark:bg-transparent text-green-60 dark:text-green-60")[0].addEventListener("click", () => {
    console.log("Submit button Clicked")
})


const button = document.getElementsByClassName("font-medium items-center whitespace-nowrap focus:outline-none inline-flex relative select-none rounded-none px-3 py-1.5 bg-transparent dark:bg-transparent text-green-60 dark:text-green-60")[0];

console.log("Button found:", button);
console.dir(button);  // Logs the element's properties in a structured way
