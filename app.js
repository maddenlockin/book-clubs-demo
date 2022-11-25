/* Imports */
// this will check if we have a user and set signout link if it exists
import './auth/user.js';
import { deleteMember, getBookClubs } from './fetch-utils.js';
import { renderBookClub } from './render-utils.js';

/* Get DOM Elements */
const clubListEl = document.querySelector('.book-clubs-list');

/* State */

/* Events */
window.addEventListener('load', async () => {
    fetchAndDisplayBookClubs();
});

/* Display Functions */
async function fetchAndDisplayBookClubs() {
    clubListEl.textContent = '';

    const bookclubs = await getBookClubs();

    for (let club of bookclubs) {
        const clubEl = renderBookClub(club);
        const membersEl = document.createElement('ul');

        for (let member of club.members) {
            const memberEl = document.createElement('li');

            memberEl.classList.add('member');
            memberEl.textContent = `${member.name} : ${member.contact_info}`;
            memberEl.addEventListener('click', async () => {
                await deleteMember(member.id);
                fetchAndDisplayBookClubs();
            });
            membersEl.append(memberEl);
        }
        clubEl.append(membersEl);
        clubListEl.append(clubEl);
    }
}
