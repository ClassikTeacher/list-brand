const listBtands = [
{
    img: "./img/Avatar-1.jpg",
    title: 'Avokado Roll',
    status: 'published',
    published: true
},
{
    img: "./img/Avatar.jpg",
    title: 'Lobster Roll Combo',
    status: 'published',
    published: true
},
{
    img: "./img/Avatar-3.jpg",
    title: 'Vegetable Salad',
    status: 'not published',
    published: false
},
{
    img: "./img/Avatar.jpg",
    title: 'Orange Fresh',
    status: 'published',
    published: true
},
{
    img: "./img/Avatar.jpg",
    title: 'Lobster Roll Combo',
    status: 'published',
    published: true
},
{
    img: "./img/Avatar-6.jpg",
    title: 'Lobster Roll Combo',
    status: 'not published',
    published: false
}
]


const contentList = document.querySelector('.content-list')
const paginationContent = document.querySelector('.container-pagination-buttons')
const paginationTitle = document.querySelector('.content-pagination__title')
let pages = 33
window.addEventListener("DOMContentLoaded", function () {
    diplayBrandItems(listBtands);
    displayPagesButtons(pages);
    displayPagesTitle()
    dropbenuButtons ()
  });

 function diplayBrandItems(listItems){
    let displayBrand = listItems.map(function(item,id){
        
         if(item.published){
            return `<div id="${id}" class="item-list">
                <div class="item-list-brand">
                    <input type="checkbox"/>
                    <img src="${item.img}" alt="brand img" class="item-list-brand__img" />
                    <span class="item-list-brand__title">${item.title}</span>
                </div>
                <div class="item-list-status">
                    <div class="item-list-status__container">
                        <span class="item-list-status__text _piblished">${item.status}</span>
                    </div>
                </div>
                <div class="item-list-dropmenu">
                    

                    <button type="button" class='dropmenu-btn'><svg class='menu-icon' width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z" fill="black" fill-opacity="0.5"/>
                        <path d="M4 9C4 10.1046 3.10457 11 2 11C0.895431 11 0 10.1046 0 9C0 7.89543 0.895431 7 2 7C3.10457 7 4 7.89543 4 9Z" fill="black" fill-opacity="0.5"/>
                        <path d="M2 18C3.10457 18 4 17.1046 4 16C4 14.8954 3.10457 14 2 14C0.895431 14 0 14.8954 0 16C0 17.1046 0.895431 18 2 18Z" fill="black" fill-opacity="0.5"/>
                        </svg></button>
                </div>
                <div id="dropMenu${id}" class="dropdownmenu dropdownmenu-content">
                    <a href="#" class="dropdownmenu__item"><span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.00001 0C5.44773 0 5.00001 0.447715 5.00001 1C5.00001 1.55228 5.44773 2 6.00001 2H11.59L0.705015 12.885C0.315654 13.2744 0.315654 13.9056 0.705015 14.295C1.09438 14.6844 1.72565 14.6844 2.11501 14.295L13 3.41V9C13 9.55228 13.4477 10 14 10C14.5523 10 15 9.55229 15 9V1C15 0.447716 14.5523 0 14 0H6.00001Z" fill="black" fill-opacity="0.5"/>
                        </svg>Publish</span></a>
                    <a href="#" class="dropdownmenu__item"><span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.13851 12.1382L9.98933 3.28735L12.7127 6.01067L3.86184 14.8615L0.507593 15.9796C0.206509 16.0799 -0.0799313 15.7935 0.0204299 15.4924L1.13851 12.1382Z" fill="black" fill-opacity="0.5"/>
                        <path d="M11.351 1.92568L12.7127 0.56402C13.4647 -0.188007 14.684 -0.188007 15.436 0.56402C16.188 1.31605 16.188 2.53532 15.436 3.28735L14.0743 4.64901L11.351 1.92568Z" fill="black" fill-opacity="0.5"/>
                        </svg>Edit</span></a>
                    <a href="#" class="dropdownmenu__item dropdownmenu__item_delete"><span>
                        <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 10C5 9.44771 5.44772 9 6 9C6.55228 9 7 9.44772 7 10V14C7 14.5523 6.55228 15 6 15C5.44772 15 5 14.5523 5 14V10Z" fill="#E06141"/>
                        <path d="M10 9C9.44771 9 9 9.44771 9 10V14C9 14.5523 9.44771 15 10 15C10.5523 15 11 14.5523 11 14V10C11 9.44772 10.5523 9 10 9Z" fill="#E06141"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15 4L12 4V3C12 1.34315 10.6569 0 9 0H7C5.34315 0 4 1.34315 4 3V4H1C0.447715 4 0 4.44772 0 5C0 5.55228 0.447715 6 1 6L1 17C1 18.6569 2.34315 20 4 20H12C13.6569 20 15 18.6569 15 17V6C15.5523 6 16 5.55229 16 5C16 4.44772 15.5523 4 15 4ZM6 4V3C6 2.44772 6.44772 2 7 2H9C9.55228 2 10 2.44772 10 3V4H6ZM13 6H3V17C3 17.5523 3.44772 18 4 18H12C12.5523 18 13 17.5523 13 17V6Z" fill="#E06141"/>
                        </svg>Delete</span></a>
                    </div>
            </div>`}
            else {
            return`<div id="${id}" class="item-list">
                    <div class="item-list-brand">
                        <input type="checkbox"/>
                        <img src="${item.img}" alt="brand img" class="item-list-brand__img" />
                        <span class="item-list-brand__title">${item.title}</span>
                    </div>
                    <div class="item-list-status">
                        <div class="item-list-status__container">
                            <span class="item-list-status__text">${item.status}</span>
                        </div>
                    </div>
                    <div class="item-list-dropmenu">
                        

                        <button type="button" class='dropmenu-btn'><svg class='menu-icon' width="4" height="18" viewBox="0 0 4 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4 2C4 3.10457 3.10457 4 2 4C0.895431 4 0 3.10457 0 2C0 0.895431 0.895431 0 2 0C3.10457 0 4 0.895431 4 2Z" fill="black" fill-opacity="0.5"/>
                            <path d="M4 9C4 10.1046 3.10457 11 2 11C0.895431 11 0 10.1046 0 9C0 7.89543 0.895431 7 2 7C3.10457 7 4 7.89543 4 9Z" fill="black" fill-opacity="0.5"/>
                            <path d="M2 18C3.10457 18 4 17.1046 4 16C4 14.8954 3.10457 14 2 14C0.895431 14 0 14.8954 0 16C0 17.1046 0.895431 18 2 18Z" fill="black" fill-opacity="0.5"/>
                            </svg></button>
                    </div>
                    <div id="dropMenu${id}" class="dropdownmenu dropdownmenu-content">
                        <a href="#" class="dropdownmenu__item"><span><svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.00001 0C5.44773 0 5.00001 0.447715 5.00001 1C5.00001 1.55228 5.44773 2 6.00001 2H11.59L0.705015 12.885C0.315654 13.2744 0.315654 13.9056 0.705015 14.295C1.09438 14.6844 1.72565 14.6844 2.11501 14.295L13 3.41V9C13 9.55228 13.4477 10 14 10C14.5523 10 15 9.55229 15 9V1C15 0.447716 14.5523 0 14 0H6.00001Z" fill="black" fill-opacity="0.5"/>
                            </svg>Publish</span></a>
                        <a href="#" class="dropdownmenu__item"><span><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.13851 12.1382L9.98933 3.28735L12.7127 6.01067L3.86184 14.8615L0.507593 15.9796C0.206509 16.0799 -0.0799313 15.7935 0.0204299 15.4924L1.13851 12.1382Z" fill="black" fill-opacity="0.5"/>
                            <path d="M11.351 1.92568L12.7127 0.56402C13.4647 -0.188007 14.684 -0.188007 15.436 0.56402C16.188 1.31605 16.188 2.53532 15.436 3.28735L14.0743 4.64901L11.351 1.92568Z" fill="black" fill-opacity="0.5"/>
                            </svg>Edit</span></a>
                        <a href="#" class="dropdownmenu__item dropdownmenu__item_delete"><span>
                            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 10C5 9.44771 5.44772 9 6 9C6.55228 9 7 9.44772 7 10V14C7 14.5523 6.55228 15 6 15C5.44772 15 5 14.5523 5 14V10Z" fill="#E06141"/>
                            <path d="M10 9C9.44771 9 9 9.44771 9 10V14C9 14.5523 9.44771 15 10 15C10.5523 15 11 14.5523 11 14V10C11 9.44772 10.5523 9 10 9Z" fill="#E06141"/>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M15 4L12 4V3C12 1.34315 10.6569 0 9 0H7C5.34315 0 4 1.34315 4 3V4H1C0.447715 4 0 4.44772 0 5C0 5.55228 0.447715 6 1 6L1 17C1 18.6569 2.34315 20 4 20H12C13.6569 20 15 18.6569 15 17V6C15.5523 6 16 5.55229 16 5C16 4.44772 15.5523 4 15 4ZM6 4V3C6 2.44772 6.44772 2 7 2H9C9.55228 2 10 2.44772 10 3V4H6ZM13 6H3V17C3 17.5523 3.44772 18 4 18H12C12.5523 18 13 17.5523 13 17V6Z" fill="#E06141"/>
                            </svg>Delete</span></a>
                        </div>
                </div>`
            }
    })
    

    displayBrand = displayBrand.join('')

    contentList.innerHTML = displayBrand

    const dropmenuBtn = contentList.querySelectorAll('.dropmenu-btn')
    const lactElemList = document.getElementById('5')
    lactElemList.classList.add('_last')
  }

