export function renderBookClub(club) {
    const clubEl = document.createElement('div');
    clubEl.classList.add('club');

    const nameEl = document.createElement('h3');
    nameEl.textContent = club.name;

    const membersEl = document.createElement('ul');

    clubEl.append(nameEl, membersEl);

    return clubEl;

    // for (let member of club.club_members) {
    //     const memberEl = document.createElement('li');

    //     memberEl.classList.add('member');
    //     // memberEl.addEventListener('click', async () => {
    //     //     await deleteMember(member.id);

    //     //     fetchAndDisplayClubs();
    //     // });
    //     memberEl.textContent = `${member.name} : ${member.contact}`;

    //     membersEl.append(memberEl);
    // }
}
