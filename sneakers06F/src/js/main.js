let shoesList = document.querySelector('.main__assort-mainContent')
let filterSelectorPrice = document.querySelector('.main__assort-select-price')
let filterSelectorCategory = document.querySelector('.main__assort-select-category')
let filterSelectorGender = document.querySelector('.main__assort-select-gender')
let filterSelectorBrand = document.querySelector('.main__assort-select-brand')
let url = 'http://localhost:8080/shoes'

let filterPrice = ''
let filterCategory  = ''
let filterGender = ''
let filterBrand = ''

const getShoes = () => {
    shoesList.innerHTML = ''
    fetch(url + `${filterPrice.length ? '_sort=price&_order=' + filterPrice + '&' : ''}${filterCategory.length ? 'category=' + filterCategory + '&' : ''}${filterGender.length ? 'gender=' + filterGender + '&' : ''}${filterBrand.length ? 'brend=' + filterBrand + '&' : ''}`)
        .then((resolve) => resolve.json())
        .then((resolve) => {
            resolve.forEach((item) => {
                shoesList.innerHTML += 
                `
            <div style="height: 370px; width: 200px;" class="main__assort-mainContent-shoes">
                <div class="main__assort-mainContent-favorites">
                    <span class="main__assort-mainContent-favorites-logo"><svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                         <path d="M13.149 2.35598L13.1484 2.35544C12.8095 2.02581 12.4097 1.76359 11.9705 1.58328L11.9696 1.58291C11.5139 1.39507 11.0249 1.29886 10.5311 1.29999L10.5295 1.29999C9.83464 1.29999 9.15837 1.48873 8.57168 1.84385L8.57166 1.84386C8.4313 1.92882 8.29851 2.02179 8.17303 2.12277L7.73415 2.47599L7.29527 2.12277C7.16979 2.02179 7.037 1.92882 6.89663 1.84386L6.89661 1.84385C6.30993 1.48873 5.63366 1.29999 4.93883 1.29999C4.43728 1.29999 3.95462 1.39501 3.49871 1.58292L3.49796 1.58323C3.05699 1.76437 2.6606 2.02431 2.31966 2.35565L2.3187 2.35658L2.3187 2.35657C1.98111 2.6834 1.71174 3.07247 1.52557 3.50161L13.149 2.35598ZM13.149 2.35598C13.4865 2.68351 13.7561 3.0729 13.943 3.50221C14.1365 3.9487 14.2347 4.42035 14.2333 4.90641V4.90841C14.2333 5.36255 14.1399 5.85119 13.9418 6.36514L13.9412 6.36674M13.149 2.35598L13.9412 6.36674M4.37988 10.1131L4.37995 10.1132C5.12906 10.7996 5.87729 11.3822 6.44748 11.7988C6.73204 12.0066 6.97087 12.1721 7.14149 12.2873C7.22678 12.345 7.29482 12.3899 7.34278 12.4212C7.3857 12.4492 7.4091 12.464 7.41442 12.4673C7.41538 12.4679 7.41575 12.4682 7.41555 12.468L7.42662 12.4748L7.42655 12.4749L7.73332 12.6701L8.04008 12.4749L8.04022 12.4748C8.09141 12.4423 9.58223 11.4902 11.0868 10.1131H4.37988ZM4.37988 10.1131C3.47528 9.28445 2.76336 8.48184 2.25505 7.72992M4.37988 10.1131L2.25505 7.72992M13.9412 6.36674C13.7771 6.7954 13.5328 7.25421 13.2114 7.73026M13.9412 6.36674L13.2114 7.73026M2.25505 7.72992C1.93467 7.25534 1.69124 6.79603 1.52486 6.36515L2.25505 7.72992ZM13.2114 7.73026C12.7031 8.48203 11.9913 9.28446 11.087 10.1129L13.2114 7.73026ZM1.23333 4.90841C1.23333 4.4208 1.33184 3.9483 1.52554 3.50166L1.52472 6.36479C1.32672 5.85096 1.23333 5.36244 1.23333 4.90841Z" stroke="#ECECEC" />
                              </svg>
                        </span>
                </div>
                <img style="width: 100%; height: 150px" src="${item.images}" alt="product image" class="main__assort-mainContent-product">
                
                <h4 style="max-height: 14px" class="main__assort-mainContent-product-desc">${item.title}</h4>
                <h4 style="border-top: 1px solid black; margin-top: 19px;" class="main__assort-mainContent-product-desc">${item.brend}</h4>
                <p style="margin: 10px 0;" class="main__assort-mainContent-product-gender">${item.gender === "men" ? "Men" : "Women"}</p>
                <p style="margin: 10px 0;" class="main__assort-mainContent-product-gender">${item.category}</p>
                <div class="main__assort-mainContent-product-pricesDesc">
                    <div class="main__assort-mainContent-product-pricesDesc-text">
                        <p class="main__assort-mainContent-product-pricesDesc-price">Цена:</p>
                        <p style="border-bottom:1px solid black" class="main__assort-mainContent-product-pricesDesc-cost">${item.price}₽</p>
                    </div>
                    <div class="main__assort-mainContent-product-pricesDesc-addBask">
                        <span class="main__assort-mainContent-product-pricesDesc-addBask-logo">
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.6653 5.13122H7.20214V1.66821C7.20214 0.332846 5.13114 0.332846 5.13114 1.66821V5.13122H1.668C0.332935 5.13122 0.332935 7.20215 1.668 7.20215H5.13114V10.6652C5.13114 12.0005 7.20214 12.0005 7.20214 10.6652V7.20215H10.6653C12.0005 7.20215 12.0005 5.13122 10.6653 5.13122Z" fill="#D3D3D3"/></svg></span>
                    </div>
                 
                </div>
            </div> 
                `})
            })
            .catch((err) => alert(err))
    }
    
    
    filterSelectorPrice.addEventListener('change', (e) => {
        filterPrice = e.target.value
        getShoes()
    })
    filterSelectorCategory.addEventListener('change', (e) => {
        filterCategory = e.target.value
        getShoes()
    })
    filterSelectorGender.addEventListener('change', (e) => {
        filterGender = e.target.value
        getShoes()
    })
    filterSelectorBrand.addEventListener('change', (e) => {
        filterBrand = e.target.value
        getShoes()
    })
    
    getShoes()