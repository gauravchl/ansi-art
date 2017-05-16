import ArtBoard from './art-board';
import ColorPicker from './color-picker';


ArtBoard.init({ width: 24, height: 24 });

ColorPicker.init({
  pickerElement: document.querySelectorAll('.color-picker')[0],
  onColorChange: ArtBoard.setCurrentBGColor,
})



// Init file uploader
let readFile = function(e) {
  let file = e.currentTarget.files && e.currentTarget.files[0]
  let reader = new FileReader();
  reader.onload = (event) => ArtBoard.loadANSI(event.target.result)
  if (file) reader.readAsText(file);
}
document.getElementById('upload-ip').onchange = readFile;
