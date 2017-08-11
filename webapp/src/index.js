import ArtBoard from './art-board';
import ColorPicker from './color-picker';

const uploadArtButton = document.getElementById('upload-ip');

ArtBoard.init({ width: 24, height: 24 });

ColorPicker.init({
  pickerElement: document.querySelectorAll('.color-picker')[0],
  onColorChange: ArtBoard.setCurrentBGColor,
});

// Init file uploader
function readFile(e) {
  const file = e.currentTarget.files && e.currentTarget.files[0];
  const reader = new FileReader();

  reader.onload = event => ArtBoard.loadANSI(event.target.result);
  if (file) reader.readAsText(file);
}

uploadArtButton.addEventListener('change', (e) => {
  readFile(e);
});
