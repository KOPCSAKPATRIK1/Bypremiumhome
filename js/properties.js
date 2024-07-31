// Data for properties
const properties = [
    {
        title: "Budapest I. kerület, Batthyány utca",
        price: "119,90 millió Ft",
        size: "88 m2",
        rooms: "2 + 1 fél",
        landArea: null,
        moreDetails: "https://ingatlan.com/34257612",
        images: [
            { src: "assets/Budapest-I.-kerulet/1.jfif", alt: "Budapest I. kerület" },
            { src: "assets/Budapest-I.-kerulet/2.jfif", alt: "Budapest I. kerület" },
            { src: "assets/Budapest-I.-kerulet/3.jfif", alt: "Budapest I. kerület" },
            { src: "assets/Budapest-I.-kerulet/4.jfif", alt: "Budapest I. kerület" },
            { src: "assets/Budapest-I.-kerulet/5.jfif", alt: "Budapest I. kerület" },
            { src: "assets/Budapest-I.-kerulet/6.jfif", alt: "Budapest I. kerület" },
            { src: "assets/Budapest-I.-kerulet/7.jfif", alt: "Budapest I. kerület" },
            { src: "assets/Budapest-I.-kerulet/8.jfif", alt: "Budapest I. kerület" },
            { src: "assets/Budapest-I.-kerulet/9.jfif", alt: "Budapest I. kerület" },
            { src: "assets/Budapest-I.-kerulet/10.jfif", alt: "Budapest I. kerület" },
            { src: "assets/Budapest-I.-kerulet/11.jfif", alt: "Budapest I. kerület" },
            { src: "assets/Budapest-I.-kerulet/12.jfif", alt: "Budapest I. kerület" },
            { src: "assets/Budapest-I.-kerulet/13.jfif", alt: "Budapest I. kerület" },
        ]
    },
    {
        title: "Budapest XI. kerület, Budaörsi út",
        price: "49,50 millió Ft",
        size: "57 m2",
        rooms: 2,
        landArea: null,
        moreDetails: "https://ingatlan.com/34247478",
        images: [
            { src: "assets/Budapest-XI.-kerulet,-Budaorsi-ut/1.jfif", alt: "Budapest XI. kerület, Budaörsi út" },
            { src: "assets/Budapest-XI.-kerulet,-Budaorsi-ut/2.jfif", alt: "Budapest XI. kerület, Budaörsi út" },
            { src: "assets/Budapest-XI.-kerulet,-Budaorsi-ut/3.jfif", alt: "Budapest XI. kerület, Budaörsi út" },
            { src: "assets/Budapest-XI.-kerulet,-Budaorsi-ut/4.jfif", alt: "Budapest XI. kerület, Budaörsi út" },
            { src: "assets/Budapest-XI.-kerulet,-Budaorsi-ut/5.jfif", alt: "Budapest XI. kerület, Budaörsi út" },
            { src: "assets/Budapest-XI.-kerulet,-Budaorsi-ut/6.jfif", alt: "Budapest XI. kerület, Budaörsi út" },
            { src: "assets/Budapest-XI.-kerulet,-Budaorsi-ut/7.jfif", alt: "Budapest XI. kerület, Budaörsi út" },
            { src: "assets/Budapest-XI.-kerulet,-Budaorsi-ut/8.jfif", alt: "Budapest XI. kerület, Budaörsi út" },
            { src: "assets/Budapest-XI.-kerulet,-Budaorsi-ut/9.jfif", alt: "Budapest XI. kerület, Budaörsi út" },
        ]
    },
    {
        title: "Budapest XIX. kerület, Csíky utca",
        price: "239,90 millió Ft",
        size: "504 m2",
        landArea: "706 m2",
        rooms: 8,
        moreDetails: "https://ingatlan.com/34248373",
        images: [
            { src: "assets/Budapest-XIX.-kerulet,-Csiky-utca/1.jfif", alt: "Budapest XIX. kerület, Csíky utca" },
            { src: "assets/Budapest-XIX.-kerulet,-Csiky-utca/2.jfif", alt: "Budapest XIX. kerület, Csíky utca" },
            { src: "assets/Budapest-XIX.-kerulet,-Csiky-utca/3.jfif", alt: "Budapest XIX. kerület, Csíky utca" },
            { src: "assets/Budapest-XIX.-kerulet,-Csiky-utca/4.jfif", alt: "Budapest XIX. kerület, Csíky utca" },
            { src: "assets/Budapest-XIX.-kerulet,-Csiky-utca/5.jfif", alt: "Budapest XIX. kerület, Csíky utca" },
            { src: "assets/Budapest-XIX.-kerulet,-Csiky-utca/6.jfif", alt: "Budapest XIX. kerület, Csíky utca" },
            { src: "assets/Budapest-XIX.-kerulet,-Csiky-utca/7.jfif", alt: "Budapest XIX. kerület, Csíky utca" },
            { src: "assets/Budapest-XIX.-kerulet,-Csiky-utca/8.jfif", alt: "Budapest XIX. kerület, Csíky utca" },
            { src: "assets/Budapest-XIX.-kerulet,-Csiky-utca/9.jfif", alt: "Budapest XIX. kerület, Csíky utca" },
            { src: "assets/Budapest-XIX.-kerulet,-Csiky-utca/10.jfif", alt: "Budapest XIX. kerület, Csíky utca" },
            { src: "assets/Budapest-XIX.-kerulet,-Csiky-utca/11.jfif", alt: "Budapest XIX. kerület, Csíky utca" },
            { src: "assets/Budapest-XIX.-kerulet,-Csiky-utca/12.jfif", alt: "Budapest XIX. kerület, Csíky utca" },
            { src: "assets/Budapest-XIX.-kerulet,-Csiky-utca/13.jfif", alt: "Budapest XIX. kerület, Csíky utca" },
            { src: "assets/Budapest-XIX.-kerulet,-Csiky-utca/14.jfif", alt: "Budapest XIX. kerület, Csíky utca" },
            { src: "assets/Budapest-XIX.-kerulet,-Csiky-utca/15.jfif", alt: "Budapest XIX. kerület, Csíky utca" },
            { src: "assets/Budapest-XIX.-kerulet,-Csiky-utca/16.jfif", alt: "Budapest XIX. kerület, Csíky utca" },
            { src: "assets/Budapest-XIX.-kerulet,-Csiky-utca/17.jfif", alt: "Budapest XIX. kerület, Csíky utca" },
            { src: "assets/Budapest-XIX.-kerulet,-Csiky-utca/18.jfif", alt: "Budapest XIX. kerület, Csíky utca" },
            { src: "assets/Budapest-XIX.-kerulet,-Csiky-utca/19.jfif", alt: "Budapest XIX. kerület, Csíky utca" },
        ]
    }
];

