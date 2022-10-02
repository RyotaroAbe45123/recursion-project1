class Word{
    constructor(word, defintion, pictureUrl){
        this.word = word;
        this.defintion = defintion;
        this.pictureUrl = pictureUrl;
    }
}

class EmotionObject{
    constructor(emotion, description, color, onomatopoeia){
        this.emotion = emotion;
        this.description = description;
        this.color = color;
        this.onomatopoeia = onomatopoeia;
    }

    getOnomatopoeiaWords(){
        return this.onomatopoeia.map((onomatope) => 
        new Word(onomatope, dictionary[onomatope], pictureDictionary[onomatope])
        )
    }

    getHtmlContainerString(){
        const array = this.getOnomatopoeiaWords()
        const card = array.map((a) => 
            `<div class="card-container">
                <div>
                    <h2>${a.word}</h2>
                    <p>${a.defintion}</p>
                </div>
                <img src=${a.pictureUrl} width="150px" height="150px" />
            </div>`
        )
        const htmlString = `
            <div style="background-color:${this.color}" class="container">
                <h2>${this.emotion}</h2>
                <p>${this.description}</p>
                <div class="flex-wrap">
                    ${card}
                </div>
            </div>
        `
        return htmlString;
        // return card;
    }
}

//グローバル定数
const dictionary = {
    "bark":"the sound made by a dog",
    "grunt":"issue a low, animal-like noise",
    "roar":"make a loud noise, as of an animal",
    "whack":"the act of hitting vigorously",
    "smack":"a blow from a flat object (as an open hand)",
    "hiss":`make a sharp, elongated "s" sound`,
    "ahem":"the utterance of a sound similar to clearing the throat",
    "bawl":"cry loudly",
    "bling":"flashy, ostentatious jewelry",
    "boom":"a deep prolonged loud noise",
    "buzz":"the sound of rapid vibration",
    "caw":"utter a cry, characteristic of crows, rooks, or ravens",
    "chatter":"talk socially without exchanging too much information",
    "chant":"a repetitive song in which syllables are assigned to a tone",
    "clatter":"a continuous rattling sound as of hard objects falling or striking each other.",
    "clunk":"a heavy dull sound (as made by impact of heavy objects)",
    "crawl":"move forward on the hands and knees or by dragging the body close to the ground.",
    "flick":"throw or toss with a quick motion",
    "giggle":"a light, silly laugh.",
    "gargle":"an act or instance or the sound of washing one's mouth and throat with a liquid kept in motion by exhaling through it.",
    "honk":"the cry of a goose or any loud sound resembling it",
    "oink":"the short low gruff noise of the kind made by hogs",
    "whine":"a complaint uttered in a plaintive way",
    "waah":"sound made when crying by babies",
    "zing":"sound my by something energetic"
};

const pictureDictionary = {
    "bark":"https://cdn.pixabay.com/photo/2013/07/25/11/59/german-shepherd-166972_1280.jpg",
    "grunt":"https://cdn.pixabay.com/photo/2010/11/29/nepal-419__480.jpg",
    "roar":"https://cdn.pixabay.com/photo/2018/04/13/21/24/lion-3317670_1280.jpg",
    "whack":"https://cdn.pixabay.com/photo/2017/10/27/11/49/boxer-2894025_1280.jpg",
    "smack":"https://cdn.pixabay.com/photo/2015/03/20/19/38/hammer-682767_1280.jpg",
    "hiss":"https://cdn.pixabay.com/photo/2016/10/13/23/30/cat-1739091_1280.jpg",
    "ahem":"https://cdn.pixabay.com/photo/2014/03/13/10/12/man-286476_1280.jpg",
    "bawl":"https://cdn.pixabay.com/photo/2015/06/26/10/17/smiley-822365_960_720.jpg",
    "bling":"https://cdn.pixabay.com/photo/2017/12/30/13/37/happy-new-year-3050088_1280.jpg",
    "boom":"https://cdn.pixabay.com/photo/2016/04/12/21/17/explosion-1325471_1280.jpg",
    "buzz":"https://cdn.pixabay.com/photo/2020/02/13/10/29/bees-4845211_1280.jpg",
    "caw":"https://cdn.pixabay.com/photo/2017/02/16/11/13/bird-2071185_1280.jpg",
    "chatter":"https://cdn.pixabay.com/photo/2014/07/25/08/55/bar-401546_1280.jpg",
    "chant":"https://cdn.pixabay.com/photo/2016/07/19/07/43/parchment-1527650__340.jpg",
    "clatter":"https://cdn.pixabay.com/photo/2020/02/06/19/01/clutter-4825256_1280.jpg",
    "clunk":"https://cdn.pixabay.com/photo/2017/01/10/03/06/steel-1968194_1280.jpg",
    "crawl":"https://cdn.pixabay.com/photo/2017/11/23/07/47/baby-2972221__340.jpg",
    "flick":"https://cdn.pixabay.com/photo/2012/02/23/08/48/disgust-15793_1280.jpg",
    "giggle":"https://cdn.pixabay.com/photo/2017/08/07/15/18/people-2604850_1280.jpg",
    "gargle":"https://cdn.pixabay.com/photo/2017/04/03/16/32/girl-smoke-cigarette-2198839_1280.jpg",
    "honk":"https://cdn.pixabay.com/photo/2017/02/28/14/37/geese-2105918_1280.jpg",
    "oink":"https://cdn.pixabay.com/photo/2019/03/02/15/32/pig-4030013_1280.jpg",
    "whine":"https://cdn.pixabay.com/photo/2020/05/01/01/57/girl-5115192_960_720.jpg",
    "waah":"https://cdn.pixabay.com/photo/2017/01/18/02/18/emotions-1988745_1280.jpg",
    "zing":"https://cdn.pixabay.com/photo/2017/09/14/16/38/fiber-optic-2749588_1280.jpg"
};

