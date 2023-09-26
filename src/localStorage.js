const getStoredDonations = () => {
    if(localStorage.getItem('donation-list')){
        return JSON.parse(localStorage.getItem('donation-list'));
    }
    return [];
}


const setDonationsToLocalStorage = id => {
    const donationList = getStoredDonations();
    if(!donationList.includes(id)){
        donationList.push(id);
        localStorage.setItem('donation-list', JSON.stringify(donationList));
        return true;
    }
    else {
        return false;
    }
}

export {setDonationsToLocalStorage, getStoredDonations}