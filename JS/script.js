//Function which will choose a quote to show randomely
function ShowQuote()
{
    let Quotes=["A bottle of blood saved my life. Was it yours?",
                "A single drop of blood can make a huge difference",
                "Be someone's lifeline; donate blood",
                "Blood donors: Silent Heroes Saving Lives",
                "Donate blood, and be helpful as it is said that the best among men are those who help others",
                "Heroes don't always wear capes; they sometimes wear jeans and shirts too while donating blood",
                "Once a blood donor is always a lifesaver",
                "If you want to witness a miracle, donate blood",
                "Blood is the most precious gift that anyone can give to another person - the gift of life"];
    
    //Choosing a quote
    let Pick = Math.floor(Math.random() * (Quotes.length));
    //Fetching the div by ID and then writing in it using innter html
    let quoteDiv = document.getElementById("quoteintro");
    quoteDiv.innerHTML = `"${Quotes[Pick]}"`; 
}

ShowQuote();        //Refreshes Quote everytime home page refreshes