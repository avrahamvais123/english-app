/* export const fruitWords = [
    [
        { word: 'Apple', results: ['תפוח', 'חציל', 'תות', 'משמש'], correct: 'תפוח' },
        { word: 'Banana', results: ['בננה', 'מנגו', 'דובדבן', 'כרוב'], correct: 'בננה' },
        { word: 'Carrot', results: ['אבטיח', 'גזר', 'לימון', 'תפוח'], correct: 'גזר' },
        { word: 'Lemon', results: ['שסק', 'אגוז', 'שזיף', 'לימון'], correct: 'לימון' },
        { word: 'Lettuce', results: ['חסה', 'לימון', 'בננה', 'תפוח'], correct: 'חסה' },
        { word: 'Tomato', results: ['לימון', 'תפוז', 'עגבניה', 'מלפפון'], correct: 'עגבניה' },
        { word: 'Strawberry', results: ['תות', 'משמש', 'אפרסק', 'תאנה'], correct: 'תות' },
        { word: 'Cucumber', results: ['מלפפון', 'שזיף', 'כרובית', 'מנגו'], correct: 'מלפפון' },
        { word: 'Orange', results: ['כרוב', 'חסה', 'עגבניה', 'תפוז'], correct: 'תפוז' },
        { word: 'Onion', results: ['תפוז', 'שום', 'בצל', 'דובדבן'], correct: 'בצל' },
    ],
    [
        { word: 'Peach', results: ['מלון', 'תאנה', 'אפרסק', 'בצל'], correct: 'אפרסק' },
        { word: 'Grapes', results: ['בננה', 'ענבים', 'מנגו', 'אגוז'], correct: 'ענבים' },
        { word: 'Spinach', results: ['תפוז', 'תרד', 'כרוב', 'אבטיח'], correct: 'תרד' },
        { word: 'Garlic', results: ['שום', 'תפוח', 'לימון', 'אפרסק'], correct: 'שום' },
        { word: 'Pear', results: ['אגס', 'בננה', 'תפוח', 'מנגו'], correct: 'אגס' },
        { word: 'Pumpkin', results: ['דלעת', 'תפוח', 'תאנה', 'אפרסק'], correct: 'דלעת' },
        { word: 'Potato', results: ['פטריה', 'תפוז', 'תפוח אדמה', 'מנגו'], correct: 'תפוח אדמה' },
        { word: 'Mango', results: ['מנגו', 'שסק', 'אגוז', 'בננה'], correct: 'מנגו' },
        { word: 'Raspberry', results: ['תאנה', 'פטל', 'בצל', 'אגס'], correct: 'פטל' },
        { word: 'Cauliflower', results: ['כרובית', 'תפוז', 'תפוח', 'לימון'], correct: 'כרובית' },
    ],
    [
        { word: 'Avocado', results: ['אבוקדו', 'בצל', 'תפוז', 'אגוז'], correct: 'אבוקדו' },
        { word: 'Cherry', results: ['דובדבן', 'פטריה', 'תות', 'אפרסק'], correct: 'דובדבן' },
        { word: 'Pineapple', results: ['תפוז', 'אננס', 'ענבים', 'מנגו'], correct: 'אננס' },
        { word: 'Beet', results: ['חסה', 'תפוז', 'סלק', 'אפרסק'], correct: 'סלק' },
        { word: 'Blueberry', results: ['בננה', 'אוכמנייה', 'תפוח', 'אגס'], correct: 'אוכמנייה' },
        { word: 'Eggplant', results: ['תפוח', 'חציל', 'תאנה', 'אפרסק'], correct: 'חציל' },
        { word: 'Kiwi', results: ['קיווי', 'בננה', 'תפוח', 'מנגו'], correct: 'קיווי' },
        { word: 'Pomegranate', results: ['רימון', 'שסק', 'אגוז', 'בננה'], correct: 'רימון' },
        { word: 'Zucchini', results: ['תאנה', 'קישוא', 'בצל', 'אגס'], correct: 'קישוא' },
        { word: 'Broccoli', results: ['ברוקולי', 'תפוז', 'תפוח', 'לימון'], correct: 'ברוקולי' },
    ],
    [
        { word: 'Watermelon', results: ['תפוז', 'אבטיח', 'ענבים', 'מנגו'], correct: 'אבטיח' },
        { word: 'Fig', results: ['תאנה', 'פטריה', 'תות', 'אפרסק'], correct: 'תאנה' },
        { word: 'Coconut', results: ['קוקוס', 'בצל', 'תפוז', 'אגוז'], correct: 'קוקוס' },
        { word: 'Radish', results: ['חסה', 'תפוז', 'צנון', 'אפרסק'], correct: 'צנון' },
        { word: 'Raspberry', results: ['בננה', 'פטל', 'תפוח', 'אגס'], correct: 'פטל' },
        { word: 'Peanut', results: ['תפוח', 'בוטנים', 'תאנה', 'אפרסק'], correct: 'בוטנים' },
        { word: 'Celery', results: ['סלרי', 'בננה', 'תפוח', 'מנגו'], correct: 'סלרי' },
        { word: 'Apricot', results: ['משמש', 'שסק', 'אגוז', 'בננה'], correct: 'משמש' },
        { word: 'Asparagus', results: ['תאנה', 'אספרגוס', 'בצל', 'אגס'], correct: 'הלם' },
        { word: 'Artichoke', results: ['ארטישוק', 'תפוז', 'תפוח', 'לימון'], correct: 'ארטישוק' },
    ],
    [
        { word: 'plum', results: ['תפוח', 'תאנה', 'שזיף', 'בצל'], correct: 'שזיף' },
        { word: 'almond', results: ['שקד', 'פטריה', 'תות', 'אפרסק'], correct: 'שקד' },
        { word: 'grapefruit', results: ['תפוז', 'אשכולית', 'ענב', 'מנגו'], correct: 'אשכולית' },
        { word: 'cabbage', results: ['כרוב', 'תפוז', 'סלק', 'אפרסק'], correct: 'כרוב' },
        { word: 'blackberry', results: ['פטל שחור', 'בננה', 'תפוח', 'אגס'], correct: 'פטל שחור' },
        { word: 'corn', results: ['תירס', 'תפוח', 'תאנה', 'אפרסק'], correct: 'תירס' },
        { word: 'parsley', results: ['פטרוזיליה', 'בננה', 'תפוח', 'מנגו'], correct: 'פטרוזיליה' },
        { word: 'walnut', results: ['אגוז מלך', 'שסק', 'אגוז', 'בננה'], correct: 'אגוז מלך' },
        { word: 'rhubarb', results: ['רוברב', 'תאנה', 'בצל', 'אגס'], correct: 'רוברב' },
        { word: 'brussels sprouts', results: ['שאירבת בריסל', 'תפוז', 'תפוח', 'לימון'], correct: 'שאירבת בריסל' },
    ]
]; */

