type people = {
    id: number,
    name: String;
};

type place = {
    classroom: String,
    cafee: String;
};

let gathering: people | place = {id: 2, name: 'Kim', classroom: 'alpha'};