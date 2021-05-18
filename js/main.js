let msg = 'obrigada por participar!'

/* classe oculta 1 */
let btnQ1 = document.querySelector('.btn-q1')

btnQ1.onclick = function () {
  let hiddenClass1 = document.querySelector('.hidden-class-1')
  let options = document.querySelectorAll('input[name="do-workout"]')
  let selectedValue

  for (let op of options) {

    if (op.checked) {
      selectedValue = op.value
      if (selectedValue === 'sim') {
        hiddenClass1.style.display = ''
        document.getElementById('no').disabled = true
      } else {
        document.querySelector('.msg-q1').innerHTML = msg
        document.getElementById('yes').disabled = true
      }
    }
  }
}

/* classe oculta 2 */
let btnQ2 = document.querySelector('.btn-q2')

btnQ2.onclick = function () {
  let hiddenClass2 = document.querySelector('.hidden-class-2')
  let options = document.querySelectorAll('input[name="where"]')
  let selectedValue

  for (let op of options) {

    if (op.checked) {
      selectedValue = op.value
      if (selectedValue === 'em-casa') {
        hiddenClass2.style.display = ''
        document.getElementById('gym').disabled = true
      } else {
        document.querySelector('.msg-q2').innerHTML = msg
        document.getElementById('home').disabled = true
      }
    }
  }
}

/* menu dropdown */
let dropdown = document.getElementById('dropdown')
dropdown.onchange = checkOtherOption
dropdown.onchange()

function checkOtherOption() {
  let menu = this
  let otherOption = document.getElementById('other-option')

  if (menu.options[menu.selectedIndex].value === 'other') {
    otherOption.style.display = ''
  } else {
    otherOption.style.display = 'none'
  }
}
