import saveList from "../element/saveList.js";
import saveAdd from "../element/saveAdd.js";

const saveCont = (saveArr) => {
  const _saveCont = document.createElement("div");
  _saveCont.classList.add("save-cont");

  // 저금통 내역 추가
  const _saveList = saveList(saveArr);
  _saveCont.appendChild(_saveList);

  // 저금통 추가하기 버튼
  const _saveAdd = saveAdd();
  _saveCont.appendChild(_saveAdd);

  return _saveCont;
};

export default saveCont;
