 
const menu = [
    {
        id:1,
        category:'breakfast',
        description: 'Assorted biscuits',
        price:12,
        img: 'imgs/assorted_biscuits.jpg',
        text:'Make Teatime Exciting With A Fresh, Buttery And Variety Of Assorted Cookies. From Chocolate, Strawberry-Filled, Almond, Pistachio, Theres Something For Everyone!'
    },
    {
        id:2,
        category:'breakfast',
        description: 'Egg sandwitch',
        price:18,
        img: 'imgs/avocado_egg_sandwitch.jpg',
        text:'Fresh avocado sandwitch with a tiny bit of mayonnaise on top of soft boiled eggs, celery, lemon juice, and herbs'
    },
    {
        id:3,
        category:'breakfast',
        description: 'Egg muffin',
        price:15,
        img: 'imgs/egg_muffin.jpg',
        text:'This is an excellent source of protein. We place a freshly cracked Grade A egg on a toasted English Muffin topped with real butter and add lean Canadian bacon and melty American cheese. '

    },
    {
        id:7,
        category:'lunch',
        description: 'Beef sandwitch',
        price:20,
        img: 'imgs/beef_sandwitch.jpg',
        text:'Enjoy lunch with Italian Beef Sandwiches. Topped with drained giardiniera and shredded cheese, these Italian Beef Sandwiches are delicious and ready in under a half-an-hour.'
    },
    {
        id:13,
        category:'lunch',
        description: 'Cod fish',
        price:25,
        img: 'imgs/cod_fish_lunch.jpg',
        text:'Baked Cajun Garlic Butter Cod is a tender and juicy cod filet baked in a buttery cajun seasoning with garlic cloves and olive oil making this cod a flavorful and delicious lunch'
    },
    {
        id:16,
        category:'lunch',
        description: 'Egg with rice',
        price:18,
        img: 'imgs/egg_and_rice.jpg',
        text:'Brown rice—higher in fiber and other nutrients than its white counterpart—is the perfect vehicle for this quick, protein-heavy lunch.'
    },
    {
        id:17,
        category:'lunch',
        description: 'Egg salad',
        price:18,
        img: 'imgs/egg_salad.jpg',
        text:'Egg salad mixed with seasonings in the form of herbs, spices and other ingredients, bound with mayonnaise.'
    },
    {
        id:18,
        category:'breakfast',
        description: 'Fresh fruits',
        price:22,
        img: 'imgs/fruits.jpg',
        text:'Fresh fruit, harvest crunch*, chia and coconut served with a kale-mango smoothie made with plain yogurt.'
    },
     {
        id:19,
        category:'drinks',
        description: 'Fruity smoothie',
        price:16,
        img: 'imgs/fruity_smoothie.jpg',
        text:'This is a great smoothie consisting of fruit, fruit juice and ice. Any kind of berry, mangos, papayas, kiwi fruit, et cetera make a great smoothie. Experiment with your favorites!'
    },
    {
        id:20,
        category:'lunch',
        description: 'Currey with rice',
        price:22,
        img: 'imgs/indian_currey.jpg',
        text:'Tender pieces of chicken, carrots, and potatoes cooked in a rich savory curry sauce, this Indian version of curry is a must-have for your family meal. '
    }, {
        id:23,
        category:'drinks',
        description: 'Latte',
        price:12,
        img: 'imgs/latte.jpg',
        text:'Extra-smooth Espresso and milk—flavoured with hazelnut syrup and then poured over ice—creates an ideal cup for those who love a lighter-roasted coffee.'
    }, {
        id:25,
        category:'breakfast',
        description: 'Oatmeal yogurt',
        price:12,
        img: 'imgs/oatmeal_greek_yogurt.jpg',
        text:'A blend of rolled and steel-cut oats with dried fruit, a nut medley and brown sugar as optional toppings. Hearty. Traditional. Classic.- VEGETARIAN'
    },
    {
        id:30,
        category:'lunch',
        description: 'Grilled pork belly',
        price:26,
        img: 'imgs/pork_belly.jpg',
        text:'Tender, gelatinous and aromatic, Chinese red braised pork belly is scrumptious and comforting.'
    },
    {
        id:31,
        category:'lunch',
        description: 'Potato fries',
        price:10,
        img: 'imgs/potato_fries.jpg',
        text:'Fries made from locally sourced potatoes, cooked in sunflower oil blend and ready to be enjoyed with any of our internationally inspired dipping sauces. '
    },
    {
        id:33,
        category:'lunch',
        description: 'Pepper Soup',
        price:10,
        img: 'imgs/soup.jpg',
        text:'A rich flavoured soup made with sweet, red peppers, garlic, sun dried tomatoes topped with  homemade basil pesto and a creme fraiche swirl.'
    },
    {
        id:34,
        category:'lunch',
        description: 'Spaghetti',
        price:18,
        img: 'imgs/spegattie.jpg',
        text:'Served with a simple salad of spring vegetables and finish with a creamy chocolate treat for a kid-friendly lunch menu that has plenty of grown-up appeal.'
    },
    {
        id:35,
        category:'lunch',
        description: 'Spinach sandwitch',
        price:16,
        img: 'imgs/spinach_sandwitch.jpg',
        text:'Veggie sandwiches made with spinach and corn cooked in a creamy sauce. They also make a great lunch!'
    },
];

