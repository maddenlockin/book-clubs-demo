export function renderBookClub(club) {
    const clubEl = document.createElement('div');
    clubEl.classList.add('club');

    const nameEl = document.createElement('h3');
    nameEl.textContent = club.name;

    clubEl.append(nameEl);

    return clubEl;
}
