export default class Caret {
  constructor(editable) {
    this.editable = editable;
  }

  // http://stackoverflow.com/questions/3972014/get-caret-position-in-contenteditable-div
  get position() {
    var caretPos = 0;
    var range;
    let sel = window.getSelection();

    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.rangeCount) {
        range = sel.getRangeAt(0);
        if (range.commonAncestorContainer.parentNode == this.editable) {
          caretPos = range.endOffset;
        }
      }
    } else if (document.selection && document.selection.createRange) {
      range = document.selection.createRange();
      if (range.parentElement() == this.editable) {
        var tempEl = document.createElement("span");
        this.editable.insertBefore(tempEl, this.editable.firstChild);
        var tempRange = range.duplicate();
        tempRange.moveToElementText(tempEl);
        tempRange.setEndPoint("EndToEnd", range);
        caretPos = tempRange.text.length;
      }
    }
    return caretPos;
  }

  // http://stackoverflow.com/questions/6240139/highlight-text-range-using-javascript/6242538#6242538
  set position(pos) {
    let textNode = this.editable.firstChild;
    let range = document.createRange();
    range.setStart(textNode, pos);
    range.setEnd(textNode, pos);
    var sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);
  }
}
