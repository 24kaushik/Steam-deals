let url = "https://www.cheapshark.com/api/1.0/deals?storeID=1&upperPrice=15"
let cards = document.getElementById("cards")
let resp = fetch(url)
resp.then((deals) => {
    return deals.json()
}).then((deals) => {
    console.log(deals)
    ihtml = ""
    for (items in deals) {
        console.log(deals[items])
        ihtml += `<div class="card text-white border-light mb-3 bg-dark m-2" style="width: 22rem;">
                    <img src="${deals[items].thumb}" class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${deals[items].title}</h5>
                    <p class="card-text">Normal Price: ${deals[items].normalPrice}</p>
                    <p class="card-text">Sale Price: ${deals[items].salePrice}</p>
                    <p class="card-text">Savings: ${deals[items].savings}%</p>
                    <p class="card-text">Ratings: ${deals[items].steamRatingText}</p>
                    </div>
                 </div>`
    }
    cards.innerHTML = ihtml
})
