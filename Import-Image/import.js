const uploadBox = document.getElementById("drag-drop-area");
const fileInput = document.getElementById("fileInput");
const previewArea = document.getElementById("previewArea");
const clearButton = document.getElementById("clearButton");
const analyzeButton = document.getElementById("analyzeButton");

// Click to upload
uploadBox.addEventListener("click", () => fileInput.click());

// Handle file upload
fileInput.addEventListener("change", handleFileUpload);

function handleFileUpload(event) {
  const file = event.target.files[0];
  if (file && validateFile(file)) {
    // Display file preview
    previewArea.innerHTML = `<img src="${URL.createObjectURL(
      file
    )}" alt="File Preview">`;
    clearButton.disabled = false; // Enable Clear button
    analyzeButton.disabled = false; // Enable Analyze button
  } else {
    alert("Invalid file type. Please upload a JPG or PNG image.");
  }
}

// Validate file type and size
function validateFile(file) {
  const validTypes = ["image/jpeg", "image/png"];
  const maxSize = 2 * 1024 * 1024; // 2MB
  return validTypes.includes(file.type) && file.size <= maxSize;
}

// Clear uploaded file
clearButton.addEventListener("click", () => {
  fileInput.value = "";
  previewArea.innerHTML = "";
  clearButton.disabled = true;
  analyzeButton.disabled = true;
});

// Analyze button click (navigate to analysis)
analyzeButton.addEventListener("click", () => {
  alert("Analyzing file...");
  // Add your analysis logic here
});
