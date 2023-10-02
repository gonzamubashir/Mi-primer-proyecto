$(document).ready(function(){
   
    
       const url = 'https://pokeapi.co/api/v2/pokemon/'
        $.get(url + (Math.floor (Math.random()*750 + 1)), function(data){
            let imagen = data.sprites.front_default;
            $('#miImagen1').attr('src', imagen);
        })
        $.get(url + (Math.floor (Math.random()*750 + 1)), function(data){
            let imagen = data.sprites.front_default;
            $('#miImagen2').attr('src', imagen);
        })
        $.get(url + (Math.floor (Math.random()*750 + 1)), function(data){
            let imagen = data.sprites.front_default;
            $('#miImagen3').attr('src', imagen);
        })
        $.get(url + (Math.floor (Math.random()*750 + 1)), function(data){
            let imagen = data.sprites.front_default;
            $('#miImagen4').attr('src', imagen);
        })
        $.get(url + (Math.floor (Math.random()*750 + 1)), function(data){
            let imagen = data.sprites.front_default;
            $('#miImagen5').attr('src', imagen);
        })
        $.get(url + (Math.floor (Math.random()*750 + 1)), function(data){
            let imagen = data.sprites.front_default;
            $('#miImagen6').attr('src', imagen);
        })
        $.get(url + (Math.floor (Math.random()*750 + 1)), function(data){
            let imagen = data.sprites.front_default;
            $('#miImagen7').attr('src', imagen);
        })
        $.get(url + (Math.floor (Math.random()*750 + 1)), function(data){
            let imagen = data.sprites.front_default;
            $('#miImagen8').attr('src', imagen);
        })
        $.get(url + (Math.floor (Math.random()*750 + 1)), function(data){
            let imagen = data.sprites.front_default;
            $('#miImagen9').attr('src', imagen);
        })
        $.get(url + (Math.floor (Math.random()*750 + 1)), function(data){
            let imagen = data.sprites.front_default;
            $('#miImagen10').attr('src', imagen);
        })
        $.get(url + (Math.floor (Math.random()*750 + 1)), function(data){
            let imagen = data.sprites.front_default;
            $('#miImagen11').attr('src', imagen);
        })
        $.get(url + (Math.floor (Math.random()*750 + 1)), function(data){
            let imagen = data.sprites.front_default;
            $('#miImagen15').attr('src', imagen);
        })

        $.get(url + (Math.floor (Math.random()*750 + 1)), function(data){
            let imagen = data.sprites.front_default;
            $('#miImagen12').attr('src', imagen);
        })

        $.get(url + (Math.floor (Math.random()*750 + 1)), function(data){
            let imagen = data.sprites.front_default;
            $('#miImagen13').attr('src', imagen);
        })

        $.get(url + (Math.floor (Math.random()*750 + 1)), function(data){
            let imagen = data.sprites.front_default;
            $('#miImagen14').attr('src', imagen);
        })


        let butgeneracion = document.getElementById('seleccion');

        butgeneracion.addEventListener('change', function(){
            console.log($("#seleccion").val());
            if ($("#seleccion").val() ==  1){
                $.get(url + (Math.floor (Math.random()*150 + 1)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen1').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 1)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen2').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 1)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen3').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 1)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen4').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 1)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen5').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 1)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen6').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 1)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen7').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 1)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen8').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 1)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen9').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 1)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen10').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 1)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen11').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 1)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen12').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 1)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen13').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 1)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen14').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 1)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen15').attr('src', imagen);
                })
            }
            if ($("#seleccion").val() ==  2){
                $.get(url + (Math.floor (Math.random()*150 + 101)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen1').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 101)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen2').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 101)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen3').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 101)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen4').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 101)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen5').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 101)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen6').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 101)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen7').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 101)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen8').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 101)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen9').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 101)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen10').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 101)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen11').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 101)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen12').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 101)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen13').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 101)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen14').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 101)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen15').attr('src', imagen);
                })
            }
            if ($("#seleccion").val() ==  3){
                $.get(url + (Math.floor (Math.random()*150 + 201)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen1').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 201)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen2').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 201)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen3').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 201)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen4').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 201)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen5').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 201)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen6').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 201)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen7').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 201)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen8').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 201)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen9').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 201)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen10').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 201)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen11').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 201)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen12').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 201)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen13').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 201)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen14').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 201)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen15').attr('src', imagen);
                })
            }
            if ($("#seleccion").val() ==  4){
                $.get(url + (Math.floor (Math.random()*150 + 301)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen1').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 301)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen2').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 301)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen3').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 301)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen4').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 301)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen5').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 301)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen6').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 301)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen7').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 301)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen8').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 301)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen9').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 301)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen10').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 301)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen11').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 301)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen12').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 301)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen13').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 301)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen14').attr('src', imagen);
                })
                $.get(url + (Math.floor (Math.random()*150 + 301)), function(data){
                    let imagen = data.sprites.front_default;
                    $('#miImagen15').attr('src', imagen);
                })
            }

        }) 
      
        let button = document.getElementById('button');
        button.addEventListener('click', function(){
            const url2 = 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=1400';
            //console.log("url vale: " + url2);
            $.get(url2, function(data){
                //console.log("pokemon a buscar : " + $("#nombre").val());
                //console.log("cantidad de pokemon: " + data.results.length);
                for (j=0; j<data.results.length;j++){
                    //console.log("estoy procesando el pokemon: " + data.results[j].name);
                    //console.log("que corresponde al numero: " + j);
                    let nombre = $("#nombre").val();
                    
                    nombre = nombre.toLowerCase();  
                   
                    if (nombre === data.results[j].name){
                        break;
                    }
                    if ((data.results.length - 1) == j){
                        $("#habilidades").val('');
                        $("#nombre").val('');
                        alert("Pokemon no encontrado");
                    }
                }
                
            })
           
        })
        
        button.addEventListener('click', function(){
            const url2 = 'https://pokeapi.co/api/v2/pokemon/'
            $.get(url2 + $("#nombre").val().toLowerCase(), function(data){
                let urlhabilidades = data.abilities[1].ability.url;
                    $.get(urlhabilidades, function(data){
                        for (i=0;i<data.effect_entries.length;i++){
                            let habilidades = data.effect_entries[i].effect;
                            $("#habilidades").val(habilidades);
                        
                        }
                    })
            })      
        })
        if (window.performance.navigation.type == 1) {
            $("#habilidades").val('');
            $("#nombre").val('');
            $("#seleccion").val(5);
        }
   
})

    