const menuItems = document.querySelector('.menu-section');
const menuOptions = document.querySelectorAll('.menu-bar nav li a');
const navSideModal = document.querySelector('#side-modal');
const section = document.querySelector('section');
const menuHeader = document.querySelector('h1');
const navBar = document.querySelector('aside:nth-of-type(1)');
const orderToCartClose =document.querySelector('.order-to-cart__content span');
const orderToCartContainer = document.querySelector('.order-to-cart__container');

const orderModal = document.querySelector('.order-modal-container');
const plus=document.querySelector('.counter-container__div div:nth-of-type(3)');
const minus=document.querySelector('.counter-container__div div:nth-of-type(1)');
const count=document.querySelector('.counter-container__div div:nth-of-type(2)');
const addToCartButton=document.querySelector('.order-to-cart__button');
const displayRoot=document.querySelector('.order-modal-content');
const toastMessage=document.querySelector('.toast_message');

const cart=document.querySelector('.cart');
const cartContainer=document.querySelector('.cart-container');

const orderNow = document.querySelector('.modal-bar-list li:nth-of-type(5) a');
const burgerMenu = document.querySelector('#burger-menu');
const orderSummaryModalContainer= document.querySelector('.order-summary-modal__container');
const orderSummaryModalClose=document.querySelector('.order-summary-modal__content > span');
const orderSummaryDetails = document.querySelector('.order-summary-details');
const orderSummaryDetailsHeader=document.querySelector('.order-summary-modal__content h4')
 
const mainHeader = document.querySelector('h1');
const ourMenu = document.querySelector('.modal-bar-list li:nth-of-type(3) a');

let counter = parseInt(count.innerText);

let sideModal;
let itemsAddedToCart = [];
let itemNumber = 0;
let orderSummayrHeader;
let editItems;
let deleteItems;
let orderModalCloseButton;
let renderedSideCart;
let itemNumbers = [];
window.addEventListener('DOMContentLoaded',function(){
     displayMenu(menu);
});

console.log(menuOptions);
Array.from(menuOptions).forEach(function(menuBarItem){
    menuBarItem.addEventListener('click', function(event){
        menuBarItem.classList.add('.active');
        console.log(event.target.innerText);
        console.log('dataid=',event.currentTarget.dataset.id);
        let seletedMenu = menu.filter(function(item){
            return (event.target.innerText.toLowerCase() === item.category) ? item : null;
        });
        console.log(seletedMenu);
        if(event.currentTarget.dataset.id === 'all'){
            displayMenu(menu);
        } else displayMenu(seletedMenu);
})});

function displayMenu(menuToDisplay){
    const newMenu = menuToDisplay.map(function(item){
        return `
        <div>
            <artcile class="item-container">
                 <div class="item-image-container">
                    <img class="item-image" src="${item.img}" alt="${item.description}">
                </div>
                <div class="item-detail-container">
                    <div class="item-text">
                      <p>${item.description}</p>
                      <p>$${item.price}</p>
                      <div class="item-order-quantity"></div>
                    </div>
                    <div class="item-desc">
                        <p>${item.text}</p>
                    </div>
                </div>
               </artcile>
        </div>`;
    });
    menuItems.innerHTML = newMenu.join('');
    return newMenu.join('');
}

sideModal = document.createElement('div');
const modalList = `
                <div class="side-modal-container">
                    <div class="side-modal-content">
                        <span class="side-modal-close-button">&times;</span>
                        <div class="side-bar-list-container">
                            <ul class="side-bar-list">
                                <li>
                                    <a>Menu</a>
                                </li>
                                <li>
                                    <a>Location</a>
                                </li>
                                <li>
                                    <a>About</a>
                                </li>
                                <li>
                                    <a>Order Now</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>`;

sideModal.innerHTML = modalList;
navSideModal.append(sideModal);

const sideModalCloseButton = document.querySelector('.side-modal-close-button');
const sideModalContainer = document.querySelector('.side-modal-container');
const closeCart = document.querySelector('.cart > div');

