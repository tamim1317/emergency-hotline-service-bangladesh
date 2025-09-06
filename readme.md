1) Difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll

* getElementById("id") = Selects one element by its unique id.

* getElementsByClassName("class") = Selects all elements with the same class.

* querySelector("selector") = Selects the first element that matches a CSS selector.

* querySelectorAll("selector") = Selects all elements that match a CSS selector. (gives a list)

2) How to create and insert a new element into the DOM

Step 1: Create a new element
let newDiv = document.createElement("div");

Step 2: Add some text
newDiv.textContent = "Hello Bangladesh";

Step 3: Insert it into the page
document.body.appendChild(newDiv);

3) What is Event Bubbling?

Event bubbling means an event starts from the inner element and then moves up to the parent elements.

4) What is Event Delegation? Why is it useful?

Event delegation means putting the event listener on a parent element, instead of each child.

The parent can “catch” events from its children.

Benefits:

Less code

Better performance (fewer listeners)

Works for new elements added later

5) Difference between preventDefault() and stopPropagation()

preventDefault() = Stops the default browser action.
Example: Prevent a form from submitting or a link from opening.

stopPropagation() = Stops the event from going to parent elements.
Example: A button click will not bubble up to its parent div.