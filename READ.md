# Word Wizard
#### Video Demo:  <URL https://www.youtube.com/watch?v=MN5KzO-uiF4>
#### Description:
"A fun and educational Chrome extension designed for children! With Word Wizard, kids can easily look up the definition of any word they come across online. Simply enter the word into the prompt and the extension will open a new tab with the definition. It's a great way to expand vocabulary and encourage a love for learning!"

The folder contains:
    1.manifest.json:
        The manifest.json file is a configuration file that provides information about the Chrome extension, such as its name, version, description, and permissions. It also specifies the extension's icons, browser action (e.g. what happens when the user clicks the extension icon), and any external resources that it needs to access (e.g. a specific website or API). This file is essential for building and publishing a Chrome extension and should be included in the root directory of the project.
    2.popup.html:
        popup.html is the HTML file for the Word Wizard Chrome extension's popup window. This window appears when the user clicks on the extension icon in the browser toolbar. The popup includes a title, instructions, a text input field for the user to enter a word, a button to search for the definition of the word, and a space to display the result. It also includes a disclaimer at the bottom for added fun. The styling for the popup is defined in the popup.css file, and the functionality is handled by the popup.js file.
    3.popup.css:
        The popup.css file contains the styling rules for the Chrome extension's popup window. It sets the font family, font size, padding, and width for the body element. The h1 element is styled to have a bold font weight and a margin-bottom of 10 pixels. The p elements have a margin-bottom of 10 pixels. The input element of type "text" has a width of 90%, padding of 10 pixels, and margin-bottom of 10 pixels. The button element has a green background color, white text color, and a padding of 10 pixels. When the user hovers over the button, its padding increases to 12 pixels and the font size increases to 16 pixels. The #required element is styled to have red text color and float to the right. This element is used to display a required field validation message when the user tries to submit an empty form.
    4.popup.js:
        This is the JavaScript code for the popup window of the "Word Wizard" Chrome extension. The code uses an event listener to wait for the DOM to be fully loaded before running the function. When the "Cast Spell" button is clicked, the function gets the value of the word entered in the input field and checks if it is empty or just whitespace. If it is, an error message is displayed. If the input is valid, the code creates a URL string that searches for the word's definition on Google, and then opens the search results in a new tab using the Chrome API.

        This code allows the user to easily look up the definition of any word they come across online, simply by typing the word into the popup and clicking the "Cast Spell" button. It also includes basic input validation to ensure that the user does not submit an empty search query.

    5.images:
        This folder contains all the icons with different sizes for the extension.