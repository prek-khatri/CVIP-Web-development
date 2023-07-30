function convertImage() {
  const imageInput = document.getElementById('imageInput');
  const formatSelect = document.getElementById('formatSelect');
  const selectedFormat = formatSelect.value;

  if (!imageInput.files || imageInput.files.length === 0) {
    alert('Please select an image file.');
    return;
  }

  const imageFile = imageInput.files[0];
  const reader = new FileReader();

  reader.onload = function (event) {
    const imageData = event.target.result;
    const imageBlob = new Blob([imageData], { type: `image/${selectedFormat}` });
    const url = URL.createObjectURL(imageBlob);
    const originalFileName = imageFile.name.split('.').slice(0, -1).join('.');
    const downloadLink = document.createElement('a');
    downloadLink.href = url;
    downloadLink.download = `${originalFileName}_converted.${selectedFormat}`;
    downloadLink.click();
  };

  reader.readAsArrayBuffer(imageFile);
}


