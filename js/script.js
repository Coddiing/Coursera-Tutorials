           
            $( document ).ready( function ( ) {
                //$( '[data-toggle="tooltip"]' ).tooltip();
                  /*
                $("#carousel-pause").click( function (  ) {
                    $("#mycarousel").carousel("pause")
                } ) */
            
                // ############################
                //  ASSIGNMENT STARTS HERE
                //############################

                            $("#parentLoginDiv, #reservationParentDiv").hide() // Hi, friend! Here I'm hidding both components at default.

                            // For reserve table
                            $("#topReserveButton").click(function () {
                                // Since reserve-table button is clicked, reserve section is displayed to the user and the sign-in section is hidden.
                                $( "#parentLoginDiv" ).hide()
                                $( "#reservationParentDiv" ).show()
                                $("#headerTitle").html("Reserve a Table")
                            } ).css({"cursor":"pointer"}) // Adding cursor style to button.

                            // Hi, friend! Here I'm updating the attribute of the reserve-table button dynamically :)
                            $("#topReserveButton").attr("data-toggle", "modal")
                            $("#topReserveButton").attr("data-target", "#loginModal")

                            // For signin
                            $("#loginSpan").click(function () {
                                console.log("This is test")
                                // Since login button is clicked, login section is displayed to the user and the reserve-table section is hidden.
                                $( "#parentLoginDiv" ).show()
                                $( "#reservationParentDiv" ).hide()
                                $("#headerTitle").html("Login")

                            } ).css({"cursor":"pointer"}) // Adding cursor style to button.
                        
                            $("#loginSpan").attr("data-toggle", "modal")
                            $("#loginSpan").attr("data-target", "#loginModal")

              
                // ############################
                //  ASSIGNMENT ENDS HERE
                //############################



                $( "#mycarousel" ).carousel({interval:2000})
 
                $( "#carouselButton" ).click( function (  ) {
                    
                    if ( $("#carouselButton").children("span").hasClass("fa-pause") )
                    {
                        $("#mycarousel").carousel("cycle")
                        $( "#carouselButton" ).children("span").removeClass("fa-pause")
                        $( "#carouselButton" ).children("span").addClass("fa-play")

                    } else if ( $("#carouselButton").children("span").hasClass("fa-play") ) {
                        $("#mycarousel").carousel("cycle")
                        $( "#carouselButton" ).children("span").removeClass("fa-play")
                        $( "#carouselButton" ).children("span").addClass("fa-pause")

                    }
                    
                } )

               
                
            } )