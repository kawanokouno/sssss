$(function () {




    const sign = ['■', '●', '▲', '●', '■', '▲'];

    for (i = sign.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var tmp = sign[i];
        sign[i] = sign[j];
        sign[j] = tmp;
    }

    let firstCard = [];
    let secondCard = [];
    let first = ['true'];

    const back = function back() {
        secondCard[0].prev().css('transform', 'rotateY(-90deg)');
        secondCard[0].prev().css('z-index', '0');
        secondCard[0].css('transform', 'rotateY(-180deg)');
        secondCard[0].css('z-index', '1');

        firstCard[0].prev().css('transform', 'rotateY(-90deg)');
        firstCard[0].prev().css('z-index', '0');
        firstCard[0].css('transform', 'rotateY(-180deg)');
        firstCard[0].css('z-index', '1');
    };

    function rock() {
        $('body').addClass('rock');
    }

    const Unrock = function Unrock() {
        $('body').removeClass('rock');
    }




    $('.card1').prepend('<div class="cardFront"><p></p></div><div class="cardBack"></div>');
    $('.card2').prepend('<div class="cardFront"><p></p></div><div class="cardBack"></div>');
    $('.card3').prepend('<div class="cardFront"><p></p></div><div class="cardBack"></div>');
    $('.card4').prepend('<div class="cardFront"><p></p></div><div class="cardBack"></div>');
    $('.card5').prepend('<div class="cardFront"><p></p></div><div class="cardBack"></div>');
    $('.card6').prepend('<div class="cardFront"><p></p></div><div class="cardBack"></div>');

    $('.card1 .cardFront').children('p').text(sign[0]);
    $('.card2 .cardFront').children('p').text(sign[1]);
    $('.card3 .cardFront').children('p').text(sign[2]);
    $('.card4 .cardFront').children('p').text(sign[3]);
    $('.card5 .cardFront').children('p').text(sign[4]);
    $('.card6 .cardFront').children('p').text(sign[5]);




    $('.cardBack').click(
        function () {

            if (first[0] == 'true') {

                $(this).css('transform', 'rotateY(90deg)');
                $(this).css('z-index', '0');
                $(this).prev().css('transform', 'rotateY(180deg)');
                $(this).prev().css('z-index', '1');

                firstCard[0] = $(this);
                firstCard[1] = $(this).prev().children('p').text();


                first[0] = 'false';




            }else{

                

                $(this).css('transform', 'rotateY(90deg)');
                $(this).css('z-index', '0');
                $(this).prev().css('transform', 'rotateY(180deg)');
                $(this).prev().css('z-index', '1');

                
              

                secondCard[0] = $(this);
                secondCard[1] = $(this).prev().children('p').text();
                if (secondCard[1] == firstCard[1]) {
                    firstCard[0].prev().css('border', '8px solid yellow');
                    secondCard[0].prev().css('border', '8px solid yellow');
                



                }

                if (secondCard[1] != firstCard[1]) {
                    rock();

                    setTimeout(Unrock,1200);
                    setTimeout(back,1000);


                }

                first[0] = 'true';

            }






        }




    )

    $('button').click(
        function () {
            location.reload();
        }
    )











})