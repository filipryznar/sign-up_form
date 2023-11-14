// Capitalize the labels using JavaScript
const labels = document.querySelectorAll("label");

labels.forEach((label) => {
  const labelText = label.textContent;
  label.textContent = labelText.charAt(0).toUpperCase() + labelText.slice(1);
});
