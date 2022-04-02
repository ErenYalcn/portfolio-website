

window.addEventListener('install', function () {
    console.log('Install!');
});
window.addEventListener("activate", event => {
    console.log('Activate!');
});
window.addEventListener('fetch', function (event) {
    console.log('Fetch!', event.request);
});