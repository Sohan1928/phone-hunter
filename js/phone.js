const loadPhone = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    console.log(phones);
    displayPhones(phones);
}

const displayPhones = phones => {
    console.log(phones);
    // step:1 
    const phoneContainer = document.getElementById('phones-container');
    // clear phoneContainer cards before adding new cards
    phoneContainer.textContent = '';

    // display show all button if there are more than 12 phones
    const showAllContainer = document.getElementById('show-all-container');
    if (phones.length > 12) {
        showAllContainer.classList.remove('hidden');
    } else {
        showAllContainer.classList.add('hidden');
    }


    // display only first 6 phones

    phones = phones.slice(0, 12);

    phones.forEach(phone => {
        // console.log(phone);
        // 2:create a div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card bg-gray-100 p-4 shadow-xl`;
        // 3:inner html

        phoneCard.innerHTML = `
        <figure><img src="${phone.image}"
            alt="Shoes" /></figure>
        <div class="card-body">
            <h2 class="card-title">${phone.phone_name}</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
                <button class="btn btn-primary">Buy Now</button>
            </div>
        </div>
        `
        // 4:append child

        phoneContainer.appendChild(phoneCard);
    });

    toggleSpinnerLoading(false);
}

// handle search btn

const handleSearch = () => {
    toggleSpinnerLoading(true);

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText);
}


const toggleSpinnerLoading = (isLoading) => {
    const loadingSpinner = document.getElementById('spinner-loading');
    if (isLoading) {
        loadingSpinner.classList.remove('hidden');
    }
    else {
        loadingSpinner.classList.add('hidden');
    }
}

// loadPhone();