export const fruitWords = [
    {en: "Apple", he: "תפוח"},
    {en: "Orange", he: "תפוז"},
    {en: "Banana", he: "בננה"},
    {en: "Watermelon", he: "אבטיח"},
    {en: "Tomato", he: "עגבניה"},
    {en: "Cucumber", he: "מלפפון"},
    {en: "Strawberry", he: "תות"},
    {en: "Carrot", he: "גזר"},
    {en: "Potato", he: "תפוח אדמה"},
    {en: "Eggplant", he: "חציל"},
    {en: "Squash", he: "קישוא"},
    {en: "Carob", he: "חרוב"},
    {en: "Grapefruit", he: "אשכולית"},
    {en: "Pineapple", he: "אננס"},
    {en: "Avocado", he: "אבוקדו"},
    {en: "Cabbage", he: "כרוב"},
    {en: "Pomegranate", he: "רימון"},
    {en: "Date", he: "תמר"},
    {en: "Clementine", he: "קלמנטינה"},
    {en: "Kiwi", he: "קיווי"},
    {en: "Mango", he: "מנגו"},
    {en: "Plum", he: "שזיף"},
    {en: "Persimmon", he: "אפרסמון"},
    {en: "Pear", he: "אגס"},
    {en: "Almond", he: "שקד"},
    {en: "Broccoli", he: "ברוקולי"},
    {en: "Corn", he: "תירס"},
    {en: "Parsley", he: "פטרוזיליה"},
    {en: "Onion", he: "בצל"},
    {en: "Lychee", he: "ליצ'י"},
    {en: "Pepper", he: "פלפל"},
    {en: "Pumpkin", he: "דלעת"},
    {en: "Lettuce", he: "חסה"},
    {en: "Garlic", he: "שום"},
    {en: "Cilantro", he: "כוסברה"},
    {en: "Lemon", he: "לימון"},
    {en: "Bean", he: "שעועית"},
    {en: "Fig", he: "תאנה"},
    {en: "Coconut", he: "קוקוס"},
    {en: "Pea", he: "אפונה"},
    {en: "Beet", he: "סלק"},
    {en: "Wheat", he: "חיטה"},
    {en: "Cantaloupe", he: "מלון"},
    {en: "Olive", he: "זית"},
    {en: "Apricot", he: "משמש"},
    {en: "Barley", he: "שעורה"},
    {en: "Kohlrabi", he: "קולורבי"},
    {en: "Strawberry", he: "תות"},
    {en: "Sweet potato", he: "בטטה"},
    {en: "Starfruit", he: "קרמבולה"},
    {en: "Blueberries", he: "אוכמניות"},
    {en: "Artichoke", he: "ארטישוק"},
    {en: "Prickly pear", he: "סברס"},
    {en: "Guava", he: "גויאבה"},
];

function generateGameData() {
    let selectedWord = fruitWords[Math.floor(Math.random() * fruitWords.length)];
    let remainingWords = fruitWords.filter(word => word !== selectedWord);
    
    let otherWords = [];
    for (let i = 0; i < 3; i++) {
        let randomWord = remainingWords[Math.floor(Math.random() * remainingWords.length)];
        otherWords.push(randomWord.he);
        remainingWords = remainingWords.filter(word => word !== randomWord);
    }

    let gameData = {
        english: selectedWord.en,
        hebrew: selectedWord.he,
        otherWords: otherWords
    };
    return gameData;
}
