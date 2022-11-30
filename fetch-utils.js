const SUPABASE_URL = 'https://vmhclpevfecxhpxwubhs.supabase.co';
const SUPABASE_KEY =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtaGNscGV2ZmVjeGhweHd1YmhzIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTI5Nzk4MzgsImV4cCI6MTk2ODU1NTgzOH0.pWvGlCrbKNRZWBKDRsPR8rGxu8nodj7nq8cY1rPNglI';
const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

/* Auth related functions */

export function getUser() {
    return client.auth.user();
}

export async function signUpUser(email, password) {
    return await client.auth.signUp({
        email,
        password,
    });
}

export async function signInUser(email, password) {
    return await client.auth.signIn({
        email,
        password,
    });
}

export async function signOutUser() {
    return await client.auth.signOut();
}

/* Data functions */

export async function getBookClubs() {
    const response = await client.from('book_clubs').select('*, members (*)');
    // give me every property (that's the *) for workshops. Also, for each workshop, give me any workshop participant who has this workshop as a foreign key.
    console.log('response.data', response.data);
    return checkError(response);
}

export async function createMember(member) {
    const response = await client.from('members').insert(member);

    return checkError(response);
}

export async function deleteMember(memberId) {
    const response = await client.from('members').delete().match({ id: memberId }).single();

    return checkError(response);
}

function checkError({ data, error }) {
    return error ? console.error(error) : data;
}
