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
        price:8,
        img: 'imgs/latte.jpg',
        text:'Extra-smooth Espresso and milk—flavoured with hazelnut syrup and then poured over ice—creates an ideal cup for those who love a lighter-roasted coffee.'
    }, {
        id:25,
        category:'breakfst',
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
        price:9,
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
//const plus = document.querySelectorAll('.container div:nth-of-type(3)');
////const minus = document.querySelectorAll('.container div:nth-of-type(1)');
//const count = document.querySelectorAll('.container div:nth-of-type(2)');
let plus, minus, count;

let sideModal;

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
                    </div>
                    <div class="item-desc">
                        <p>${item.text}</p>
                    </div>
                </div>
               </artcile>
                <div class="counter-container">
                        <div class="container">
                            <div class="item">-</div>
                            <div class="item count">0</div>
                            <div class="item">+</div>
                        </div> 
                        <button class="add-button">Add</button>
                </div>
        </div>`;
    });
   
    menuItems.innerHTML = newMenu.join('');

    /*Check if the cart is opened previously*/
    const cart =  document.querySelector('.cart');
    if(cart!==null && cart.style.display==='flex'){
        showOrHideCounters('flex');
        //scanForCounters();
    } else console.log('cart is not yet opened');   
}

/*fetch('nav.html')
.then(res => res.text())
.then(text => {
    let oldElement = document.querySelector('#nav-placeholder');
    let newElement = document.createElement('div');
    newElement.innerHTML = text;
    oldElement.parentNode.replaceChild(newElement,oldElement);
 
});*/
const modal = document.querySelector('#modal');
const orderNow = document.querySelector('.modal-bar-list li:nth-of-type(5) a');
const cart = document.querySelector('.modal-bar-list li:last-of-type div');
const closeButton = document.createElement('div');

closeButton.innerText = 'x';
closeButton.classList.add('close-button');

sideModal = document.createElement('div');
const modalList = `<aside>
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
                    </ul></aside>`
sideModal.innerHTML = modalList;
sideModal.append(closeButton);
const overlay = document.createElement('div');
overlay.style.display='none';
sideModal.append(overlay);

modal.addEventListener('click',function(){
    console.log('modal has been clicked!');
    overlay.style.display='block';

    closeButton.style.display='block';
    sideModal.classList.add('side-modal');
    sideModal.classList.toggle('active');
    navSideModal.append(sideModal);
});

closeButton.addEventListener('click',function(){
    sideModal.classList.remove('active');
});

orderNow.addEventListener('click',function(event){
    showOrHideCounters('flex');
    scanForCounters();
});

section.addEventListener('click',function(){
    sideModal.classList.remove('active');
});

menuHeader.addEventListener('click',function(){
    sideModal.classList.remove('active');
});

function updateCount(operation,index){
    console.log('Updating count');
    //console.log(count);
    let counter = parseInt(count[index].innerText);
    if(operation === '+'){
        counter++;
    } else{ 
        if(counter > 0){
            counter--;
        }
    }
    console.log('counter=',counter);
    count[index].innerText=counter;
}

const closeCart = document.querySelector('.cart > div');

closeCart.addEventListener('click',function(){
    console.log('Close cart');
     showOrHideCounters('none');
});

function scanForCounters(){
    console.log('display counters');
    plus = document.querySelectorAll('.container div:nth-of-type(3)');
    minus = document.querySelectorAll('.container div:nth-of-type(1)');
    count = document.querySelectorAll('.container div:nth-of-type(2)');

     Array.from(plus).forEach(function(plusButton,index){
        plusButton.addEventListener('click',function(){
            console.log('adding for button',index);
            updateCount('+',index);
        });
    });
    
    Array.from(minus).forEach(function(minusButton,index){
        minusButton.addEventListener('click',function(){
            console.log('minus');
            updateCount('-',index);
        });
    });
}

function showOrHideCounters(counterStatus){
    const container = document.querySelectorAll('.container');
    const counterContainer = document.querySelectorAll('.counter-container');
    const cart =  document.querySelector('.cart');
    const orderNow = document.querySelector('.modal-bar-list li:nth-of-type(5) a');

    cart.style.display= counterStatus;
    if(cart.style.display === 'flex'){
        console.log('display cart');
        console.log('hide order now');
        orderNow.style.display='none';
    } else if(cart.style.display='none'){
        orderNow.style.display='flex';
        console.log('display order now');
        resetCount();
    }else orderNow.style.display=counterStatus;


    Array.from(counterContainer).forEach(function(counter){
        counter.style.display=counterStatus;
    });
    
    Array.from(container).forEach(function(item){
        item.style.display=counterStatus;
    });
}

function setCartStatus(status){
    const cart =  document.querySelector('.cart');
    cart.style.display= status;
}

function resetCount(){
    console.log('reseting counter');
     Array.from(count).forEach(counter => {
        counter.innerText='0';
    });   
    Array.from(count).forEach(counter => {
        console.log(counter.innerText);
    });   
}