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


// в модалах при изменении чекбокса и просто закрытии сохраняется выбор - исправить + выбор пункта при нажатии на строку
// добавить возможность добавлять в избранное и удалять товары (обновлять счетчик корзины - если 0 товаров то нет счетчика)


import showDeliveryMethods from './scripts/showDeliveryMethods';

import {isValidEmail, isValidPhoneNumber, formatPhoneNumber, deleteDeliveryInfo, isValidName, isValidINN, formatINN} from './scripts/helpers';
import showPayCards from './scripts/showPayCards';


let CART_DATA = [
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
        path_to_img: img1,
        favorite: true
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
        path_to_img: img2,
        favorite: false
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
        path_to_img: img3,
        favorite: false
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
        path_to_img:img1,
        favorite: false
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
        path_to_img: img2,
        favorite: false
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
        path_to_img: img3,
        favorite: false
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

let DELIVERY_DATA = [
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
    });

    data.map(el => {
        if (el.left === 0) return;
        const deleteIcon = document.getElementById(el.id + '_delete');
        deleteIcon.addEventListener('click', () => {
            CART_DATA = CART_DATA.filter(item => item.id !== el.id);
            DELIVERY_DATA = DELIVERY_DATA.map(deliveryItem => { 
                return {
                    date: deliveryItem.date, items: deliveryItem.items.filter(item => item !== el.id)     
                }
            }).filter(deliveryItem => deliveryItem.items.length !== 0);
            card_items_info = card_items_info.filter(item => item.id !== el.id);
            console.log(CART_DATA, DELIVERY_DATA)

            const parentContainer = document.getElementById(parent_container_id);
            const itemToRemove = document.getElementById(el.id + '_item_container');

            parentContainer.removeChild(itemToRemove);

            deleteDeliveryInfo();
            showDeliveries(DELIVERY_DATA, ['deliveries', 'deliveries_desktop']);
            showFinalPrice();

            const items_left =  card_items_info.length
            if (items_left > 0) {
                document.getElementById('cartIconItemsCount').innerHTML = items_left
                document.getElementById('cartIconItemsCountMobile').innerHTML = items_left
            } else {
                document.getElementById('cartIconItemsCount').style.display = 'none'
                document.getElementById('cartIconItemsCountMobile').style.display = 'none'
            }
        })
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

        disabled_items.map(el => {
            const deleteIcon = document.getElementById(el.id + '_delete');
            deleteIcon.addEventListener('click', () => {
                CART_DATA = CART_DATA.filter(item => item.id !== el.id);
    
                const parentContainer = document.getElementById(parent_container_id);
                const itemToRemove = document.getElementById(el.id + '_item_container');
                element.textContent = `Отсутствуют · ${CART_DATA.filter(el => el.left === 0).length} товара`;
                parentContainer.removeChild(itemToRemove);
            })
        })
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

    finalCostElement.innerHTML = `${finalPrice.toLocaleString()} сом`;

    costWithoutDiscountElement.innerHTML = `${priceWithoutDiscount.toLocaleString()} сом`

    discountElement.innerHTML = `−${discount.toLocaleString()} сом`;

    itemsQuantityElement.innerHTML = `${itemsQuantity.toLocaleString()} товара`


    const checkbox_image = document.getElementsByClassName('instantCheckbox_fill')[0]

    const orderButtonText = document.getElementById('order_button__text');
    const finalCost = document.getElementById('finalCost').innerText;


    if (!checkbox_image.classList.contains('hide')) {
        orderButtonText.innerText = `Оплатить ${finalCost}`;
    } 
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
    const inputValue = INNInput.value;
    INNInput.value = formatINN(inputValue);
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

card_items_info.map(card_item_info => {
     const checkbox_all = document.getElementById('choose_all_checkbox_container');

    const checkbox_image_all = checkbox_all.getElementsByClassName('choose_all_checkbox')[0]
    const empty_checkbox_image_all = checkbox_all.getElementsByClassName('choose_all_checkbox_empty')[0]

    const checkbox = document.getElementById(`${card_item_info.id}_checkbox`)

    checkbox.addEventListener('click', () => {

        const checkbox_image = checkbox.getElementsByClassName('checkbox_fill')[0]
        const empty_checkbox_image = checkbox.getElementsByClassName('checkbox_empty')[0]

        if (card_item_info.checked) {
            card_item_info.checked = false;
            checkbox_image.classList.add('hide');
            empty_checkbox_image.classList.remove('hide')
        } else {
            card_item_info.checked = true;
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
})
   

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

card_items_info.map((card_item_info ) => {

    const decrease = document.getElementById(`${card_item_info.id}_item_decrease`)
    const increase = document.getElementById(`${card_item_info.id}_item_increase`)
    const quantity = document.getElementById(`${card_item_info.id}_item_count`)
    const ITEM_INFO = CART_DATA.find(item => item.id === card_item_info.id);
    const left = ITEM_INFO.left


    const priceElement = document.getElementById(`${card_item_info.id}_price`)
    const priceWithoutDiscountElement = document.getElementById(`${card_item_info.id}_priceWithoutDiscount`)

    const priceElementMobile = document.getElementById(`${card_item_info.id}_price_mobile`)
    const priceWithoutDiscountElementMobile = document.getElementById(`${card_item_info.id}_priceWithoutDiscount_mobile`)

    decrease.addEventListener('click', () => {
        if (card_item_info.count > 1) {
            card_item_info.count -= 1
            quantity.innerHTML = card_item_info.count

            const price = ITEM_INFO.price.after * card_item_info.count
            const priceWithoutDiscount = ITEM_INFO.price.before * card_item_info.count
            const priceString = price.toLocaleString();
            const priceWithoutDiscountString = priceWithoutDiscount.toLocaleString() + ' сом';

            priceElement.innerHTML = priceString
            priceWithoutDiscountElement.innerHTML = priceWithoutDiscountString

            priceElementMobile.innerHTML = priceString
            priceWithoutDiscountElementMobile.innerHTML = priceWithoutDiscountString
            deleteDeliveryInfo();
            showFinalPrice();
            showDeliveries(DELIVERY_DATA, ['deliveries', 'deliveries_desktop'])
        }

        
    })

    increase.addEventListener('click', () => {
        if (Number.isFinite(left) && card_item_info.count < left || !Number.isFinite(left)) {
            card_item_info.count += 1
            quantity.innerHTML = card_item_info.count
            const price = ITEM_INFO.price.after * card_item_info.count
            const priceWithoutDiscount = ITEM_INFO.price.before * card_item_info.count
            const priceString = price.toLocaleString();
            const priceWithoutDiscountString = priceWithoutDiscount.toLocaleString() + ' сом';

            priceElement.innerHTML = priceString
            priceWithoutDiscountElement.innerHTML = priceWithoutDiscountString

            priceElementMobile.innerHTML = priceString
            priceWithoutDiscountElementMobile.innerHTML = priceWithoutDiscountString
            deleteDeliveryInfo();
            showFinalPrice();
            showDeliveries(DELIVERY_DATA, ['deliveries', 'deliveries_desktop'])
       }
  })
})


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
    {item: "Бишкек, улица Ахматбека Суюмбаева, 12/1", picked: true},
    {item: "Бишкек, улица Жукеева-Пудовкина, 77/1",  picked:false},
    {item: "Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1", picked:false}
]

const deliveryPoints = [
    {item: "Бишкек, улица Ахматбека Суюмбаева, 12/1", picked: true},
    {item: "Бишкек, улица Жукеева-Пудовкина, 77/1",  picked:false},
    {item: "Бишкек, микрорайон Джал, улица Ахунбаева Исы, 67/1", picked:false}
]
let currentDeliveryAddress = 0;
let currentDeliveryPoint = 0;

showDeliveryMethods(deliveryPoints, deliveryAddresses, 'points_container', 'addresses_container', currentDeliveryPoint, currentDeliveryAddress)


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
    showDeliveryMethods(deliveryPoints, deliveryAddresses, 'points_container', 'addresses_container', currentDeliveryPoint, currentDeliveryAddress)

})

openDeliveryModalFromTotal.addEventListener('click', () => {
    modalDeliveryContainer.classList.remove('hide');
    showDeliveryMethods(deliveryPoints, deliveryAddresses, 'points_container', 'addresses_container', currentDeliveryPoint, currentDeliveryAddress)

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

        currentDeliveryAddress = deliveryAddresses.findIndex(el => el.picked);

        deliveryAddress.innerHTML = deliveryAddresses[currentDeliveryAddress].item
        deliveryAddressMobile.innerHTML = deliveryAddresses[currentDeliveryAddress].item
        deliveryAddressInTotal.innerHTML = deliveryAddresses[currentDeliveryAddress].item

    } else {
        deliveryMethod.innerHTML = 'Пункт выдачи'
        deliveryMethodInTotal.innerHTML = 'Доставка в пункт выдачи'
        currentDeliveryPoint = deliveryPoints.findIndex(el => el.picked);

        deliveryAddress.innerHTML = deliveryPoints[currentDeliveryPoint].item
        deliveryAddressMobile.innerHTML = deliveryPoints[currentDeliveryPoint].item
        deliveryAddressInTotal.innerHTML = deliveryPoints[currentDeliveryPoint].item

    }

    modalDeliveryContainer.classList.add('hide');
})

// modal payment

const cards = [{
        img: mir,
        cardNumber: '1234 56•• •••• 1234',
        picked: true
    },
    {
        img: visa,
        cardNumber: '1234 56•• •••• 1234',
        picked: false
    },
    {
        img: mastercard,
        cardNumber: '1234 56•• •••• 1234',
        picked: false
    }
]

let payCard = 0;
showPayCards(cards, 'cardsContainer', payCard)




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

    payCard = cards.findIndex(el => el.picked);

    cardIcon.src = cards[payCard].img
    cardIconInTotal.src = cards[payCard].img

    cardNumber.innerHTML = cards[payCard].cardNumber
    cardNumberInTotal.innerHTML = cards[payCard].cardNumber

    modalPaymentContainer.classList.add('hide');
})

const openPaymentModal = document.getElementById('changePayCard')
const openPaymentModalFromTotal = document.getElementById('changePayCardInTotal')

openPaymentModal.addEventListener('click', () => {
    modalPaymentContainer.classList.remove('hide');
    showPayCards(cards, 'cardsContainer', payCard)
})

openPaymentModalFromTotal.addEventListener('click', () => {
    modalPaymentContainer.classList.remove('hide');
    showPayCards(cards, 'cardsContainer', payCard)
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