sideModalCloseButton.addEventListener('click',function(){
    sideModalContainer.style.display='none';
});

burgerMenu.addEventListener('click',function(){
    sideModalContainer.style.display='flex';
    const sideModalOrderNow = document.querySelector('#side-modal .side-bar-list  li:nth-of-type(4) a'); 
    const menuBar = document.querySelector('.menu-bar');

    sideModalOrderNow.addEventListener('click',function(){
        sideModalContainer.style.display='none';
        menuBar.style.display='none';
        orderModal.style.display='block';

        displayMenuInModal();
        const imageWidth = document.querySelectorAll('.order-modal-content .item-image-container img');
        console.log(imageWidth);
    
        for(image of imageWidth){
            image.style.width="100%";
        }
    });
});

window.addEventListener('click',function(event){
    if(event.target == sideModalContainer){
        sideModalContainer.display='none';
    }
});

orderNow.addEventListener('click',function(event){
    console.log('Order now');
    orderModal.style.display='block';
    //mainHeader.style.display='none';

    displayMenuInModal();
    const orderModalBackButton=document.querySelector('.order-modal-header__back');
    orderModalBackButton.addEventListener('click',function(){
        //displayRoot.style.display='none';
        orderModal.style.display='none';
    });
 });

window.addEventListener('click',function(event){
     if(event.target === sideModalContainer){
        sideModalContainer.style.display='none';
    }

    if(event.target === orderModal){
        orderModal.style.display='none';
    }

    if(event.target === displayRoot | event.target === orderModal){
        orderToCartContainer.style.display='none';
    }

    if(event.target === orderSummaryModalContainer){
        orderSummaryModalContainer.style.display='none';
    }
});

function displayMenuInModal(){
    const menuToDisplay = displayMenu(menu);
    const modalHeader = 
                        `<header class="order-modal-header">  
                            <div>
                                <span class="order-modal-header__back">&#x21e6;</span>
                                <span class="order-modal-close">&times;</span>
                                <h4 style="text-align:center;font-size:x-large;color:maroon;">Select items for your order</h4>
                            </div>
                        </header>`;
    displayRoot.innerHTML = modalHeader.concat(menuToDisplay);
    orderModalCloseButton = document.querySelector('.order-modal-close');
    const listOfFood = document.querySelectorAll('.order-modal-content .item-container');
  
    console.log('displayRoot=',listOfFood);

    Array.from(listOfFood).forEach(function(food,index,event){
        food.addEventListener('click',function(event){
            const itemName = food.querySelector('.item-detail-container .item-text p:nth-of-type(1)').textContent;
            const itemPrice=food.querySelector('.item-detail-container .item-text p:nth-of-type(2)').textContent;
            console.log('itemPrice=',itemPrice);
            const orderToCartContainer = document.querySelector('.order-to-cart__container');
            orderToCartContainer.style.display='block';
            const orderToCartContent = document.querySelector('.order-to-cart__content');
            const itemHeader = document.querySelector('.order-to-cart__content h4');
            itemHeader.textContent=itemName;
            count.innerText='1';
            counter=1;
            console.log('counter=',counter);
            addToCartButton.textContent = `Add - ${itemPrice}`;
            itemNumber=index; 
            itemNumbers.push(itemNumber);
        });
    });

    orderModalCloseButton.addEventListener('click',function(){
        console.log('Close order modal');
        orderModal.style.display='none';
    });
}

orderToCartClose.addEventListener('click',function(){
    orderToCartContainer.style.display='none'; 
    counter=1;
    count.innerText=counter;
 });

plus.addEventListener('click',function(){
  updateCount('+');
  updatePrice();
});

minus.addEventListener('click',function(){
  updateCount('-');
  updatePrice();
});

function updateCount(operation){
  if(operation === '+'){
    counter++;
  } else{ 
    if(counter > 0){
      counter--;
    }
  }
   count.innerText=counter;
 }

