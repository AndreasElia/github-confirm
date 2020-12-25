// get all inputs based on the two classes consistency of danger inputs
const inputs = document.querySelectorAll('input.form-control.input-block:not([name="new_owner"])')

// get the user/repository name from the url
const userRepo = document.location.href.split('/').slice(3, 5).join('/');

// setup the event for triggering input changes
const inputEvent = new Event('change', {bubbles: true})

Array.from(inputs).map(input => {
  input.value = userRepo
  input.dispatchEvent(inputEvent)
})
