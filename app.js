 
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

const orderModalCloseButton = document.querySelector('.order-modal-close');
const orderModal = document.querySelector('.order-modal-container');

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
        </div>`;
    });
   
    menuItems.innerHTML = newMenu.join('');
    return newMenu;
}

const burgerMenu = document.querySelector('#burger-menu');
const orderNow = document.querySelector('.modal-bar-list li:nth-of-type(5) a');
const cart = document.querySelector('.burger-menu-bar-list li:last-of-type div');

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
 
sideModalCloseButton.addEventListener('click',function(){
    sideModalContainer.style.display='none';
});

burgerMenu.addEventListener('click',function(){
    console.log('hello');
    sideModalContainer.style.display='flex';
});

window.addEventListener('click',function(event){
    if(event.target == sideModalContainer){
        sideModalContainer.display='none';
    }
});

orderNow.addEventListener('click',function(event){
    console.log('Order now');
    orderModal.style.display='block';
    const menuToDisplay = displayMenu(menu);
    const displayRoot = document.querySelector('.order-modal-content');
    displayRoot.innerHTML = menuToDisplay;

    const listOfFood = document.querySelectorAll('.order-modal-content .item-detail-container .item-text p:nth-of-type(2)');

    console.log('displayRoot=',listOfFood);

    Array.from(listOfFood).forEach(function(food){
        food.addEventListener('click',function(event){
            console.log(event.target.outerText);
        });
    
    });
    


 });

orderModalCloseButton.addEventListener('click',function(){
    orderModal.style.display='none';
});

window.addEventListener('click',function(event){
    console.log('here');
    if(event.target === sideModalContainer){
        sideModalContainer.style.display='none';
    }

    if(event.target === orderModal){
        orderModal.style.display='none';
    }
});