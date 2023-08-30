import picked from '../images/icons/picked.svg'
import notPicked from '../images/icons/notPicked.svg'

const showPayCards = (cards, cardsContainerId) => {
    const cardsContainer = document.getElementById(cardsContainerId);
    
    if (!cardsContainer ) {
        console.error("Container not found.");
        return;
    }

    cards.map((item, index) => {
        const point = document.createElement('div')
        point.classList.add('card_container');

        point.innerHTML = `<div class="card">
            <span class="select" id="${index}_pay_switch">
                <img src="${picked}" alt=""  class="picked ${index === 0 ? '' : 'hide'}">
                <img src="${notPicked}" alt=""  class="notPicked ${index === 0 ? 'hide' : ''}">
            </span>
            <span class="card_info">
                <span class="card_img_container"><img src="${item.img}"></span>
                <span class="card_number">${item.cardNumber}</span>
            </span>
            </div>
        </div>`;

        cardsContainer.appendChild(point);
    })
}

export default showPayCards