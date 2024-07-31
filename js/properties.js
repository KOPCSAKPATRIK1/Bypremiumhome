// Data for properties
const properties = [
    {
        title: "Budapest I. kerület, Batthyány utca",
        price: "119,90 millió Ft",
        size: "88 m2",
        rooms: "2 + 1 fél",
        moreDetails: "https://ingatlan.com/34257612",
        images: [
            { src: "assets/Budapest I. kerület/kep.jpg", alt: "Image 1 Description" },
            { src: "assets/Budapest I. kerület/kep2.jpg", alt: "Image 2 Description" }
        ]
    },
    {
        title: "Property 2",
        price: "$200,000",
        size: "1500 sqft",
        rooms: 4,
        moreDetails: "more_details2.html",
        landArea: null,
        images: [
            { src: "assets/Budapest I. kerület/kep3.jpg" },
            { src: "assets/Budapest I. kerület/kep4.jpg"}
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
            <p><strong>Szobák:</strong> <span>${property.rooms}</span></p>
            ${property.landArea ? `<p><strong>Land Area:</strong> <span>${property.landArea}</span></p>` : ''}
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