function displayPagesButtons(pages){
    let distplayPagePagination = []
    if(pages>8){
        for (let i=0; i<5; i++){
            distplayPagePagination.push(
                `<span id="p${i+1}" class="pagination-button">${i+1}</span>`
            )
        }
        distplayPagePagination.push(
            `<span id="p" class="pagination-button">...</span>`
        )
        distplayPagePagination.push(
            `<span id="p${pages}" class="pagination-button">${pages}</span>`
        )
    }
    distplayPagePagination = distplayPagePagination.join('')
    paginationContent.innerHTML = distplayPagePagination
    document.getElementById('p2').classList.add('_active')
}

function displayPagesTitle(){
    let displayPageTitle =[] 
    displayPageTitle.push(`<span>Showing <b>1-10</b> of <b>10</b> items</span>`)
    displayPageTitle = displayPageTitle.join('')
    paginationTitle.innerHTML = displayPageTitle
}

function dropbenuButtons (){
    const dropmenuBtn = contentList.querySelectorAll('.dropmenu-btn')
    
    dropmenuBtn.forEach((elem,i)=> {
        elem.addEventListener('click', (e)=>{
            console.log(i)
           contentList.querySelectorAll('.dropdownmenu').forEach(item=>{
              item.classList.remove('_active')
           })
           const activeDropmenu = document.getElementById(`dropMenu${i}`)
    activeDropmenu.classList.add('_active')
        })
    });
    
    
}

document.addEventListener('click',function (e) {
    const cvg = contentList.querySelectorAll('svg')
    
    if (e.target.className !== 'dropdownmenu' && e.target.className !== 'dropmenu-btn' 
    && e.target.className !=='menu-icon') {
        contentList.querySelectorAll('.dropdownmenu').forEach(item=>{
            
            item.classList.remove('_active')
        })
    }
});