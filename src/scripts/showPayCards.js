import picked from '../images/icons/picked.svg'
import notPicked from '../images/icons/notPicked.svg'

const showPayCards = (cards, cardsContainerId, payCard) => {
    const cardsContainer = document.getElementById(cardsContainerId);
    cardsContainer.innerHTML = '';
    
    if (!cardsContainer ) {
        console.error("Container not found.");
        return;
    }
    const pickedCardIndex = cards.findIndex(el => el.picked);
    if (pickedCardIndex !== payCard) {
        cards[pickedCardIndex].picked = false;
        cards[payCard].picked = true
    }

    cards.map((item, index) => {
        const point = document.createElement('div')
        point.classList.add('card_container');

        point.innerHTML = `<div class="card" id="${index}_pay_switch">
            <span class="select" >
                <img src="${picked}" alt=""  class="picked ${index === payCard ? '' : 'hide'}">
                <img src="${notPicked}" alt=""  class="notPicked ${index === payCard ? 'hide' : ''}">
            </span>
            <span class="card_info">
                <span class="card_img_container"><img src="${item.img}"></span>
                <span class="card_number">${item.cardNumber}</span>
            </span>
            </div>
        </div>`;

        cardsContainer.appendChild(point);
    })
    cards.map((card,index) => {
        const selectCard = document.getElementById(`${index}_pay_switch`)
    
        selectCard.addEventListener('click', () => {
            if (!cards[index].picked) {
                const prevPickedIndex = cards.findIndex(el => el.picked);
                const prevSelectPay = document.getElementById(`${prevPickedIndex}_pay_switch`)
                const prevPickedIcon = prevSelectPay.getElementsByClassName('picked')[0]
                const prevNotPickedIcon = prevSelectPay.getElementsByClassName('notPicked')[0]
                prevPickedIcon.classList.add('hide')
                prevNotPickedIcon.classList.remove('hide')
               
    
                const pickedIcon = selectCard.getElementsByClassName('picked')[0]
                const notPickedIcon = selectCard.getElementsByClassName('notPicked')[0]
    
                pickedIcon.classList.remove('hide')
                notPickedIcon.classList.add('hide')
                
                cards[index].picked = true;
                for(let i = 0; i<cards.length; i++) {
                    if (i !== index)
                        cards[i].picked = false
                }
            }
        })
    })
}

export default showPayCards