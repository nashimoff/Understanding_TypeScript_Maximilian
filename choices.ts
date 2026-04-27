// enum Role {
//     Admin,
//     Editor,
//     Guest,
// }

let userRole: 'admin' | 'editor' | 'guest' | 'reader' = 'admin';

// ...

userRole = 'guest';

let possibleResults: [1 | -1, 1 | -1]; // [1, -1]

possibleResults = [1, -1];

function access(role: 'admin' | 'editor' | 'guest' | 'reader') {
    // ...
}