// Function to generate property cards
function generatePropertyCards() {
    const propertyList = document.getElementById('property-list');
    properties.forEach((property, index) => {
        let propertyCard = document.createElement('div');
        propertyCard.className = 'property-card';
        propertyCard.innerHTML = `
            <h3>${property.title}</h3>
            <div class="slideshow-container">
                ${property.images.map((img, i) => `
                    <div class="mySlides">
                        <div class="numbertext">${i + 1} / ${property.images.length}</div>
                        <img id="myImg${index}_${i}" class="property-img" src="${img.src}" style="width:100%" alt="${img.alt}">
                    </div>
                `).join('')}
                <a class="prev" onclick="plusSlides(-1, ${index})">❮</a>
                <a class="next" onclick="plusSlides(1, ${index})">❯</a>
            </div>
            <p><strong>Ár:</strong> <span>${property.price}</span></p>
            <p><strong>Alapterület:</strong> <span>${property.size}</span></p>
            ${property.landArea ? `<p><strong>Telekterület:</strong> <span>${property.landArea}</span></p>` : ''}
            <p><strong>Szobák:</strong> <span>${property.rooms}</span></p>
            <p><a href="${property.moreDetails}">További adatok</a></p>
        `;
        propertyList.appendChild(propertyCard);
    });
}

// Call the function to generate the property cards
generatePropertyCards();

// Slideshow functionality
function plusSlides(n, propertyIndex) {
    showSlides(slideIndex[propertyIndex] += n, propertyIndex);
}

function showSlides(n, propertyIndex) {
    let i;
    let slides = document.querySelectorAll(`.property-card:nth-child(${propertyIndex + 1}) .mySlides`);
    if (n > slides.length) {
        slideIndex[propertyIndex] = 1;
    }
    if (n < 1) {
        slideIndex[propertyIndex] = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex[propertyIndex] - 1].style.display = "block";
}

// Initialize slide index for each property
let slideIndex = properties.map(() => 1);
properties.forEach((_, index) => showSlides(slideIndex[index], index));
