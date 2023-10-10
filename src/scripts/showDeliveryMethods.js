import picked from '../images/icons/picked.svg'
import notPicked from '../images/icons/notPicked.svg'



const showDeliveryMethods = (points, addresses, pointsContainerId, addressesContainerId, currentDeliveryPoint, currentDeliveryAddress) => {
    const pointsContainer = document.getElementById(pointsContainerId);
    const addressesContainer = document.getElementById(addressesContainerId);
    
    if (!pointsContainer || !addressesContainer) {
        console.error("Container not found.");
        return;
    }
    pointsContainer.innerHTML = '';
    addressesContainer.innerHTML = '';

    const pointHeader = document.createElement('p');
    pointHeader.classList.add('header');
    pointHeader.innerText = 'Мои адреса';

    const addressesHeader = document.createElement('p');
    addressesHeader.classList.add('header');
    addressesHeader.innerText = 'Мои адреса';

    addressesContainer.appendChild(addressesHeader);

    const pickedPointIndex = points.findIndex(el => el.picked);
    if (pickedPointIndex !== currentDeliveryPoint) {
        points[pickedPointIndex].picked = false;
        points[currentDeliveryPoint].picked = true
    }

    const pickedAddressIndex = addresses.findIndex(el => el.picked);
    if (pickedAddressIndex !== currentDeliveryAddress) {
        addresses[pickedAddressIndex].picked = false;
        addresses[currentDeliveryAddress].picked = true
    }

    points.map((item, index) => {
        const point = document.createElement('div')
        point.classList.add('point_container');

        point.innerHTML = `<div class="point" id="${index}_point_switch">
            <span class="select" >
            <img src="${picked}" alt=""  class="picked ${index === currentDeliveryPoint ? '' : 'hide'}">
            <img src="${notPicked}" alt=""  class="notPicked ${index === currentDeliveryPoint ? 'hide' : ''}">
            </span>
            <span class="address"><span>${item.item}</span><span class="footer">Пункт выдачи</span></span>
            </div>
            <span class="delete_point">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"/>
                </svg>
            </span>
        </div>`;

        pointsContainer.appendChild(point);
    })


    addresses.map((item, index) => {
        const point = document.createElement('div')
        point.classList.add('point_container');

        point.innerHTML = `<div class="point" id="${index}_address_switch">
            <span class="select" >
            <img src="${picked}" alt=""  class="picked ${index === currentDeliveryAddress ? '' : 'hide'}">
            <img src="${notPicked}" alt=""  class="notPicked ${index === currentDeliveryAddress ? 'hide' : ''}">
            </span>
            <span class="address">${item.item}</span>
            </div>
            <span class="delete_point">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z"/>
                </svg>
            </span>
        </div>`;

        addressesContainer.appendChild(point);
    })

    
points.map((point,index) => {
    const selectPoint = document.getElementById(`${index}_point_switch`)

    selectPoint.addEventListener('click', () => {
        if (!point.picked) {
            const prevPickedIndex = points.findIndex(el => el.picked);
            const prevSelectPoint = document.getElementById(`${prevPickedIndex}_point_switch`)
            const prevPickedIcon = prevSelectPoint.getElementsByClassName('picked')[0]
            const prevNotPickedIcon = prevSelectPoint.getElementsByClassName('notPicked')[0]
            prevPickedIcon.classList.add('hide')
            prevNotPickedIcon.classList.remove('hide')

            const pickedIcon = selectPoint.getElementsByClassName('picked')[0]
            const notPickedIcon = selectPoint.getElementsByClassName('notPicked')[0]

            pickedIcon.classList.remove('hide')
            notPickedIcon.classList.add('hide')

            point.picked = true;
            for(let i = 0; i<points.length; i++) {
                if (i !== index)
                    points[i].picked = false
            }
        }
    })

})

addresses.map((address,index) => {
    const selectAddress = document.getElementById(`${index}_address_switch`)

   

    selectAddress.addEventListener('click', () => {
        console.log(addresses)
        if (!address.picked) {
            const prevPickedIndex = addresses.findIndex(el => el.picked);
            const prevSelectAddress = document.getElementById(`${prevPickedIndex}_address_switch`)
            const prevPickedIcon = prevSelectAddress.getElementsByClassName('picked')[0]
            const prevNotPickedIcon = prevSelectAddress.getElementsByClassName('notPicked')[0]
            prevPickedIcon.classList.add('hide')
            prevNotPickedIcon.classList.remove('hide')

            const pickedIcon = selectAddress.getElementsByClassName('picked')[0]
            const notPickedIcon = selectAddress.getElementsByClassName('notPicked')[0]

            pickedIcon.classList.remove('hide')
            notPickedIcon.classList.add('hide')

            address.picked = true;
            for(let i = 0; i<addresses.length; i++) {
                if (i !== index)
                    addresses[i].picked = false
            }

        }
    })

})

}

export default showDeliveryMethods
