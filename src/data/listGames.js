let game = {
    id: 1,
    name: "Тест",
    img: "https://cs1.livemaster.ru/storage/6f/b7/28e11f07c9b26c017e888310e46a--aktivnyj-otdyh-i-razvlecheniya-igra-nastolnaya-parchis.jpg"
};

let listGames = Array.apply(0, Array(20)).map((el, ind) => {
    return Object.assign({}, game, {id: ind + 1});
});
export default listGames