
/**
 ** Upon first saving search, the following are populated.
 ** 1 main card using and 
 ** 5 cards using 
 ** then when clicking historical requests, these will also call for cards and input the data.
 *TODO Test out how the html will function when the user closes browser, does not clear local storage and comes back to html.
*/
function createWeatherCards() {
    // create a variable, and add if statement to button click function
    createCards = false;

    // once for top card
    $('#today')
        .append(
            [$('<div/>', { "class": "card border-dark bg-light col-lg-9" })
                .append(
                    $('<div/>', { "class": "card-body" })
                        .append(
                            [$("<h5>").addClass("card-title font-weight-bold").text("date"),
                            $("<h6>").addClass("card-subtitle mb-2 text-muted").text(`Weather Forecast`),
                            $(`<p id=input1>`).addClass("card-text ").text("input1"),
                            $(`<p id=input2>`).addClass("card-text ").text("input2"),
                            $(`<p id=input3>`).addClass("card-text ").text("input3"),
                            $(`<p id=input4>`).addClass("card-text ").text("input4"),
                            ]
                        )
                )
            ]
        )



    // for loop for 5 cards, after the first card.
    for (let index = 0; index < 5; index++) {
        const element = [$('<div/>', { "class": "card border-dark bg-light col-md-2" })
            .append(
                $('<div/>', { "class": "card-body" })
                    .append(
                        [$("<h5>").addClass("card-title font-weight-bold").text("date"),
                        $("<h6>").addClass("card-subtitle mb-2 text-muted").text(`Weather Forecast`),
                        $(`<p id=input1>`).addClass("card-text ").text("input1"),
                        $(`<p id=input2>`).addClass("card-text ").text("input2"),
                        $(`<p id=input3>`).addClass("card-text ").text("input3"),
                        $(`<p id=input4>`).addClass("card-text ").text("input4"),
                        ]
                    )
            )
        ];
        $('#forecast').append(element);

    }
};

function populateWeatherCards() {

}