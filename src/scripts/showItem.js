import checkbox from '../images/icons/checkbox.svg';
import emptyCheckbox from '../images/icons/checkbox_empty.svg';
import info from '../images/icons/info.svg';


const showItem = (item, parent_container_id, quantity) => {
    const cartContainer = document.getElementById(parent_container_id);
    
    if (!cartContainer) {
        console.error("Cart container not found.");
        return;
    }

    const disabled_item = item.left === 0;

    const cartItem = document.createElement('div');
    cartItem.classList.add('cart_item');
    cartItem.id = item.id + '_item_container'
    
    cartItem.innerHTML = `
    <div class="line"></div>
    <div class="cart_item_info left">
        <div class="check_photo">
            ${disabled_item ? '' : `<span class="check_icon_container" id="${item.id}_checkbox">
                <img src="${checkbox}" alt="checkbox" class="checkbox_fill"/>
                <img src="${emptyCheckbox}" alt="checkbox" class="checkbox_empty hide"/>
            </span>`}
            ${item.size ? `<span class="size_icon_container">${item.size}</span>` : ''}
                <img src="${item.path_to_img}" class="item_image ${disabled_item ? 'disabled' : ''}"/>
        </div>
        <div class="item_info ${disabled_item ? 'disabled' : ''}">
            <div class="prices_container_mobile ${disabled_item ? 'hide' : ''}">
                <div class="current_price_container">
                    <h4 class="current_price" id="${item.id}_price_mobile">${(item.price.after * quantity).toLocaleString()}</h4><span class="currency">сом</span>
                </div>
                ${item.price.before ? `<span class="before_price" id="${item.id}_priceWithoutDiscount_mobile">${(item.price.before * quantity).toLocaleString()} сом</span>`: '' }
            </div>
            <p>${item.name}</p>
            ${item.color || item.size ? `<div class="characteristics">
                ${item.color ? `<span class="color">Цвет: ${item.color}</span>` : ''}
                ${item.size ? `<span class="size">Размер: ${item.size}</span>` : ''}
            </div>` : '' }
            ${(item.stock || item.company) && !disabled_item ? `<div class="other_info">
                ${item.stock ? `<span>${item.stock}</span>` : ''}
                ${item.company ? `<span class="ooo">
                    <span>${item.company}</span>
                    <div class="tooltip_container">
                        <img src="${info}" alt="info" class="tooltip_trigger">
                        <div class="tooltip about_company">
                                <h5>${item.company}</h5>
                                <span>${item.aboutCompany.ogrn}</span>
                                <span>${item.aboutCompany.address}</span>
                        </div>
                    </div>
                </span>` : '' }
            </div>` : '' }
        </div>
    </div>
    <div class="cart_item_info right">
        <div class="controls_container ${disabled_item ? 'disabled' : ''}">
            <div class="quantity_container ${disabled_item ? 'hide' : ''}">
                <span class="decrease" id='${item.id}_item_decrease'>
                    <span>−</span>
                </span>
                <span class="quantity" id='${item.id}_item_count'>${quantity}</span>
                <span class="increase" id='${item.id}_item_increase'>
                    <span>+</span>
                </span>
            </div>
            ${item.left && !disabled_item ? `<span class="remaining" id="${item.id}_left">Осталось ${item.left} шт.</span>` : '' }
            <div class="controls_icons">
                
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" class="likeIcon" id="${item.id}_favorite" fill="${item.favorite ? '#CB11AB' : 'black'}">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.03399 4.05857C2.26592 4.75224 1.76687 5.83284 1.99496 7.42928C2.22335 9.02783 3.26497 10.6852 4.80439 12.3478C6.25868 13.9184 8.10965 15.4437 9.99999 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.7351 10.6852 17.7767 9.02783 18.005 7.4293C18.2331 5.83285 17.734 4.75224 16.9659 4.05856C16.1767 3.34572 15.055 3 14 3C12.132 3 11.0924 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1583 5.04882 9.84169 5.04882 9.64643 4.85355C9.59644 4.80356 9.54185 4.7466 9.48227 4.68443C8.9076 4.08479 7.868 3 5.99999 3C4.94498 3 3.82328 3.34573 3.03399 4.05857ZM2.36374 3.31643C3.37372 2.40427 4.75205 2 5.99999 2C8.07126 2 9.34542 3.11257 9.99999 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2669 5.66715 18.995 7.5707C18.7233 9.47217 17.515 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87776 18.0333 9.69999 17.9C7.69356 16.3952 5.66446 14.7485 4.07063 13.0272C2.48506 11.3148 1.27668 9.47217 1.00501 7.57072C0.733043 5.66716 1.33253 4.24776 2.36374 3.31643Z"/>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="black" class="deleteIcon" id="${item.id}_delete">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" />
                <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"/>
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" />
                </svg>
            </div>
        </div>
        <div class="prices_container desktop_only ${disabled_item ? 'hide' : ''}">
            <div class="current_price_container">
                <span class="current_price ${String(item.price.after*quantity).length > 5 ? 'bigPrice' : ''}" id="${item.id}_price">${(item.price.after * quantity).toLocaleString()}</span><span class="currency">сом</span>
            </div>
            ${item.price.before ? `<span class="before_price tooltip_container" id="${item.id}_priceWithoutDiscount">
                <span class="tooltip_trigger">${(item.price.before * quantity).toLocaleString()} сом</span>
                <div class="tooltip discount">
                    <div class="discountPercentage">
                        <span>Скидка 50%</span>
                        <span>Скидка покупателя 10%</span>
                    </div>
                    <div class="discountValue">
                        <span>${item.price.discount} сом</span>
                        <span>${item.price.userDiscount} сом</span>
                    </div>
                </div>
            </span>`: '' }
        </div>
    </div>
    `;

    cartContainer.appendChild(cartItem);

    const favoriteIcon = document.getElementById(`${item.id}_favorite`);

    favoriteIcon.addEventListener('click', () => {
        console.log(favoriteIcon.style.fill)
        if (!favoriteIcon.style.fill || favoriteIcon.style.fill === 'black') {
            favoriteIcon.style.fill = '#CB11AB';
            item.favorite = true;
        } else {
            favoriteIcon.style.fill = 'black';
            item.favorite = false;
        }
    })
}

export default showItem;



