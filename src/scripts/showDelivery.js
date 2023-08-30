

export default function showDelivery(item, parent_container_ids) {
    const deliveriesContainer = document.getElementById(parent_container_ids[0]);
    const deliveriesDesktopContainer = document.getElementById(parent_container_ids[1]);
    
    if (!deliveriesDesktopContainer || !deliveriesContainer) {
        console.error("Container not found.");
        return;
    }

    const onePeriodDelivery = document.createElement('div');
    onePeriodDelivery.classList.add('items_to_deliver_section');

    const dateElement = document.createElement('h3');
    dateElement.classList.add('date')
    dateElement.innerText = item.date;
    onePeriodDelivery.appendChild(dateElement);
    

    const deliveryItems_for_Desktop = document.createElement('div');
    deliveryItems_for_Desktop.classList.add('items_to_deliver_container', 'desktop_only');

    const deliveryItems_for_Mobile = document.createElement('div');
    deliveryItems_for_Mobile.classList.add('items_to_deliver_container', 'mobile_only');
    
    item.items.map(el => {
        if (el.count === 0) return
        const itemNodeForDesktop = document.createElement('div');
        itemNodeForDesktop.classList.add('item_card');
    
        const itemNodeForMobile = document.createElement('div');
        itemNodeForMobile.classList.add('item_card');
    
        itemNodeForDesktop.innerHTML = `<img src="${el.path_to_img}"/>
            <span class="item_quantity_container ${el.count > 9 ? '' :'figure'}">
                <span class="item_quantity">${el.count}</span>
            </span>`;
        
        itemNodeForMobile.innerHTML = `<img src="${el.path_to_img}"/>
            <span class="item_quantity_container ${el.count > 9 ? '' :'figure'}">
                <span class="item_quantity">${el.count}</span>
            </span>`;
    
        deliveryItems_for_Desktop.appendChild(itemNodeForDesktop);
        deliveryItems_for_Mobile.appendChild(itemNodeForMobile);

    })

    onePeriodDelivery.appendChild(deliveryItems_for_Mobile);

    deliveriesContainer.appendChild(onePeriodDelivery);
    deliveriesDesktopContainer.appendChild(deliveryItems_for_Desktop);


    return;
}

                        //     <div class="items_to_deliver_section">
                        //         <h3>5—6 февраля</h3>
                        //         <div class="items_to_deliver_container mobile_only">
                        //             <div class="item_card">
                        //                 <img src="images/items/photo1.png" alt="item1" />
                        //                 <span class="item_quantity_container figure">
                        //                     <span class="item_quantity">2</span>
                        //                 </span>
                        //             </div>
                        //             <div class="item_card">
                        //                 <img src="images/items/photo2.png" alt="item2" />
                        //                 <span class="item_quantity_container">
                        //                     <span class="item_quantity">150</span>
                        //                 </span>
                        //             </div>
                        //             <div class="item_card">
                        //                 <img src="images/items/photo2.png" alt="item2" />
                        //                 <span class="item_quantity_container">
                        //                     <span class="item_quantity">150</span>
                        //                 </span>
                        //             </div>
                        //         </div>
                        //     </div>


                        //     <div class="values" id="deliveries_desktop">
            
                        //     <div class="items_to_deliver_container desktop_only">
                        //         <div class="item_card">
                        //             <img src="images/items/photo1.png" alt="item1" />
                        //             <span class="item_quantity_container figure">
                        //                 <span class="item_quantity">2</span>
                        //             </span>
                        //         </div>
                        //         <div class="item_card">
                        //             <img src="images/items/photo2.png" alt="item2" />
                        //             <span class="item_quantity_container">
                        //                 <span class="item_quantity">150</span>
                        //             </span>
                        //         </div>
                        //         <div class="item_card">
                        //             <img src="images/items/photo2.png" alt="item2" />
                        //             <span class="item_quantity_container">
                        //                 <span class="item_quantity">150</span>
                        //             </span>
                        //         </div>
                        //     </div>
                        // </div>