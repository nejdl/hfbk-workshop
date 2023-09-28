// SKILLS
// get fieldset for skill customization
const customizationSkills = document.getElementById('customization--skills');
// get skill inputs within fieldset
const skillInputs = customizationSkills.getElementsByTagName('input');

// get saved skill settings object form local storage
let savedSkills = { html: false, css: false, js: false };
const skillsFromLocalStorageUnparsed = localStorage.getItem('skills');
const skillsFromLocalStorage = JSON.parse(skillsFromLocalStorageUnparsed);
if (skillsFromLocalStorage) {
  savedSkills = skillsFromLocalStorage;
  // and check inputs accordingly
  for (let key in savedSkills) {
    const input = customizationSkills.querySelector('#' + key);
    input.checked = savedSkills[key];
    const isChecked = input.checked;

    if (isChecked) {
      document.body.classList.add(key + '-basics-hidden');
    } else {
      document.body.classList.remove(key + '-basics-hidden');
    }
  }
} else {
  savedSkills = { html: false, css: false, js: false };
  localStorage.setItem('skills', JSON.stringify(savedSkills));
}

// change skill visibility on click
// through looping through inputs
for (let skillInput of skillInputs) {
  // add click event listener
  // toggle class that changes visibility for html / css / js basics
  skillInput.onclick = function (e) {
    const skill = e.target.name;
    const isChecked = e.target.checked;
    if (isChecked) {
      document.body.classList.add(skill + '-basics-hidden');
      // set skill to true in object
      savedSkills[skill] = true;
    } else {
      document.body.classList.remove(skill + '-basics-hidden');

      // set skill to false in object
      savedSkills[skill] = false;
    }

    // save settings in local storage
    localStorage.setItem('skills', JSON.stringify(savedSkills));
  };
}

// COLOR
// get fieldset for color customization
const customizationColor = document.getElementById('customization--color');
// get color inputs within fieldset
const colorInputs = customizationColor.getElementsByTagName('input');

// get saved color settings from local storage
let savedColor = '#0000FF';
const colorFromLocalStorageUnparsed = localStorage.getItem('color');
const colorFromLocalStorage = JSON.parse(colorFromLocalStorageUnparsed);

if (colorFromLocalStorage) {
  savedColor = colorFromLocalStorage;
} else {
  localStorage.setItem('color', JSON.stringify(savedColor));
}
// change css variable that changes color according to saved value
document.documentElement.style.setProperty('--highlightColor', savedColor);

// change color from local storage / on click
// by looping through inputs
for (let colorInput of colorInputs) {
  // check inputs according to local storage
  if (colorInput.value === savedColor) {
    colorInput.checked = true;
  }

  // add click event listener
  // toggle class that changes color according to value
  colorInput.onclick = function (e) {
    // change css variable that changes color according to value
    const color = e.target.value;
    document.documentElement.style.setProperty('--highlightColor', color);
    // save settings in local storage
    localStorage.setItem('color', JSON.stringify(color));
  };
}

// FONT
// get fieldset for font customization
const customizationFont = document.getElementById('customization--font');
// get color inputs within fieldset
const fontInputs = customizationFont.getElementsByTagName('input');

// get saved font settings from local storage
let savedFont = 'sans-serif';
const fontFromLocalStorageUnparsed = localStorage.getItem('font');
const fontFromLocalStorage = JSON.parse(fontFromLocalStorageUnparsed);

if (fontFromLocalStorage) {
  savedFont = fontFromLocalStorage;
} else {
  localStorage.setItem('font', JSON.stringify(savedFont));
}
// change css variable that changes font according to saved value
document.documentElement.style.setProperty('--fontFamily', savedFont);

// change font from local storage / on click
// by looping through inputs
for (let fontInput of fontInputs) {
  // check inputs according to local storage
  if (fontInput.value === savedFont) {
    fontInput.checked = true;
  }

  // add click event listener
  // toggle class that changes font family according to value
  fontInput.onclick = function (e) {
    // change css variable that changes font family according to value
    const fontFamily = e.target.value;
    document.documentElement.style.setProperty('--fontFamily', fontFamily);
    // save settings in local storage
    localStorage.setItem('font', JSON.stringify(fontFamily));
  };
}

// BORDERS
// get fieldset for borders customization
const customizationBorders = document.getElementById('customization--borders');
// get border input within fieldset
const borderInput = customizationBorders.getElementsByTagName('input')[0];

// get saved border settings from local storage
let savedBorderWidth = '0px';
const borderWidthFromLocalStorageUnparsed = localStorage.getItem('borderWidth');
const borderWidthFromLocalStorage = JSON.parse(
  borderWidthFromLocalStorageUnparsed
);

if (borderWidthFromLocalStorage === '1px') {
  savedBorderWidth = borderWidthFromLocalStorage;
  borderInput.checked = true;
} else {
  localStorage.setItem('borderWidth', JSON.stringify(savedBorderWidth));
  borderInput.checked = false;
}
// change css variable that changes border width according to saved value
document.documentElement.style.setProperty('--borderWidth', savedBorderWidth);

// toggle borders on click
// add click event listener
// change css variable that changes borders
borderInput.onclick = function (e) {
  if (e.target.checked) {
    document.documentElement.style.setProperty('--borderWidth', '1px');
    localStorage.setItem('borderWidth', JSON.stringify('1px'));
  } else {
    document.documentElement.style.setProperty('--borderWidth', '0px');
    localStorage.setItem('borderWidth', JSON.stringify('0px'));
  }
};
