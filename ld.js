var r = document.querySelector(':root');
    
function themeColor_set() {
  var rs = getComputedStyle(r);
    var colorOr = rs.getPropertyValue('--bg-color');
    
  if (colorOr == '#eaeeff') {
      r.style.setProperty('--bg-color', '#0e1730');
      r.style.setProperty('--text-color', '#ECF0FF');
      r.style.setProperty('--accent-color', '#66fddf');
      r.style.setProperty('--text2-color', '#91CEC9');
      r.style.setProperty('--blur-color', '#6D73C5');
      r.style.setProperty('--accent2-color', '#00EEC2');
      r.style.setProperty('--underline-color', '#6BFFE3');

      document.getElementById("ld").textContent="light";

    } else {
      r.style.setProperty('--bg-color', '#eaeeff');
      r.style.setProperty('--text-color', '#091c33');
      r.style.setProperty('--accent-color', '#4551fc');
      r.style.setProperty('--text2-color', '#6166b0');
      r.style.setProperty('--blur-color', '#5a64eb');
      r.style.setProperty('--accent2-color', '#2b38ec');
      r.style.setProperty('--underline-color', '#7b84ff');

      document.getElementById("ld").textContent="dark";
    }
}