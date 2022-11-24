import { getBookClubs } from '../fetch-utils.js';

const select = document.querySelector('select');

window.addEventListener('load', async () => {
    const clubs = await getBookClubs();

    for (let club of clubs) {
        const clubOption = document.createElement('option');

        clubOption.textContent = club.name;
        clubOption.value = club.name;

        select.append(clubOption);
    }
});
