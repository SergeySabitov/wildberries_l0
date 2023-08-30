import './index.html'
import './index.scss'
import showItem from './scripts/showItem';
import showDelivery from './scripts/showDelivery';
import img1 from './images/items/photo1.png';
import img2 from './images/items/photo2.png';
import img3 from './images/items/photo3.png';

import mir from './images/icons/mir.svg'
import visa from './images/icons/visa.svg'
import mastercard from './images/icons/mastercard.svg'


import showDeliveryMethods from './scripts/showDeliveryMethods';

import {isValidEmail, isValidPhoneNumber, formatPhoneNumber, deleteDeliveryInfo, isValidName, isValidINN} from './scripts/helpers';
import showPayCards from './scripts/showPayCards';


const CART_DATA = [
    {
        id: 1,
        name: 'Футболка UZcotton мужская',
        price: {
            before: 1051,
            after: 472,
            discount: 526,
            userDiscount: 53
        },
        left: 2,
        color: 'белый',
        size: '56',
        stock: 'Коледино WB',
        company: 'OOO Вайлдберриз',
        aboutCompany: {
            ogrn: 'ОГРН: 5167746237148',
            address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34'
        },
        path_to_img: img1
    },
    {
        id: 2,
        name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
        price: {
            before: 11500,
            after: 5175,
            discount: 5750,
            userDiscount: 575
        },
        left: null,
        color: 'прозрачный',
        size: null,
        stock: 'Коледино WB',
        company: 'OOO Мегапрофстиль',
        aboutCompany: {
            ogrn: 'ОГРН: 5167746237148',
            address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34'
        },
        path_to_img: img2
    },
    {
        id: 3,
        name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,Faber-Castell',
        price: {
            before: 475,
            after: 213,
            discount: 238,
            userDiscount: 24
        },
        left: 2,
        color: null,
        size: null,
        stock: 'Коледино WB',
        company: 'OOO Вайлдберриз',
        aboutCompany: {
            ogrn: 'ОГРН: 5167746237148',
            address: '129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34'
        },
        path_to_img: img3
    },
    {
        id: 4,
        name: 'Футболка UZcotton мужская',
        price: {
            before: null,
            after: null
        },
        left: 0,
        color: 'белый',
        size: '56',
        stock: null,
        company: null,
        path_to_img:img1
    },
    {
        id: 5,
        name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
        price: {
            before: null,
            after: null
        },
        left: 0,
        color: 'прозрачный',
        size: null,
        stock: null,
        company: null,
        path_to_img: img2
    },
    {
        id: 6,
        name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные,Faber-Castell',
        price: {
            before: null,
            after: null
        },
        left: 0,
        color: null,
        size: null,
        stock: null,
        company: null,
        path_to_img: img3
    }
]

let card_items_info = [
    {
        id: 1,
        count: 1,
        checked: true
    },
    {
        id: 2,
        count: 200,
        checked: true
    },
    {
        id: 3,
        count: 2,
        checked: true
    }
]

const DELIVERY_DATA = [
    {
        date: '5—6 февраля',
        items: [1,2,3]
    },
    {
        date: '7—8 февраля',
        items: [2]
    }
]



const showItems = (data, parent_container_id) => {
    data.map(el => {
        if (el.left === 0) return;
        const quantity = card_items_info.find(item => item.id === el.id).count;
        showItem(el, parent_container_id, quantity);
    })

    return;
}

const showDeliveries = (data, parent_container_ids) => {
    data.map((el, index) => {
        let shipping_day = {};
        shipping_day.date = el.date;

        let notShow = false;

        let notCheckedCount = 0;

        shipping_day.items = el.items.map( id => {
            let count = card_items_info.find(card_item => card_item.id === id).count
            let shipping_count = count;

            if (id === 2 &&  count > 16) { // моделируем разделение одного заказа на разные даты
                if (index === 0) {
                    shipping_count = count - 16;
                } else {
                    shipping_count = 16;
                }
            }

            const checked = card_items_info.find(card_item => card_item.id === id).checked;

            if (!checked) {
                shipping_count = 0;
                notCheckedCount += 1;
            }

            if (id === 2 &&  count < 16 && index === 1) {
                notShow = true;
            }

            
            return {
                count: shipping_count,
                path_to_img: CART_DATA.find(cart_data_item => cart_data_item.id === id).path_to_img
            }
        })

        if (notCheckedCount === card_items_info.length)
            notShow = true;

        if (!notShow)
            showDelivery(shipping_day, parent_container_ids);

        return;
    })
    return;
}

