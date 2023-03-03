const Shears = document.querySelector('.arro');
const hidden = document.querySelector('.hidden');
const deskHidden = document.createElement('desk_hidden');
const container = document.querySelector('.container');


Shears.addEventListener('click', ShearsFun);
container.addEventListener('click', resetFun);

function ShearsFun() {
    setTimeout(() => {
        hidden.style.display = 'block';
        hidden.style.display = 'flex';
    }, 300)
};

function resetFun() {
    hidden.style.display = 'none';
};