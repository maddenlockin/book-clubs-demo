## Book Club Planning

## 1. Database Setup

Add two tables

| book_clubs |         |
| ---------- | ------- |
| name       | varchar |

| members      |                          |
| ------------ | ------------------------ |
| name         | varchar                  |
| contact_info | varchar                  |
| club_id      | foreign key (book clubs) |

-   Add some test data to book clubs / members
-   Add RLS so that only authenticated users can add do anything with the data (select, update, delete, create)

## 2. Book Clubs Page

1. Add `getBookClubs` function to `fetch-utils.js` to fetch all your book clubs and their Members
2. TDD `renderBookClub` function that displays the Book Club and its Members
3. Use both functions to loop through book clubs and display on page

## 3. Create Page

1. Add form elements to our HTML for name, contact_info and a placeholder `<select>` for our book clubs
2. Get our book clubs (using `getBookClubs`) and dynamically add an `<option>` to our select for each Book Club
3. Add a `createMember` function to `fetch-utils.js` that sends member data to Supabase and adds a new row

_validation step: manually call the function with dummy data_

```js
createParticpant({
    name: 'Julie',
    contact_info: 'julie@alchemycodelab.com',
    club_id: 2,
});
```

4. Add our form event listener, get the form data and send to supabase using `createMember`

## 4. Delete Member

1. Add `deleteMember(id)` function in `fetch-utils.js`
2. Add dynamic event listener to my render function that calls deleteMember

---