const showDisabledItems = (data, parent_container_id) => {
    const disabled_items = data.filter(el => el.left === 0);


    if (disabled_items.length > 0) {
        const element = document.querySelector('.disabled_items_count');

        if (element) {
            element.textContent = `Отсутствуют · ${disabled_items.length} товара`;
        } else {
            console.error("Element with class 'disabled_items_count' not found.");
        }

        disabled_items.map(el => showItem(el, parent_container_id))

    }
}
const showFinalPrice = () => {
    const finalCostElement = document.getElementById('finalCost');
    const costWithoutDiscountElement = document.getElementById('costWithoutDiscount');
    const discountElement = document.getElementById('totalDiscount');
    const itemsQuantityElement = document.getElementById('itemsQuantity');

    let finalPrice = 0;
    let priceWithoutDiscount = 0;
    let discount = 0;
    let itemsQuantity = 0;

    card_items_info.map(el => {
        if (el.checked) {
            const itemPrice = CART_DATA.find(item => item.id === el.id).price;
            finalPrice += el.count * itemPrice.after;
            priceWithoutDiscount += el.count * itemPrice.before;
            discount += el.count * (itemPrice.before - itemPrice.after);
            itemsQuantity += el.count;
        }
    })

    finalCostElement.innerHTML = `${finalPrice} сом`;

    costWithoutDiscountElement.innerHTML = `${priceWithoutDiscount} сом`

    discountElement.innerHTML = `−${discount} сом`;

    itemsQuantityElement.innerHTML = `${itemsQuantity} товара`
}


// showing info

showItems(CART_DATA, 'enabled_items');
showDisabledItems(CART_DATA, 'disabled_items')
showDeliveries(DELIVERY_DATA, ['deliveries', 'deliveries_desktop'])
showFinalPrice();

document.getElementById('cartIconItemsCount').innerHTML = card_items_info.length
document.getElementById('cartIconItemsCountMobile').innerHTML = card_items_info.length


// validate inputs

const nameInput = document.getElementById("nameInput");
const surnameInput = document.getElementById("surnameInput");
const emailInput = document.getElementById("emailInput");
const phoneNumberInput = document.getElementById("phoneNumberInput");
const INNInput = document.getElementById("INNInput");

// email
emailInput.addEventListener("blur", function() {
    if (!isValidEmail(emailInput.value) && emailInput.value.length !== 0) {
        emailInput.classList.add('error');
        const error_message = document.getElementById("emailInput_error");
        error_message.style.visibility = 'visible';
    }
})

emailInput.addEventListener("input", function() {
    const error_message = document.getElementById("emailInput_error");
    if (error_message.style.visibility === 'visible') {
        if (isValidEmail(emailInput.value)) {
            emailInput.classList.remove('error');
            error_message.style.visibility = 'hidden';
        }
    }
});


// INN


INNInput.addEventListener("blur", function() {
    if (!isValidINN(INNInput.value) && INNInput.value.length !== 0) {
        INNInput.classList.add('error');
        const error_message = document.getElementById("INNInput_error");
        error_message.style.visibility = 'visible';
    }
})

INNInput.addEventListener("input", function() {
    const error_message = document.getElementById("INNInput_error");
    if (error_message.style.visibility === 'visible') {
        if (isValidINN(INNInput.value)) {
            console.log('valid')
            INNInput.classList.remove('error');
            error_message.style.visibility = 'hidden';
        }
    }
});

// name and surname

nameInput.addEventListener("blur", function() {
    if (!isValidName(nameInput.value) && nameInput.value.length !== 0) {
        nameInput.classList.add('error');
        const error_message = document.getElementById("nameInput_error");
        error_message.style.visibility = 'visible';
    }
})

