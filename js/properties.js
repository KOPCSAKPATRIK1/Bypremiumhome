// Data for properties
const properties = [
    {
        title: "Property 1",
        location: "Address of property 1",
        price: "$100,000",
        size: "1000 sqft",
        bedrooms: 3,
        bathrooms: 2,
        moreDetails: "more_details1.html",
        landArea: "2000 sqft",
        images: [
            { src: "assets/Budapest I. kerület/kep.jpg", alt: "Image 1 Description" },
            { src: "assets/Budapest I. kerület/kep2.jpg", alt: "Image 2 Description" }
        ]
    },
    {
        title: "Property 2",
        location: "Address of property 2",
        price: "$200,000",
        size: "1500 sqft",
        bedrooms: 4,
        bathrooms: 3,
        moreDetails: "more_details2.html",
        landArea: null,
        images: [
            { src: "assets/Budapest I. kerület/kep3.jpg", alt: "Image 1 Description" },
            { src: "assets/Budapest I. kerület/kep4.jpg", alt: "Image 2 Description" }
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
            <p><strong>Location:</strong> <span>${property.location}</span></p>
            <p><strong>Price:</strong> <span>${property.price}</span></p>
            <p><strong>Size:</strong> <span>${property.size}</span></p>
            <p><strong>Bedrooms:</strong> <span>${property.bedrooms}</span></p>
            <p><strong>Bathrooms:</strong> <span>${property.bathrooms}</span></p>
            ${property.landArea ? `<p><strong>Land Area:</strong> <span>${property.landArea}</span></p>` : ''}
            <p><a href="${property.moreDetails}">More details</a></p>
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