const emotions = [
    new EmotionObject("angry", "feeling or showing strong annoyance, displeasure, or hostility; full of anger.", "red", ["bark","grunt", "roar","whack","smack","hiss"]),
    new EmotionObject("happy", "feeling or showing pleasure or contentment.", "yellow", ["bling","chatter","chant","giggle"]),
    new EmotionObject("bad", "not such as to be hoped for or desired; unpleasant or unwelcome.", "beige", ["ahem","clatter","clunk"]),
    new EmotionObject("sad", "feeling or showing sorrow; unhappy.", "grey", ["bawl","whine","waah"]),
    new EmotionObject("surprised", "to feel mild astonishment or shock.", "purple", ["boom","honk","zing"]),
    new EmotionObject("fearful", "feeling afraid; showing fear or anxiety.", "green", ["buzz","caw","crawl"]),
    new EmotionObject("disgusted", "feeling or showing strong annoyance, displeasure, or hostility; full of anger.", "orange", ["flick","gargle","oink"])
];

const createOnomatopeCard = (emotion) => {
    const innerDiv = document.createElement("div")
    innerDiv.innerHTML = emotion.getHtmlContainerString()
    // innerDiv.innerHTML = "<p>a</p>"
    return innerDiv
}

// const createTitleContainerComponent = (emotion) => {}

const createTitleContainer = (emotions) => {
    const innerDiv = document.createElement("div")
    innerDiv.className = "grid"

    emotions.map((emotion) => {
        let linkComponent = document.createElement("a");
        linkComponent.href = `#sec-${emotion.emotion}`;
        linkComponent.classList.add("link")

        let container = document.createElement("div");
        container.classList.add("title-emotion-container", emotion.color);
        linkComponent.append(container)

        let emotionTitle = document.createElement("h2");
        emotionTitle.innerHTML = emotion.emotion.toUpperCase();
        let emotionImage = document.createElement("img")
        emotionImage.classList.add("image", "title-emotion-image");
        emotionImage.src = emotion.getOnomatopoeiaWords()[0].pictureUrl;
        container.append(emotionTitle);
        container.append(emotionImage);
        innerDiv.append(linkComponent);
    })
    return innerDiv
}

// console.log(emotions.map((emotion) => emotion.getOnomatopoeiaWords()))

const root = document.getElementById("root");

const header = document.createElement("div")
header.className = "header"
root.append(header)

const titleContainer = document.createElement("div");
titleContainer.className = "title-container";
root.append(titleContainer)

const titleContainerComponent = document.createElement("div");
titleContainer.append(titleContainerComponent)

const title = document.createElement("h1");
title.className = "title";
title.innerHTML = "Category";
titleContainerComponent.append(title);

titleContainerComponent.append(createTitleContainer(emotions))

// const emotaionContainer = document.createElement("div");
// emotionContainer.className = "emotion-container"
// root.append(emotionContainer)


emotions.map((emotion) => {
    let component = document.createElement("div");
    component.classList.add("emotion-container", emotion.color);
    component.id = `sec-${emotion.emotion}`

    let componentTitle = document.createElement("h2");
    // componentTitle.classList.add("")
    componentTitle.innerHTML = emotion.emotion.toUpperCase();
    let componentDescription = document.createElement("h3");
    componentDescription.innerHTML = emotion.description;

    let cardGrid = document.createElement("div");
    // cardContainer.className = "card-container"
    cardGrid.classList.add("card-grid");
    component.append(componentTitle);
    component.append(componentDescription);
    component.append(cardGrid);

    emotion.getOnomatopoeiaWords().map((word) => {
        let cardContainer = document.createElement("div");
        // card.classList.add("card");
        cardContainer.classList.add("card-container")
        // card.className = "card"
        // j.innerHTML = word.word
        cardGrid.append(cardContainer);

        // let card = document.createElement("div");
        // card.classList.add("card");
        // card.classList.add("card");
        // card.className = "card"
        // j.innerHTML = word.word
        // cardContainer.append(card);

        let cardContent = document.createElement("div");
        cardContent.classList.add("card-content");
        // cardContent.innerHTML = "<div>div</div>"
        // card.append(cardContent);
        // cardContainer.append(cardContent)

        let cardTitle = document.createElement("h3");
        cardTitle.classList.add("card-title")
        cardTitle.innerHTML = word.word;

        let cardDescription = document.createElement("div");
        cardDescription.classList.add("card-description");
        cardDescription.innerHTML = word.defintion;

        cardContent.append(cardTitle);
        cardContent.append(cardDescription);
        // cardContent.append(cardDescription);

        let cardImage = document.createElement("img");
        cardImage.classList.add("image");
        cardImage.src = word.pictureUrl;
        cardImage.alt = word.word;
        // cardImage.fallbackSrc = "thpps://via.placeholer.com/100"

        // card.append(cardImage)
        cardContainer.append(cardContent);
        cardContainer.append(cardImage);
        // card.append(cardContent);
        // cardContent.append(cardImage)
        // cardContent.append(cardImage);
        // cardContent.append(cardImage);
        // let c = document.createElement("div");
        // c.classList.add("c");
        // let t = document.createElement("h3");
        // t.innerHTML = word.word;
        // let d = document.createElement("h6");
        // d.innerHTML = word.defintion;
        // let i = document.createElement("img");
        // i.innerHTML = word.pictureUrl;
    })

    root.append(component)
})

// const b = document.createElement("div")
// b.className = "b"
// root.append(b)
// const c = document.createElement("div")
// c.className = "c"
// root.append(c)
// element.innerHTML = emotions[0].getHtmlContainerString()
// emotions.map((emotion) => element.append(createOnomatopeCard(emotion)))