nameInput.addEventListener("input", function() {
    const error_message = document.getElementById("nameInput_error");
    if (error_message.style.visibility === 'visible') {
        if (isValidName(nameInput.value)) {
            nameInput.classList.remove('error');
            error_message.style.visibility = 'hidden';
        }
    }
});


surnameInput.addEventListener("blur", function() {
    if (!isValidName(surnameInput.value) && surnameInput.value.length !== 0) {
        surnameInput.classList.add('error');
        const error_message = document.getElementById("surnameInput_error");
        error_message.style.visibility = 'visible';
    }
})

surnameInput.addEventListener("input", function() {
    const error_message = document.getElementById("surnameInput_error");
    if (error_message.style.visibility === 'visible') {
        if (isValidName(surnameInput.value)) {
            surnameInput.classList.remove('error');
            error_message.style.visibility = 'hidden';
        }
    }
});


// phone number 

phoneNumberInput.addEventListener("blur", function() {
    if (!isValidPhoneNumber(phoneNumberInput.value) && phoneNumberInput.value.length !== 0) {
        phoneNumberInput.classList.add('error');
        const error_message = document.getElementById("phoneNumberInput_error");
        error_message.style.visibility = 'visible';
    }
})

let prevInputValue = phoneNumberInput.value;

phoneNumberInput.addEventListener("input", function() {
    const input = phoneNumberInput.value;

    if (input.length < prevInputValue.length) {
        prevInputValue = input;
        return;
    }

    const formattedInput = formatPhoneNumber(input);
    phoneNumberInput.value = formattedInput;

    prevInputValue = formattedInput;

    const error_message = document.getElementById("phoneNumberInput_error");
    if (error_message.style.visibility === 'visible') {
        if (isValidPhoneNumber(phoneNumberInput.value)) {   
            phoneNumberInput.classList.remove('error');
            error_message.style.visibility = 'hidden';
        }
    }

});

// checkbox handling

for (let i = 0; i < card_items_info.length; i++) {
    const checkbox_all = document.getElementById('choose_all_checkbox_container');

    const checkbox_image_all = checkbox_all.getElementsByClassName('choose_all_checkbox')[0]
    const empty_checkbox_image_all = checkbox_all.getElementsByClassName('choose_all_checkbox_empty')[0]

    const checkbox = document.getElementById(`${card_items_info[i].id}_checkbox`)

    checkbox.addEventListener('click', () => {

        const checkbox_image = checkbox.getElementsByClassName('checkbox_fill')[0]
        const empty_checkbox_image = checkbox.getElementsByClassName('checkbox_empty')[0]

        if (card_items_info[i].checked) {
            card_items_info[i].checked = false;
            checkbox_image.classList.add('hide');
            empty_checkbox_image.classList.remove('hide')
        } else {
            card_items_info[i].checked = true;
            checkbox_image.classList.remove('hide');
            empty_checkbox_image.classList.add('hide')
        }

        if (card_items_info.filter(el => el.checked).length === card_items_info.length) {
            checkbox_image_all.classList.remove('hide');
            empty_checkbox_image_all.classList.add('hide')
        }
        else {
            checkbox_image_all.classList.add('hide');
            empty_checkbox_image_all.classList.remove('hide')
        }

        deleteDeliveryInfo();
        showFinalPrice();
        showDeliveries(DELIVERY_DATA, ['deliveries', 'deliveries_desktop'])
    })
}

