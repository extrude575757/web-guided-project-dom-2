// console.log('project is up')

// 👉 TASK 1- Select the following elements from the DOM:

// BUTTONS
const launchButton = document.querySelector('#launchButton')
const confirmButton = document.querySelector('#confirmButton')
const cancelButton = document.querySelector('#cancelButton')
// MESSAGES
const successMessage = document.querySelector('.report.success')
const failureMessage = document.querySelector('.report.failure')
// MODAL
const modal = document.querySelector('.modal')

// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//      - HTML
//      - The DOM's element.onclick
launchButton.onclick = function (event) {
  // console.log('setting the onclick property of the element')
}
//      - element.addEventListener()
launchButton.addEventListener('click', function (event) {
  // console.log('using addEventListener')
})
launchButton.addEventListener('click', function (event) {
  // console.log('AGAIN using addEventListener')
})
document.addEventListener('click', function (event) {
  // if (event.target === launchButton) {
  //   console.log('you clicked launch')
  // } else {
  //   console.log('you clicked something else')
  // }
})
Array.from(document.links).forEach(function (link) {
  link.addEventListener('click', function (event) {
    console.log(`disrupting the default click behaviour of "${event.target.textContent}" link`)
    event.preventDefault()
  })
})

// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
launchButton.addEventListener('click', function (event) {
  // absolute power over the entire DOM
  openModal()
  killReports()
})

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
confirmButton.addEventListener("click", function (event) {
  closeModal()
  successMessage.classList.remove('off')
})

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
cancelButton.addEventListener('click', function (event) {
  closeModal()
  failureMessage.classList.remove('off')
})

// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modal.classList.add('off')
  }
})

// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.
Array.from(document.all).forEach(element => {
  element.addEventListener('click', event => {
    console.log('🎯 event target  ', event.target)
    console.log('🧭 current target', event.currentTarget)
    console.log('\n')
  })
})

// 👉 TASK 8- Select a link and prevent its default behavior


// 👉 TASK 9- Using the mouseover event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.


// 👉 TASK 10- [STRETCH] Create helper functions
function openModal() {
  modal.classList.remove('off')
}

function closeModal() {
  modal.classList.add('off')
}

function killReports() {
  failureMessage.classList.add("off")
  successMessage.classList.add("off")
}
