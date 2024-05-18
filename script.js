const productCards = [
    {
        name: 'Slurricane (3.5g)',
        price: '$25',
        category: 'flower',
        image: 'img/slurricane.jpg',
        description: 'Fire ass strain',
    },
    {
        name: 'Gelato (3.5g)',
        price: '$30',
        category: 'flower',
        image: 'img/gelato.jpg',
        description: 'Anotha one',
    },
    {
        name: 'Berry White (3.5g)',
        price: '$30',
        category: 'flower',
        image: 'img/berrywhite.jpg',
        description: 'Maybe the artist??'
    },
    {
        name: 'Apple Fritter (3.5g)',
        price: '$35',
        category: 'flower',
        image: 'img/applefritter.jpg',
        description: 'Bangerrrr',
    },
    {
        name: 'LA Kush Cake (3.5g)',
        price: '$40',
        category: 'flower',
        image: 'img/lakushcake.jpg',
        description: 'Fire strain and og'
    },
    {
        name: 'Stiiizy Pods (0.5g)',
        price: '$40',
        category: 'vapes',
        image: 'img/stiiizypods.jpg',
        description: 'CDT, LRLD, and Distallate',
    },
    {
        name: 'Liiil Stiiizys (0.5g)',
        price: '$30',
        category: 'vapes',
        image: 'img/lilstiz.jpg',
        description: 'Premium Jack, Gelato, White Raspberry, SFV OG',
    },
    {
        name: 'West Coast Cure (1g)',
        price: '$30',
        category: 'vapes',
        image: 'img/wcc.jpg',
        description: 'Cereal Milk, Frozen Cherries, Strawberry Lemonade, Strawberry Cream, Mango Haze',
    },
    {
        name: '528Hz Carts (1g)',
        price: '$30',
        category: 'vapes',
        image: 'img/528hz.jpg',
        description: 'Beary OG, Mango Mimosa, Green Dream, Star Fruit',
    },
    {
        name: 'Vertigo',
        price: '$40',
        category: 'concentrate',
        image: 'img/vertigo.jpg',
        description: 'Highest Potency Rosin in Kern County',
    },
    {
        name: 'Dayfade',
        price: '$40',
        category: 'concentrate',
        image: 'img/dayfade.jpg',
        description: 'Banger strain',
    },
    {
        name: 'Inferno OG',
        price: '$40',
        category: 'concentrate',
        image: 'img/inferno.jpg',
        description: 'Very Pungent Strain',
    },
    {
        name: 'London Pound Cake',
        price: '$40',
        category: 'concentrate',
        image: 'img/lpc.jpg',
        description: 'Another Pungent Strain'
    },
    {
        name: 'King Size Just Shake Em',
        price: '$10',
        category: 'flower',
        image: 'kingjse.jpg',
        description: 'Over 6+ Strains Combined',
    },
    {
        name: '2-Pack Just Shake Em',
        price: '$10',
        category: 'flower',
        image: '2jse.jpg',
        description: 'Same as the king size',
    },
    {
        name: 'Smallies',
        price: '$5',
        category: 'flower',
        image: 'smallies.jpg',
        description: 'placeholder',
    },
    {
        name: 'TIER 1 Rosin Dispos',
        price: '$40',
        category: 'vapes',
        image: 't1edispo.jpg',
        description: 'Forgot to add:/',
    },
];

const categories = ['flower', 'concentrate', 'vapes'];

const filterButtons = document.querySelectorAll('.filter-buttons button');
const filterableImages = document.querySelector('.filterable-images');

const container = document.querySelector('.container');
container.addEventListener('scroll', () => {
    filterButtons.forEach(button => {
        button.style.top = '${container.scrollTop}px';
    });
});

function createProductCard(product) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
    productCard.dataset.category = product.category;

    const productContent = document.createElement('div');
    productContent.classList.add('product-content');

    const image = document.createElement('img');
    image.src = product.image;
    image.alt = product.name;

    const name = document.createElement('h2');
    name.textContent = product.name;

    const price = document.createElement('p');
    price.textContent = product.price;

    const description = document.createElement('p');
    description.textContent = product.description;

    productCard.appendChild(image);
    productCard.appendChild(name);
    productCard.appendChild(price);
    productCard.appendChild(description);

    return productCard;
}

function addProductCards() {
    const row = document.createElement('div');
    row.classList.add('product-row');

    productCards.forEach(product => {
        const productCard = createProductCard(product);
        row.appendChild(productCard);
    });

    filterableImages.appendChild(row);
}

function filterProducts(category) {
    const productCards = document.querySelectorAll('.product-card');

    productCards.forEach(productCard => {
        if (category === productCard.dataset.category) {
            productCard.style.display = 'block';
        } else {
            productCard.style.display = 'none';
        }
    });
}

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterProducts(button.dataset.name);
    });
});


addProductCards();
filterProducts('flower');