const checkbox = document.getElementById('choose_all_checkbox_container');
checkbox.addEventListener('click', () => {
    const checkbox_image_all = checkbox.getElementsByClassName('choose_all_checkbox')[0]
    const empty_checkbox_image_all = checkbox.getElementsByClassName('choose_all_checkbox_empty')[0]

    let all_checked = card_items_info.filter(el => el.checked).length === card_items_info.length


    if (all_checked) {
        checkbox_image_all.classList.add('hide');
        empty_checkbox_image_all.classList.remove('hide')
    } else {
        checkbox_image_all.classList.remove('hide');
        empty_checkbox_image_all.classList.add('hide')
    }
    for (let i = 0; i < card_items_info.length; i++) {

        const checkbox = document.getElementById(`${card_items_info[i].id}_checkbox`)
        const checkbox_image = checkbox.getElementsByClassName('checkbox_fill')[0]
        const empty_checkbox_image = checkbox.getElementsByClassName('checkbox_empty')[0]

        if (all_checked) {
            if (card_items_info[i].checked) {
                card_items_info[i].checked = false;
                checkbox_image.classList.add('hide');
                empty_checkbox_image.classList.remove('hide')
            }
        } else {
            if (!card_items_info[i].checked) {
                card_items_info[i].checked = true;
                checkbox_image.classList.remove('hide');
                empty_checkbox_image.classList.add('hide')
            }
        }
    }

    deleteDeliveryInfo();
    showFinalPrice();
    showDeliveries(DELIVERY_DATA, ['deliveries', 'deliveries_desktop'])
})

const instantCheckbox = document.getElementById('instantCheckbox');
instantCheckbox.addEventListener('click', () => {
    const checkbox_image = instantCheckbox.getElementsByClassName('instantCheckbox_fill')[0]
    const empty_checkbox_image = instantCheckbox.getElementsByClassName('instantCheckbox_empty')[0]

    const instantPayNotification = document.getElementsByClassName('instantPayNotification')[0]

    const orderButtonText = document.getElementById('order_button__text');
    const finalCost = document.getElementById('finalCost').innerText;


    if (checkbox_image.classList.contains('hide')) {
        checkbox_image.classList.remove('hide');
        empty_checkbox_image.classList.add('hide')
        orderButtonText.innerText = `Оплатить ${finalCost}`;

        instantPayNotification.style.display = 'none'

    } else {
        checkbox_image.classList.add('hide');
        empty_checkbox_image.classList.remove('hide')
        orderButtonText.innerText = 'Заказать';
        instantPayNotification.style.display = 'block'

    }
})
// items quantity 

for (let i = 0; i < card_items_info.length; i++) {
    const decrease = document.getElementById(`${card_items_info[i].id}_item_decrease`)
    const increase = document.getElementById(`${card_items_info[i].id}_item_increase`)
    const quantity = document.getElementById(`${card_items_info[i].id}_item_count`)
    const ITEM_INFO = CART_DATA.find(item => item.id === card_items_info[i].id);
    const left = ITEM_INFO.left


    const priceElement = document.getElementById(`${card_items_info[i].id}_price`)
    const priceWithoutDiscountElement = document.getElementById(`${card_items_info[i].id}_priceWithoutDiscount`)

    decrease.addEventListener('click', () => {
        if (card_items_info[i].count > 1) {
            card_items_info[i].count -= 1
            quantity.innerHTML = card_items_info[i].count

            const price = ITEM_INFO.price.after * card_items_info[i].count
            const priceWithoutDiscount = ITEM_INFO.price.before * card_items_info[i].count

            priceElement.innerHTML = price;
            priceWithoutDiscountElement.innerHTML = priceWithoutDiscount + ' сом';
            deleteDeliveryInfo();
            showFinalPrice();
            showDeliveries(DELIVERY_DATA, ['deliveries', 'deliveries_desktop'])
        }

        
    })

    increase.addEventListener('click', () => {
        if (Number.isFinite(left) && card_items_info[i].count < left || !Number.isFinite(left)) {
            card_items_info[i].count += 1
            quantity.innerHTML = card_items_info[i].count
            const price = ITEM_INFO.price.after * card_items_info[i].count
            const priceWithoutDiscount = ITEM_INFO.price.before * card_items_info[i].count

            priceElement.innerHTML = price;
            priceWithoutDiscountElement.innerHTML = priceWithoutDiscount + ' сом';
            deleteDeliveryInfo();
            showFinalPrice();
            showDeliveries(DELIVERY_DATA, ['deliveries', 'deliveries_desktop'])
       }
    })

}

// show items

const hideShowItems = document.getElementById('hideShowItems')
const hideShowDisabledItems = document.getElementById('hideShowDisabledItems')

