import ArtBoard from './art-board';
import ColorPicker from './color-picker';


ArtBoard.init({ width: 32, height: 32 });

ColorPicker.init({
  pickerElement: document.querySelectorAll('.color-picker')[0],
  onColorChange: ArtBoard.setCurrentBGColor,
})
