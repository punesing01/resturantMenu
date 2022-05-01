 class PepperList extends HTMLElement {
    constructor(){
        super();
    
    const shadow = this.attachShadow({mode:'open'});

    const modalContainer = document.createElement('div');
    modalContainer.setAttribute('class','side-modal-container');

    const modalContent = document.createElement('div');
    modalContent.setAttribute('class','side-modal-content');

    const modalCloseButton = document.createElement('span');
    modalCloseButton.setAttribute('class','side-modal-close-button');

    const listContainer = document.createElement('div');
    listContainer.setAttribute('class','side-bar-list-container');

    const ul = document.createElement('ul');
    ul.setAttribute('class','side-bar-list');

    const list = document.createElement('li');
    //list.setAttribute('class',this.listElementClass);

    const aLink1 = document.createElement('a');
    aLink1.textContent='Menu';

    const aLink2 = document.createElement('a');
    aLink2.textContent='Location';

    const aLink3 = document.createElement('a');
    aLink3.textContent='About';

    const aLink4 = document.createElement('a');
    aLink4.textContent='Order Now';

    //this.setAttribute('class',this.anchorClass);

    modalContainer.appendChild(modalContent);
    modalContent.appendChild(modalCloseButton);
    modalContent.appendChild(listContainer);

    listContainer.appendChild(ul);
    
    ul.appendChild(list);
    list.append(aLink1);
    ul.appendChild(list);
    list.append(aLink2);
    ul.appendChild(list);
    list.append(aLink3);
    ul.appendChild(list);
    list.append(aLink4);

    const style = document.createElement('style');
    console.log(style.isConnected);


    style.textContent = `{
        .side-modal{
            display: none;
            width:70%;
            background-color: white;
            border: 2px solid gray;
            height:100%;
            position: fixed;
            left:0;
            top:0;
            z-index:2;
        }

        .side-modal-container{
            display: none;
            position: fixed;
            top:0;
            left:0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.673);
        }
        
        .side-modal-content{
            width: 60%;
            background-color: #f1e8c1;
            height: 100%;
            animation-name: side-bar-fade-in;
            animation-duration: 1s;
        }
        
        .side-bar-list-container{
            height: 100%;
        }
         
          .side-bar-list{
            list-style-type:none;
            font-size: 1.5rem;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            gap:2rem;
            /*padding: 2rem 0; */
            height: 100%;
          }
        
          .side-bar-list a{
            color:maroon;
          }
        
          .side-modal-close-button{
            font-size: 3rem;
            float: right;
            padding: 20px;
            background-color: whitesmoke;
            color: lightgrey;
            cursor: pointer;
          }

          
        @media(min-width:910px){
            .side-modal-container{
                display:none;
            }
        }
    }
    `;
    shadow.appendChild(style);
    shadow.appendChild(modalContainer);
    console.log(style.isConnected);
}

displayList(){
    const list = this.shadowRoot.querySelector('.side-modal-container');
    
}

}

customElements.define('pepper-list',PepperList);