let hideEnabledItems = false;


hideShowItems.addEventListener('click', () => {
    const hideItems = document.getElementById('hideEnabledItems')
    const showItems = document.getElementById('showEnabledItems')

    const items = document.getElementById('enabled_items');

    const enabledItemsContainer = document.getElementsByClassName('items_and_controls')[0]
    const chooseAllContainer = document.getElementsByClassName('choose_all_container')[0]
    const infoWhenHided = chooseAllContainer.getElementsByClassName('infoWhenHided')[0]

    const spanElements = chooseAllContainer.querySelectorAll("span");


    if (hideEnabledItems) {
        hideItems.classList.remove('hide')
        showItems.classList.add('hide')

        items.style.display = 'flex'

        for (let i = 0; i < spanElements.length - 1; i++) {
            spanElements[i].style.display = "inline";
        }
        infoWhenHided.style.display = 'none'
        
    } else {
        hideItems.classList.add('hide')
        showItems.classList.remove('hide')
        items.style.display = 'none'
        enabledItemsContainer.style.margin = '0'
    
        for (let i = 0; i < spanElements.length - 1; i++) {
            spanElements[i].style.display = "none";
        }
        infoWhenHided.style.display = 'block'
        infoWhenHided.innerHTML = `
            ${card_items_info.reduce((acc, el) => acc + el.count, 0)} шт. · ${card_items_info.reduce((acc, el) => acc + el.count * CART_DATA.find(item => item.id === el.id).price.after, 0)} сом`
    }
    hideEnabledItems = !hideEnabledItems

})

hideShowDisabledItems.addEventListener('click', () => {
    const hideItems = document.getElementById('hideDisabledItems')
    const showItems = document.getElementById('showDisabledItems')

    const items = document.getElementById('disabled_items');

    if (hideEnabledItems) {
        hideItems.classList.remove('hide')
        showItems.classList.add('hide')

        items.style.display = 'flex'
        
    } else {
        hideItems.classList.add('hide')
        showItems.classList.remove('hide')
        items.style.display = 'none'
    }
    hideEnabledItems = !hideEnabledItems

})



// modals
const deliveryAddresses = [
    "Бишкек, улица Ахматбека Суюмбаева, 12/1", 
    "Бишкек, улица Жукеева-Пудовкина, 77/1", 
    "Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1"
]
let currentDeliveryAddress = 0;
let currentDeliveryPoint = 0;

showDeliveryMethods(deliveryAddresses, deliveryAddresses, 'points_container', 'addresses_container')

deliveryAddresses.map((address,index) => {
    const selectPoint = document.getElementById(`${index}_point_switch`)
    const selectAddress = document.getElementById(`${index}_address_switch`)

    selectPoint.addEventListener('click', () => {
        if (currentDeliveryPoint !== index) {
            const prevSelectPoint = document.getElementById(`${currentDeliveryPoint}_point_switch`)
            const prevPickedIcon = prevSelectPoint.getElementsByClassName('picked')[0]
            const prevNotPickedIcon = prevSelectPoint.getElementsByClassName('notPicked')[0]
            prevPickedIcon.classList.add('hide')
            prevNotPickedIcon.classList.remove('hide')
            currentDeliveryPoint = index;

            const pickedIcon = selectPoint.getElementsByClassName('picked')[0]
            const notPickedIcon = selectPoint.getElementsByClassName('notPicked')[0]

            pickedIcon.classList.remove('hide')
            notPickedIcon.classList.add('hide')

        }
    })

    selectAddress.addEventListener('click', () => {
        if (currentDeliveryAddress !== index) {
            const prevSelectAddress = document.getElementById(`${currentDeliveryAddress}_address_switch`)
            const prevPickedIcon = prevSelectAddress.getElementsByClassName('picked')[0]
            const prevNotPickedIcon = prevSelectAddress.getElementsByClassName('notPicked')[0]
            prevPickedIcon.classList.add('hide')
            prevNotPickedIcon.classList.remove('hide')
            currentDeliveryAddress = index;

            const pickedIcon = selectAddress.getElementsByClassName('picked')[0]
            const notPickedIcon = selectAddress.getElementsByClassName('notPicked')[0]

            pickedIcon.classList.remove('hide')
            notPickedIcon.classList.add('hide')

        }
    })

})