function updatePrice(){
     const itemDesc = document.querySelector('.order-to-cart__content h4');
     const itemPrice = menu.filter(function(item){
         return itemDesc.textContent === item.description? item.price : null; 
     });
     console.log(itemPrice[0].price);
     addToCartButton.textContent = `Add - $${(parseInt(itemPrice[0].price) * counter).toString()}`;
}

 addToCartButton.addEventListener('click',function(e){
    const itemChosen = document.querySelector('.order-to-cart__content h4');
    const itemQuantity = document.querySelector('.counter-container__div .count').textContent;
    const itemPrice =document.querySelector('.order-to-cart__button').textContent.substring(7);
    console.log('itemPrice=',itemPrice);
    console.log('itemChosen=',itemChosen.textContent);
    
    if(itemQuantity > 0){
        const itemKey = itemChosen.textContent;
        const addItem = {};
        addItem.itemName = itemChosen.textContent;
        addItem.itemPrice=itemPrice;
        addItem.quantity=itemQuantity;
        addItem.itemPricePerQuantity=itemQuantity > 1? parseInt(parseInt(itemPrice)/parseInt(itemQuantity)):itemPrice;
        itemsAddedToCart.push(addItem);
        showToaster('Item has been added to cart.','flex');
        orderToCartContainer.style.display='none';
        console.log(itemsAddedToCart);
    
        const orderedQuantity = document.querySelectorAll('.order-modal-content .item-order-quantity');
        orderedQuantity[itemNumber].innerText = itemQuantity;
        orderedQuantity[itemNumber].style.backgroundColor='maroon';
        orderedQuantity[itemNumber].style.color='white';
        const itemContainers = document.querySelectorAll('.order-modal-content .item-container');
        itemContainers[itemNumber].style.border='2px solid maroon';
        itemContainers[itemNumber].style.boxShadow='none';
        
        if(!document.querySelector('.side-bar-list .cart')){
            const sideBarListOrderNow = document.querySelector('.side-bar-list li:nth-of-type(4)');
            console.log('inserting side cart');
            const sideCart = `<li><div class="cart">
                                <div>&times;</div>
                                <div class="cart-container">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M96 0C107.5 0 117.4 8.19 119.6 19.51L121.1 32H541.8C562.1 32 578.3 52.25 572.6 72.66L518.6 264.7C514.7 278.5 502.1 288 487.8 288H170.7L179.9 336H488C501.3 336 512 346.7 512 360C512 373.3 501.3 384 488 384H159.1C148.5 384 138.6 375.8 136.4 364.5L76.14 48H24C10.75 48 0 37.25 0 24C0 10.75 10.75 0 24 0H96zM128 464C128 437.5 149.5 416 176 416C202.5 416 224 437.5 224 464C224 490.5 202.5 512 176 512C149.5 512 128 490.5 128 464zM512 464C512 490.5 490.5 512 464 512C437.5 512 416 490.5 416 464C416 437.5 437.5 416 464 416C490.5 416 512 437.5 512 464z"></path></svg>
                                </div>
                            </div></li>`;
            sideBarListOrderNow.insertAdjacentHTML('afterend',sideCart);
            renderedSideCart = document.querySelector('.side-bar-list .cart');
            renderedSideCart.style.display='flex';
    
            renderedSideCart.addEventListener('click',function(){
                console.log('Cart has been selected');
    
                const sideModalContainer = document.querySelector('.side-modal-container');
                     sideModalContainer.style.display='none';
                     displayOrderDetails();
                 }
             );
    
             const sideCartClose = document.querySelector('.side-bar-list .cart div:first-of-type');
             sideCartClose.addEventListener('click',function(e){
                let closeFlag = window.confirm('Do you wish to delete your cart?');
                if(closeFlag){
                    renderedSideCart.style.display='none';
                }
             });
        } else  renderedSideCart.style.display='flex';
    }
 });

function toggleCartAndOrderNowButton(counterStatus){
    cart.style.display= counterStatus;
    if(cart.style.display === 'flex'){
        console.log('display cart');
        console.log('hide order now');
        //orderNow.style.display='none';
    } else if(cart.style.display='none'){
        orderNow.style.display='flex';
        console.log('display order now');
     }else orderNow.style.display=counterStatus;
}

(function createCartHeader(){
    orderSummayrHeader = document.createElement('div');
    orderSummayrHeader.setAttribute('class','order-summary-row');
    orderSummayrHeader.setAttribute('style','gap: 0.7rem;');
    
    const orderItemName= document.createElement('div');  
    orderItemName.textContent='Item Name';
    orderItemName.setAttribute('style','flex-basis: 20%;');

    const orderItemQuatity= document.createElement('div');  
    orderItemQuatity.textContent='Quantity';
    const orderItemPrice= document.createElement('div');  
    orderItemPrice.textContent='Item price';
    const orderItemTotalPrice= document.createElement('div');  
    orderItemTotalPrice.textContent='Total Price';

    orderSummayrHeader.append(orderItemName);
    orderSummayrHeader.append(orderItemQuatity);
    orderSummayrHeader.append(orderItemPrice);
    orderSummayrHeader.append(orderItemTotalPrice);
})();

cartContainer.addEventListener('click',function(e){
   console.log('Cart has been selected');
        displayOrderDetails();
    }
);

