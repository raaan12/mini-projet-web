$(document).ready(function() {

    $("#ex1").click(function() {
        $("p").toggle("slow", function() {
            if ($("p").is(":visible")) {
                alert("Le paragraphe est visible.");
            } else {
                alert("Le paragraphe est caché.");
            }
        });





    }),$(function(){
        $("#ex2").click(function(){
            $("#p1").toggle("slow", function(){
            $("#p1").append("<p>hello again xddd</p>"); 
       });
              
    }); 
   
       
      }),$(function(){
        $("#ex3").click(function() {
            $("#f3").toggle("slow", function() {
                 $("#afficher_texte").click(function(){
                     alert ("Le texte contenu dans le textarea est " + $("#mon_textarea").val());
                });
           });
       
    });
     }),$(function(){
    $("#ex4").click(function(){
        $("#f4").toggle("slow", function(){
            document.getElementById('no_paste').addEventListener('keydown',function (foo)
             {
                 if (foo.keyCode == 86) 
                 {
                      alert("Le collage de texte n'est pas autorisé !");
                      foo.preventDefault();
                 }    
            });
        });

    });
}),$(function(){
    $("#ex5").click(function(){
        $("#f5").toggle("slow",function(){
            function supprimer_dernier_caractere(elm) {
                var val = $(elm).val();
              var cursorPos = elm.selectionStart;
              $(elm).val(
                 val.substr(0,cursorPos-1) + // before cursor - 1
                val.substr(cursorPos,val.length) // after cursor
              )
              elm.selectionStart = cursorPos-1; // replace the cursor at the right place
              elm.selectionEnd = cursorPos-1;
              }
              
              $(document).ready( function () {
                // Supprime le dernier caractère s'il n'est pas alphanumérique sur evt keyup
                $('body').delegate('input.only_alpha_num','keyup',function(){
                  if(!$(this).val().match(/^[0-9a-z]*$/i)) // a-z et 0-9 uniquement
                    supprimer_dernier_caractere(this);
                });
              
              
              // Annulation du "coller" dans l'input texte auquel on a affecté l'identifiant "no_paste"
              document.getElementById('no_paste').addEventListener('keydown', 
                function (foo){
                  if (foo.keyCode == 86)
                  {
                     // alert('Vous avez copié du texte');
              foo.preventDefault();
                  }
               });
              
              
              }) 
        });
    });
}),$(function(){
    $("#ex6").click(function(){
        $("#f6").hover(
            function () {
              $(this).attr('src','./repas.jpg');  
            },
            function () {
               $(this).attr('src','./repas.jpg');  
            }
         ); 
        })
    })



    
}),$(function(){
    $("#ex7").click(function(){
        $("#mon_image").toggle("slow",function(){
            $( "#moncalendrier").datepicker({ showOn: "both",                           
            buttonImage: "../img/b_calendar.png",
            buttonImageOnly: true,
            buttonText:'Cliquer pour choisir une date',
            onClose: function(dateText, inst) {  }, $options });
        $('#moncalendrier').focus();
        })
    })




}),$(function(){
    $("#ex8").click(function(){
        $("#f8").toggle("slow",function(){

        $("#monimage").hover(
            function(){
             // La souris passe sur l'élément
             $("#temp").remove()
             $(this).append("<div id='temp'></div>"); // Création d'un div temporaire qui va héberger l'image en surimpression
             bgimg = "url('./repas.jpg')";
             $(this).find("#temp").css({position:"absolute",background:"transparent "+bgimg+" no-repeat",opacity:0});
             $(this).find("#temp").stop().animate({opacity:1},500);  }, 
          function(){
             // La souris sort de l'élément
               $(this).find("#temp").stop().animate({opacity:0},500,function(){$(this).remove()});
            }
          )
    })
})
}),$(function(){
    $("#ex9").click(function(){
            $("a img").hover(
                function(){ $(this).animate({ opacity : '.75' }); },
                function(){ $(this).animate({ opacity : '6' }); }
               );
    });



}),$(function(){
    $("#ex10").click(function(){
        $("div").toggle("slow",function(){
            $('#mydiv').click(function(e){
                alert('clicked inside');
                e.stopPropagation();
              });
              $(document).click(function() {
                alert('clicked outside');
              });
        });
    });


    
}),  $(function() {
    $("#ex11").click(function(){

    var today = new Date();
    var ladate=Date.parse(today);
    var lannee = today.getFullYear();
    var dateprintemps  =Date.parse(new Date(lannee, 2, 21));
    var dateete        =Date.parse(new Date(lannee, 5, 21));
    var dateautomne    =Date.parse(new Date(lannee, 8, 21));
    var datehiver      =Date.parse(new Date(lannee, 11, 21));
    if(ladate>=dateprintemps && ladate<dateete){
      $("#monimage").css({backgroundImage: "url('img/Fond-Printemps.png')"}); }
    else if(ladate>=dateete && ladate<dateautomne){
      $("#monimage").css({backgroundImage: "url('img/Fond-Ete.png')"});  }
    else if(ladate>=dateautomne && ladate<datehiver){
      $("#monimage").css({backgroundImage: "url('img/Fond-Automne.png')"});  }
    else if(ladate>=datehiver || ladate<dateprintemps){
      $("#monimage").css({backgroundImage: "url('img/Fond-Hiver.png')"});  }
    });


}),$(function(){
    $("#ex12").click(function(){
$('.maclassegenerale').not(".maclasseaexclure").css({"background":"url(btPlay.png)  no-repeat 5px 5px"});
    });



}),$(function(){
    $("#ex13").click(function(){
        $("div#f13").toggle("slow",function(){
            var paragraphe = $(".exemple p");
            alert("Nombre de paragraphes dans div est " + paragraphe.length);
           });
        });





}),$(function(){
    $('#ex14').click(function () {
            mavaleur =parseInt($("#monDiv1").css('height')) - parseInt($("#monDiv2").css('marginTop')});
    
    
    
        }),$(function(){
        $("#ex15").click(function(){
            $(".elementtextarea").attr('readonly','readonly');


        })
    }),$(function(){
        $("#ex17").click(function(){

            $(document).ready( function () {
                $('#redirection').click(function() {
                  $('html,body').animate({scrollTop: $("#monancre").offset().top}, 'slow'      );
                });  
             }) 

        })
  

    }),$(function(){
        $("#ex20").click(function(){
            $("form#f20").toggle("slow",function(){
                $('#titre').keyup(function(e) {    
                    if(e.keyCode == 13) { // KeyCode de la touche entrée
                           alert('Hey ! Tu as appuyé sur la touche entrée !!'); 
                  }
                 }); 
            })
        })


    }),$(function(){
        $('#ex22').click(function () {
            var new_element = jQuery('<div id="new_elt">?</div>');
            // On ajoute du style avec la fonction .css()
            new_element.css({
                background: 'gray',
                width: '50px',
                height: '30px',
                padding: '3px'
            });
            $('.rajout').append(new_element);
            $('.rajout').toggle();
        })






    }),$(function(){
        $('#ex23').click(function () {

            $("#div_pere").click (
                function (){
                  alert ('click pere!');
                   $(this).children('div:first').click();
                }
              );


    })

    }),$(function(){
        $('#ex25').click(function () {

            $(".maclasse").each(function(){ 
                $(this).css({"background":""});
              });
        })


    }),$(function(){
        $("#ex26").click(function(){
            $("#mondiv").siblings('div').each(function(i){
                alert (i +' : '+$(this).html());
   });
   // affichera '0 : A' puis '1 : B'  puis '2 : D'
        })
        
    }),$(function(){
        $('#ex28').click(function () {
            $("#monDiv").fadeOut('slow').queue(function() {
                $("#monDeuxiemeDiv").fadeIn('slow');
                $(this).dequeue();
             });
        })




    }),$(function(){
        $('#ex29').click(function () {
            alert("charger jquery directement via https://ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js")
        })




        
    }),$(function(){
        $("#ex30").click(function(){
            $("img#image-neon").toggle("slow",function(){
                function FaireClignoterImage (){ $("#image-neon").fadeOut(200).delay(300).fadeIn(200); } 
                 setInterval(FaireClignoterImage,700);  
            })
        })
    })