let byCourier = false;

const pointButton = document.getElementById('pointButton');
const courierButton = document.getElementById('courierButton');

pointButton.addEventListener('click', () => {
    const pointsContainer = document.getElementById('points_container')
    const addressesContainer = document.getElementById('addresses_container')

    if (byCourier) {
        pointsContainer.classList.remove('hide')
        addressesContainer.classList.add('hide');
        pointButton.classList.add('active')
        courierButton.classList.remove('active')

        byCourier = !byCourier
    }

})

courierButton.addEventListener('click', () => {
    const pointsContainer = document.getElementById('points_container')
    const addressesContainer = document.getElementById('addresses_container')

    if (!byCourier) {
        pointsContainer.classList.add('hide')
        addressesContainer.classList.remove('hide');

        pointButton.classList.remove('active')
        courierButton.classList.add('active')
        byCourier = !byCourier
    }
})

const closeDeliveryModal = document.getElementById('closeDeliveryModal')
const modalDeliveryContainer = document.getElementById('modalDeliveryContainer')


closeDeliveryModal.addEventListener('click', () => {
 modalDeliveryContainer.classList.add('hide');
})


const openDeliveryModal = document.getElementById('changeDeliveryMethod')
const openDeliveryModalFromTotal = document.getElementById('changeDeliveyMethodInTotalContainer')

openDeliveryModal.addEventListener('click', () => {
    modalDeliveryContainer.classList.remove('hide');
})

openDeliveryModalFromTotal.addEventListener('click', () => {
    modalDeliveryContainer.classList.remove('hide');
})

const changeDeliveryMethod = document.getElementById('change_delivery_info_button');

changeDeliveryMethod.addEventListener('click', () => {
    const deliveryMethodInTotal = document.getElementById('deliveryMethodInTotal')
    const deliveryMethod = document.getElementById('deliveryMethod')
    const deliveryAddress = document.getElementById('deliveryAddress')
    const deliveryAddressMobile = document.getElementById('deliveryAddressMobile')
    const deliveryAddressInTotal = document.getElementById('deliveryAddressInTotal')

    if (byCourier) {
        deliveryMethod.innerHTML = 'Курьером'
        deliveryMethodInTotal.innerHTML = 'Доставка курьером'

        deliveryAddress.innerHTML = deliveryAddresses[currentDeliveryAddress]
        deliveryAddressMobile.innerHTML = deliveryAddresses[currentDeliveryAddress]
        deliveryAddressInTotal.innerHTML = deliveryAddresses[currentDeliveryAddress]

    } else {
        deliveryMethod.innerHTML = 'Пункт выдачи'
        deliveryMethodInTotal.innerHTML = 'Доставка в пункт выдачи'

        deliveryAddress.innerHTML = deliveryAddresses[currentDeliveryPoint]
        deliveryAddressMobile.innerHTML = deliveryAddresses[currentDeliveryPoint]
        deliveryAddressInTotal.innerHTML = deliveryAddresses[currentDeliveryPoint]

    }

    modalDeliveryContainer.classList.add('hide');
})

// modal payment

const cards = [{
        img: mir,
        cardNumber: '1234 56•• •••• 1234'
    },
    {
        img: visa,
        cardNumber: '1234 56•• •••• 1234'
    },
    {
        img: mastercard,
        cardNumber: '1234 56•• •••• 1234'
    }
]

let currentPayCard = 0;
showPayCards(cards, 'cardsContainer')