closeCart.addEventListener('click',function(){
    console.log('Close cart');
    let closeFlag = window.confirm('Do you wish to delete your cart?');
    if(closeFlag){
        showToaster('Your cart has been deleted','none');
        const orderSummary = document.querySelector('.order-modal-container > div');
        orderSummary.innerHTML = '';
        //orderModal.style.display='none';
        orderModal.style.display='none';
        const menuBar = document.querySelector('.menu-bar');
        menuBar.style.display='block';
        orderSummaryDetails.innerHTML='';
        itemsAddedToCart=[];
    }
});

function showToaster(message,showCart){
    toastMessage.textContent = message;
    toastMessage.style.display='block';
     setTimeout(()=>{
        toastMessage.style.display='none';
        toggleCartAndOrderNowButton(showCart);
    },2000);
}

orderSummaryModalClose.addEventListener('click',function(){
    console.log('Close order summary');
    orderSummaryModalContainer.style.display='none';
});

function displayOrderDetails(){
    console.log('itemsAddedToCart=',itemsAddedToCart);
    orderSummaryDetailsHeader.insertAdjacentElement('afterend',orderSummayrHeader);
         const orderToDisplay = itemsAddedToCart.map(function(item){
            return  `<div>
                         <div class="order-summary-row">
                            <div>${item.itemName}</div>
                            <div>${item.quantity}</div>
                            <div>$${item.itemPricePerQuantity}</div>
                            <div>$${item.itemPrice}</div>
                            <div class="edit">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M421.7 220.3L188.5 453.4L154.6 419.5L158.1 416H112C103.2 416 96 408.8 96 400V353.9L92.51 357.4C87.78 362.2 84.31 368 82.42 374.4L59.44 452.6L137.6 429.6C143.1 427.7 149.8 424.2 154.6 419.5L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3zM492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75z"/></svg>
                            </div>
                            <div class="delete">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M135.2 17.69C140.6 6.848 151.7 0 163.8 0H284.2C296.3 0 307.4 6.848 312.8 17.69L320 32H416C433.7 32 448 46.33 448 64C448 81.67 433.7 96 416 96H32C14.33 96 0 81.67 0 64C0 46.33 14.33 32 32 32H128L135.2 17.69zM31.1 128H416V448C416 483.3 387.3 512 352 512H95.1C60.65 512 31.1 483.3 31.1 448V128zM111.1 208V432C111.1 440.8 119.2 448 127.1 448C136.8 448 143.1 440.8 143.1 432V208C143.1 199.2 136.8 192 127.1 192C119.2 192 111.1 199.2 111.1 208zM207.1 208V432C207.1 440.8 215.2 448 223.1 448C232.8 448 240 440.8 240 432V208C240 199.2 232.8 192 223.1 192C215.2 192 207.1 199.2 207.1 208zM304 208V432C304 440.8 311.2 448 320 448C328.8 448 336 440.8 336 432V208C336 199.2 328.8 192 320 192C311.2 192 304 199.2 304 208z"/></svg>
                            </div>
                         </div>
                    </div>`;
        });
 
    if(itemsAddedToCart.length){
        orderSummaryDetails.setAttribute('style','color:black;');
        orderSummaryDetails.innerHTML=orderToDisplay.join('');
    } else {
        orderSummaryDetails.innerHTML=`<div>No more items are found in the cart...</div>`
        orderSummaryDetails.setAttribute('style','text-align:center;font-weight:bolder;color:red;');
        clearCart();
    }
    orderSummaryModalContainer.style.display='block';
    editItems = document.querySelectorAll('.edit svg');
    deleteItems = document.querySelectorAll('.delete svg');

    editItems.forEach(function(edit,index){
        console.log('editing....');
        edit.addEventListener('click',function(){
            console.log(`${index} item is clicked`);
        });
    });

    deleteItems.forEach(function(deleteItem,index){
        console.log('deleting....');
        deleteItem.addEventListener('click',function(){
            console.log(`${index} item is clicked`);
            console.log(itemsAddedToCart[index]);
            itemsAddedToCart.splice(index,1);
            
            const orderedQuantity = document.querySelectorAll('.order-modal-content .item-order-quantity');
            //Remove the select quantity maroon div from the item.
            for(let itemNumber of itemNumbers){
                orderedQuantity[itemNumber].innerText = '';
                orderedQuantity[itemNumber].style.backgroundColor='#E4EBF2';
            }
            
            //re-render again after every delete operation
            displayOrderDetails();
        });
    });
}

function clearCart(){
    cart.style.display='none'; 
    renderedSideCart.style.display='none';
    counter=1;
    count.innerText=counter;
}