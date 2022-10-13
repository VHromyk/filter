const filtersRef = document.querySelector("#filters");

filtersRef.addEventListener("input", filterGoods);

function filterGoods() {
        const brands = [...filtersRef.querySelectorAll("#brand input:checked")].map(
            (n) => n.value
        ), sizes = [...filtersRef.querySelectorAll('#size input:checked')].map((k)=> k.value),
            cameras = [...filtersRef.querySelectorAll('#camera input:checked')].map((k)=> k.value);

    const camerasCheck = cameras[0] === 'all' ? [] : cameras;

const filteredEl = DATA.filter(
    (n) => (
            (!sizes.length || sizes.includes(n.size)) &&
            (!camerasCheck.length || camerasCheck.includes(n.camera)) &&
            (!brands.length || brands.includes(n.brand))
        ))

    outputGoods(filteredEl);
}


const createMarkup = (good) => `
    <div class="single-goods border-2 border-gray-200 rounded-lg overflow-hidden m-3">
      <div class="text-center">
      <h3 class"py-2 font-bold">Brand: ${good.brand}</h3>
      <p>Size: ${good.size}</p>
      <p> Camera: ${good.camera}</p>
      </div>
      </div>
  `

function outputGoods(goods) {
    const goodsLink = document.querySelector('#goods');

    const goodsList = goods.map(good => createMarkup(good)).join('');

    goodsLink.innerHTML = goodsList;
}

const DATA = [
    {
        brand: "Apple",
        name: "X",
        size: '5',
        camera: '16',
    },
    {
        brand: "Apple",
        name: "XS",
        size: '6',
        camera: '24'
    },
    {
        brand: "Huawei",
        name: "Y7",
        size: '7.5',
        camera: '48'
    },
    {
        brand: "Huawei",
        name: "Y25",
        size: '15',
        camera: '108'
    },
];

outputGoods(DATA);
