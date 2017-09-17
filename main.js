/**
 * Created by Mauri on 09.09.17.
 */

$(document).ready(function() {

    var $menu = $("#slide-left").mmenu();

    var $icon = $("#mmenu-icon");

    var API = $menu.data( "mmenu" );


    $icon.on( "click", function() {

        API.open();

    });


    API.bind( "opened", function() {

        setTimeout(function() {

            $icon.addClass( "is-active" );

        }, 100);

        $icon.on( "click", function() {

            API.close();

        });

    });

    API.bind( "closed", function() {

        setTimeout(function() {

            $icon.removeClass( "is-active" );

        }, 100);

        $icon.on( "click", function() {

            API.open();

        });

    });

});