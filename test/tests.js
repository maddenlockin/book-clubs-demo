// import functions under test

import { renderBookClub } from '../render-utils.js';

const test = QUnit.test;

test('test render function', (expect) => {
    // Arrange
    const expected = `<div class="club"><h3>African Mythology</h3></div>`;

    // Act
    // const list = getBookClubs();
    const actual = renderBookClub(clubObject);

    // Assert
    expect.deepEqual(actual.outerHTML, expected);
});

const clubObject = {
    id: 2,
    members: [{ name: 'Nnamani', contact_info: 'trainsandflowers@email.com', club_id: 2 }],
    name: 'African Mythology',
};
