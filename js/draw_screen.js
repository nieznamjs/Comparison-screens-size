$(document).ready(function(){
    
    var screen1_size;
    var screen2_size;

    var screen1_format;
    var screen2_format;
    
    var screen1_height_prop;
    var screen2_height_prop;
    var screen1_width_prop;
    var screen2_width_prop;

    var screen1_width;
    var screen1_height;
    var screen2_width;
    var screen2_height;

    var format_16_9 = 1.78;
    var format_4_3 = 1.33;
    var format_21_9 = 2.33;
    
    var proportion;

    // zaznacz 16x9
    $("#x16_9").click(function(){
        $('#x16_9').prop("checked", "checked");
        $('#img_16_9').addClass('zaznaczony_checkbox');
        $('#img_4_3').removeClass('zaznaczony_checkbox');
        $('#img_21_9').removeClass('zaznaczony_checkbox');
        screen1_format = '16x9';
    });

    //zaznacz 4x3
    $("#x4_3").click(function(){
        $('#x4_3').prop("checked", "checked");
        $('#img_4_3').addClass('zaznaczony_checkbox');
        $('#img_16_9').removeClass('zaznaczony_checkbox');
        $('#img_21_9').removeClass('zaznaczony_checkbox');
        screen1_format = '4x3';
    });

    //zaznacz 21x9
    $("#x21_9").click(function(){
        $('#x21_9').prop("checked", "checked");
        $('#img_21_9').addClass('zaznaczony_checkbox');
        $('#img_16_9').removeClass('zaznaczony_checkbox');
        $('#img_4_3').removeClass('zaznaczony_checkbox');
        screen1_format = '21x9';
    });



    // zaznacz 16x9x2
    $("#x16_9_2").click(function(){
        $("#x16_9_2").prop("checked", "checked");
        $("#img_16_9_2").addClass('zaznaczony_checkbox');
        $('#img_4_3_2').removeClass('zaznaczony_checkbox');
        $('#img_21_9_2').removeClass('zaznaczony_checkbox');
        screen2_format = '16x9';
    });

    //zaznacz 4x3x2
    $("#x4_3_2").click(function(){
        $("#x4_3_2").prop("checked", "checked");
        $("#img_4_3_2").addClass('zaznaczony_checkbox');
        $('#img_16_9_2').removeClass('zaznaczony_checkbox');
        $('#img_21_9_2').removeClass('zaznaczony_checkbox');
        screen2_format = '4x3';
    });

    //zaznacz 21x9x2
    $("#x21_9_2").click(function(){
        $("#x21_9_2").prop("checked", "checked");
        $("#img_21_9_2").addClass('zaznaczony_checkbox');
        $('#img_16_9_2').removeClass('zaznaczony_checkbox');
        $('#img_4_3_2').removeClass('zaznaczony_checkbox');
        screen2_format = '21x9';
    });
    
    
    $("#screen1_size").change(function(){
        screen1_size = $('#screen1_size').val();
        if(screen1_size <= 1)
            {
                $("#screen1_size").val(1);
                screen1_size = 1;
            }
    }); //wczytaj i sprawdz wielkosc #1
    
    $("#screen2_size").change(function(){
        screen2_size = $('#screen2_size').val();
        if(screen2_size <= 1)
            {
                $("#screen2_size").val(1);
                screen2_size = 1;
            }
    }); //wczytaj i sprawdz wielkosc #2

    //sprawdz format 
    $("#porownaj").click(function(){
        
        $('#screen_1').fadeOut(500);
        $('#screen_2').fadeOut(500);
        
        if(screen1_size == null || screen2_size == null)
            {
                alert("Podaj obie wielkości monitorów!");
            }
        else
            {           
                if (screen1_format == '16x9')
                    {
                        screen1_width = 1;
                        screen1_height = screen1_size / 2.78;
                        screen1_format = 1.78;
                        screen1_height_prop = 9;
                        screen1_width_prop = 16;
                    }
                else if (screen1_format == '4x3')
                    {
                        screen1_width = 1;
                        screen1_height = screen1_size / 2.33;
                        screen1_format = 1.33;
                        screen1_height_prop = 3;
                        screen1_width_prop = 4;
                    }
                else if (screen1_format == '21x9')
                    {
                        screen1_width = 1;
                        screen1_height = screen1_size / 3.33;
                        screen1_format = 2.33;
                        screen1_height_prop = 9;
                        screen1_width_prop = 21;
                    } // koniec porownania #1

                if (screen2_format == '16x9')
                    {
                        screen2_width = 1;
                        screen2_height = screen2_size / 2.78;
                        screen2_format = 1.78;
                        screen2_height_prop = 9;
                        screen2_width_prop = 16;
                    }
                else if (screen2_format == '4x3')
                    {
                        screen2_width = 1;
                        screen2_height = screen2_size / 2.33;
                        screen2_format = 1.33;
                        screen2_height_prop = 3;
                        screen2_width_prop = 4;
                    }
                else if (screen2_format == '21x9')
                    {
                        screen2_width = 1;
                        screen2_height = screen2_size / 3.33;
                        screen2_format = 2.33;
                        screen2_height_prop = 9;
                        screen2_width_prop = 21;
                    } // koniec porownania #2

                // x = sqrt(c^2*(a^2/a^2+b^2)) uff, ciezkie obliczenia

                screen1_height = Math.sqrt( Math.pow( screen1_size, 2) * ( Math.pow( screen1_height_prop, 2 ) / (Math.pow( screen1_height_prop, 2) + Math.pow( screen1_width_prop, 2) ) ) );

                screen2_height = Math.sqrt( Math.pow( screen2_size, 2) * ( Math.pow( screen2_height_prop, 2 ) / (Math.pow( screen2_height_prop, 2) + Math.pow( screen2_width_prop, 2) ) ) );

                if (screen1_height>=screen2_height)
                    {
                        $("#comparison").html('<div id="screen_1"><span id="show_screen1_size"></span><div id="screen_2"><span id="show_screen2_size"></span></div></div>');

                        proportion = screen1_height / screen2_height;

                        $("#comparison").fadeIn(500);  //wyswietl glownego diva
                        $("#screen_1").css({ "z-index": "1",  //nadaj z-index
                                            "height": "100%",  //nadaj wysokosc
                                            "position": "relative",  //pozycja
                                            "display": "inline-block"
                                           }); 
                        screen1_height = $("#screen_1").height();  //pobierz wysokosc
                        screen1_width = screen1_height * screen1_format;
                        $("#screen_1").css("width", screen1_width);  // nadaj szerokosc
                        $("#show_screen1_size").text("#1 - " + screen1_size + '"'); // wyswietl wielkosc ekranu
                        $("#screen_1").fadeIn(500);  //wyswietl ekran #1

                        screen2_height = screen1_height / proportion;

                        $("#screen_2").css({ "z-index": "2",
                                            "height": screen2_height,
                                            "position": "absolute",
                                            "left": "0"
                                           });
                        screen2_width = screen2_height * screen2_format;
                        $("#screen_2").css( "width", screen2_width );
                        $("#show_screen2_size").text("#2 - " + screen2_size + '"');
                        $("#screen_2").fadeIn(500);
                        $("#comparison").ScrollTo({
                            duration: 1000
                        });
                    }

                else if (screen1_height<screen2_height)
                    {
                        $("#comparison").html('<div id="screen_2"><span id="show_screen2_size"></span><div id="screen_1"><span id="show_screen1_size"></span></div></div>');

                        proportion = screen2_height / screen1_height;

                        $("#comparison").fadeIn(500);  //wyswietl glownego diva
                        $("#screen_2").css({ "z-index": "1",  //nadaj z-index
                                            "height": "100%",  //nadaj wysokosc
                                            "position": "relative",  //pozycja
                                            "display": "inline-block"
                                           }); 
                        screen2_height = $("#screen_2").height();  //pobierz wysokosc
                        screen2_width = screen2_height * screen2_format;
                        $("#screen_2").css("width", screen2_width);  // nadaj szerokosc
                        $("#show_screen2_size").text("#2 - " + screen2_size + '"'); // wyswietl wielkosc ekranu
                        $("#screen_2").fadeIn(500);  //wyswietl ekran #2

                        screen1_height = screen2_height / proportion;

                        $("#screen_1").css({ "z-index": "2",
                                            "height": screen1_height,
                                            "position": "absolute",
                                            "left": "0"
                                           });
                        screen1_width = screen1_height * screen1_format;
                        $("#screen_1").css( "width", screen1_width );
                        $("#show_screen1_size").text("#1 - " + screen1_size + '"');
                        $("#screen_1").fadeIn(500);
                        $("#comparison").ScrollTo({
                            duration: 1000
                        });
                    }
                
                
            } //koniec if
    }); // koniec click 
    
});// calkiem koniec
