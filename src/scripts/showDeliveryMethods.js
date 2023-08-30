import picked from '../images/icons/picked.svg'
import notPicked from '../images/icons/notPicked.svg'



const showDeliveryMethods = (points, addresses, pointsContainerId, addressesContainerId) => {
    const pointsContainer = document.getElementById(pointsContainerId);
    const addressesContainer = document.getElementById(addressesContainerId);
    
    if (!pointsContainer || !addressesContainer) {
        console.error("Container not found.");
        return;
    }

    points.map((item, index) => {
        const point = document.createElement('div')
        point.classList.add('point_container');

        point.innerHTML = `<div class="point">
            <span class="select" id="${index}_point_switch">
            <img src="${picked}" alt=""  class="picked ${index === 0 ? '' : 'hide'}">
            <img src="${notPicked}" alt=""  class="notPicked ${index === 0 ? 'hide' : ''}">
            </span>
            <span class="address"><span>${item}</span><span class="footer">Пункт выдачи</span></span>
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

        point.innerHTML = `<div class="point">
            <span class="select" id="${index}_address_switch">
            <img src="${picked}" alt=""  class="picked ${index === 0 ? '' : 'hide'}">
            <img src="${notPicked}" alt=""  class="notPicked ${index === 0 ? 'hide' : ''}">
            </span>
            <span class="address">${item}</span>
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


}

export default showDeliveryMethods
