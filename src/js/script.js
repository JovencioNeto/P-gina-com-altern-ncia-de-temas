const white = '#f1f5f9'
const dark = '#212529'

function useLightTheme() {
    document.body.style.backgroundColor = white
    document.body.style.color = dark
}

function useDarkTheme() {
    document.body.style.backgroundColor = dark
    document.body.style.color = white
}

function switchTheme() {
    document.body.classList.toggle('is_light')
    document.body.classList.toggle('is_dark')
}

document.getElementById('lightBtn').addEventListener('click', useLightTheme)
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)
