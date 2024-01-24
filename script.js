let body = document.getElementsByTagName("body")[0];

let array = [
    {
        title: "what is netflix?",
        descr: "Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!"
    },
    {
        title: "how much does netflix cost?",
        descr: "Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from EUR 9.39 to EUR 13.99 a month. No extra costs, no contracts."
    },
    {
        title: "where can i watch?",
        descr: "Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere."
    },
    {
        title: "how do i cancel?",
        descr: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime."
    },
    {
        title: "what can i watch on netflix?",
        descr: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
    },
    {
        title: "is netflix good for kids?",
        descr: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see."
    },
    {
        title: "why am i seeing this language?",
        descr: "Your browser preferences determine the language shown here."
    },
]

array.map((item, index) => {
    let bigbox = document.getElementsByClassName("bigbox")[0];

    let items = document.createElement("div")
    items.className = "items"
    bigbox.appendChild(items)

    let title = document.createElement("div")
    title.className = "box maintwo"
    items.appendChild(title)

    let descr = document.createElement("div")
    descr.className = "box content"
    items.appendChild(descr)

    let pTitle = document.createElement("p")
    pTitle.textContent = item.title
    title.appendChild(pTitle)

    let pDescr = document.createElement("p")
    pDescr.textContent = item.descr
    descr.appendChild(pDescr)    

    let plus = document.createElement("div")
    plus.textContent = "+"
    plus.className = "plus"
    title.appendChild(plus)

    title.addEventListener("click", onClick)

    let taggle = true;
    function onClick() {
        if (taggle) {
            descr.classList.remove("content")
            taggle = false; 
            plus.classList.add("rotate")
        }else {
            descr.className = "box content"
            taggle = true;
            plus.classList.remove("rotate")
        }
    }
})