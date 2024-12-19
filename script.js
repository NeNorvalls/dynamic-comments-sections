function createEnclosingDiv(initials) {
  // Creates a new div element to serve as the enclosing div for each comment
  let enclosingDiv = document.createElement("div");
  enclosingDiv.classList.add("comment");

  // Creates a new span element to hold the user's initials as the avatar
  let avatar = document.createElement("span");
  avatar.classList.add("avatar");
  avatar.innerText = initials; // Sets the initials as the inner text of the avatar

  enclosingDiv.appendChild(avatar); // Appends the avatar span to the enclosing div
  return enclosingDiv;
}

function createText(text) {
  // Creates a new span element to hold the comment text
  let newText = document.createElement("span");
  newText.classList.add("text");
  newText.innerText = text; // Sets the comment text as the inner text of the span
  return newText;
}

function createEditButton(commentDiv) {
  // Creates a new button element for editing a comment
  let editButton = document.createElement("button");
  editButton.innerText = "Edit"; // Sets the button text to "Edit"
  editButton.onclick = function () {
    let textSpan = commentDiv.querySelector(".text"); // Selects the span element that holds the comment text
    let currentText = textSpan.innerText; // Gets the current text of the comment
    let newText = prompt("Edit your comment:", currentText); // Prompts the user to edit the comment
    if (newText !== null) {
      textSpan.innerText = newText; // Updates the comment text with the new input
    }
  };
  return editButton;
}

function createDeleteButton(commentDiv) {
  // Creates a new button element for deleting a comment
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete"; // Sets the button text to "Delete"
  deleteButton.onclick = function () {
    commentDiv.remove(); // Removes the comment div from the DOM
  };
  return deleteButton;
}

function resetFields() {
  document.getElementById("commentText").value = ""; // Clears the comment input field
}

function addComment() {
  let commentsDiv = document.getElementById("commentSection");
  let textInput = document.getElementById("commentText").value;

  if (textInput.trim() === "") {
    alert("Please enter a comment.");
    return;
  }

  let initialsInput = "NN"; // Replace with dynamic user initials if available
  let enclosingDiv = createEnclosingDiv(initialsInput); // Create the enclosing div with the user initials
  let text = createText(textInput); // Create the text span with the comment text
  let editButton = createEditButton(enclosingDiv); // Create the edit button
  let deleteButton = createDeleteButton(enclosingDiv); // Create the delete button

  enclosingDiv.appendChild(text); // Append the comment text to the enclosing div
  enclosingDiv.appendChild(editButton); // Append the edit button to the enclosing div
  enclosingDiv.appendChild(deleteButton); // Append the delete button to the enclosing div
  commentsDiv.prepend(enclosingDiv); // Adds the new comment at the top of the list

  resetFields(); // Clear the input fields
}
