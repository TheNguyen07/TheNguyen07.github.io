let noButton = document.getElementById('butt2');
let yesButton = document.getElementById('butt1');
document.getElementById('List').style.visibility = 'hidden';

let c = 0;
let stop = ['bruh', 'why?', 'stop that'];
noButton.addEventListener('click', () => {
    alert(stop[c]);
    c++;
    if(c==3){
        document.getElementById('butt2').style.display = 'none';
        alert('HA you have no choice now but to go on a date with me :]')
    }
})

yesButton.addEventListener('click', () =>{
    document.getElementById('butt1').style.display = 'none';
    document.getElementById('butt2').style.display = 'none';
    document.getElementById('asking').style.display = 'none';
    document.getElementsByClassName('heart')[0].style.display = 'none';
    document.getElementById('List').style.visibility = 'visible';
})

