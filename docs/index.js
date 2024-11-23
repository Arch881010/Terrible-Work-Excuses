const delay = 2000; // in ms

function getExcuse() {
    document.querySelector('button').style.display = 'none';
    document.getElementById('loading-screen').style.display = 'block';
    setTimeout(() => {
        document.getElementById('loading-screen').innerText = "Excuse Generated!";
        document.getElementById('excuse').style.display = 'block';
        document.getElementById('excuse-text').innerText = getRandomExcuse();
    }, delay); // Simulate loading time

}

function reset() {
    document.querySelector('button').style.display = 'block';
    document.getElementById('loading-screen').innerText = "Generating Excuse...";
    document.getElementById('excuse').style.display = 'none';
    document.getElementById('excuse-text').innerText = "";
    getExcuse();
}