cards.map((card,index) => {
    const selectCard = document.getElementById(`${index}_pay_switch`)

    selectCard.addEventListener('click', () => {
        if (currentPayCard !== index) {
            const prevSelectPay = document.getElementById(`${currentPayCard}_pay_switch`)
            const prevPickedIcon = prevSelectPay.getElementsByClassName('picked')[0]
            const prevNotPickedIcon = prevSelectPay.getElementsByClassName('notPicked')[0]
            prevPickedIcon.classList.add('hide')
            prevNotPickedIcon.classList.remove('hide')
            currentPayCard = index;

            const pickedIcon = selectCard.getElementsByClassName('picked')[0]
            const notPickedIcon = selectCard.getElementsByClassName('notPicked')[0]

            pickedIcon.classList.remove('hide')
            notPickedIcon.classList.add('hide')

        }
    })
})


const closePaymentModal = document.getElementById('closePaymentModal')
const modalPaymentContainer = document.getElementById('paymentModalContainer')


closePaymentModal.addEventListener('click', () => {
    modalPaymentContainer.classList.add('hide');
})

const changePaymentInfo = document.getElementById('changePaymentInfo')

changePaymentInfo.addEventListener('click', () => {
    const cardIcon = document.getElementById('cardIcon')
    const cardNumber = document.getElementById('cardNumber')
    const cardIconInTotal = document.getElementById('cardIconInTotal')
    const cardNumberInTotal = document.getElementById('cardNumberInTotal')


    cardIcon.src = cards[currentPayCard].img
    cardIconInTotal.src = cards[currentPayCard].img

    cardNumber.innerHTML = cards[currentPayCard].cardNumber
    cardNumberInTotal.innerHTML = cards[currentPayCard].cardNumber

    modalPaymentContainer.classList.add('hide');
})

const openPaymentModal = document.getElementById('changePayCard')
const openPaymentModalFromTotal = document.getElementById('changePayCardInTotal')

openPaymentModal.addEventListener('click', () => {
    modalPaymentContainer.classList.remove('hide');
})

openPaymentModalFromTotal.addEventListener('click', () => {
    modalPaymentContainer.classList.remove('hide');
})



// order button 

const orderButton = document.getElementById('order')

orderButton.addEventListener('click', () => {
    let valid = true;
    if (!isValidEmail(emailInput.value)) {
        valid = false
        emailInput.classList.add('error');
        const error_message = document.getElementById("emailInput_error");
        if (emailInput.value.length === 0)
            error_message.innerHTML = 'Укажите почту';
        else 
            error_message.innerHTML = 'Проверьте адрес электронной почты'
        error_message.style.visibility = 'visible';
    }

    if (!isValidPhoneNumber(phoneNumberInput.value)) {
        valid = false
        phoneNumberInput.classList.add('error');
        const error_message = document.getElementById("phoneNumberInput_error");
        if (phoneNumberInput.value.length === 0)
            error_message.innerHTML = 'Укажите номер телефона';
        else 
            error_message.innerHTML = 'Формат: +9 999 999 99 99'
        error_message.style.visibility = 'visible';
    }

    if (!isValidName(nameInput.value)) {
        valid = false
        nameInput.classList.add('error');
        const error_message = document.getElementById("nameInput_error");
        if (nameInput.value.length === 0)
            error_message.innerHTML = 'Укажите имя';
        else 
            error_message.innerHTML = 'Проверьте имя'
        error_message.style.visibility = 'visible';
    }

    if (!isValidName(surnameInput.value)) {
        valid = false
        surnameInput.classList.add('error');
        const error_message = document.getElementById("surnameInput_error");
        if (surnameInput.value.length === 0)
            error_message.innerHTML = 'Укажите фаимилию';
        else 
            error_message.innerHTML = 'Проверьте фамилию'
        error_message.style.visibility = 'visible';
    }

    if (!isValidINN(INNInput.value)) {
        valid = false
        INNInput.classList.add('error');
        const error_message = document.getElementById("INNInput_error");
        if (INNInput.value.length === 0)
            error_message.innerHTML = 'Укажите ИНН';
        else 
            error_message.innerHTML = 'Проверьте ИНН'
        error_message.style.visibility = 'visible';
    }

    if (!valid) {
        const scrollTo = document.getElementById('userInfoContainer')
        scrollTo.scrollIntoView({behavior:  "smooth"})
    }

    if (valid) {
        alert('Заказ успешно выполнен')
    }
})