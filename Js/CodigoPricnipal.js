Entrar = true;
    Carta = 0;
    carl = [
    "IMG/1.jpg",
    "IMG/2.jpg",
    "IMG/3.jpg",
    "IMG/4.jpg",
    "IMG/5.jpg",
    "IMG/6.jpg",
    "IMG/7.jpg",
    "IMG/8.jpg",
    "IMG/9.jpg",
    "IMG/10.jpg",
    "IMG/11.jpg",
    "IMG/12.jpg",
    "IMG/13.jpg",
    "IMG/14.jpg",
    "IMG/15.jpg",
    "IMG/16.jpg",
    "IMG/17.jpg",
    "IMG/18.jpg",
    "IMG/19.jpg",
    "IMG/20.jpg",
    "IMG/21.jpg",
    "IMG/22.jpg",
    "IMG/23.jpg",
    "IMG/24.jpg",
    "IMG/25.jpg",
    "IMG/26.jpg",
    "IMG/27.jpg",
    "IMG/28.jpg",
    "IMG/29.jpg",
    "IMG/30.jpg",
    "IMG/31.jpg",
    "IMG/32.jpg",
    "IMG/33.jpg",
    "IMG/34.jpg",
    "IMG/35.jpg",
    "IMG/36.jpg",
    "IMG/37.jpg",
    "IMG/38.jpg",
    "IMG/39.jpg",
    "IMG/40.jpg",
    "IMG/41.jpg",
    "IMG/42.jpg",
    "IMG/43.jpg",
    "IMG/44.jpg",
    "IMG/45.jpg",
    "IMG/46.jpg",
    "IMG/47.jpg",
    "IMG/48.jpg",
    "IMG/49.jpg",
    "IMG/50.jpg",
    "IMG/51.jpg",
    "IMG/52.jpg",
    "IMG/53.jpg",
    "IMG/54.jpg"
];
    imgs=["i1","i2","i3","i4","i5","i6","i7","i8","i9"];
    carta = [];
    Guardadas = [];
    CartasUsando = [];
    function nuale(min, max)
    {
        return Math.round(Math.random() * (max - min) + min);
    }
    function licar()
    {
        gencar=[];
        gencar.push(nuale(0,53));

        y=0;
        x = nuale(0,53);
        while (!gencar.includes(x)  &&  y < 9) {
            gencar.push(x);
            y++;
            x = nuale(0,53);
           // alert(x+" dentro")
        }
        //alert(gencar+"while");
        return gencar;
    }
    function cartas()
    {
        Guardadas = carl;
        var r = [];
        do{
            r=licar();
        }while(r.length != 9);

        //alert(r.length);

        for (let x = 0; x < 9; x++) {
          document.getElementById(imgs[x]).src = carl[r[x]];
          CartasUsando.push(carl[r[x]]);
        }
    }
    function rolaCartas()
    {
        if(Entrar)
        {
            if(carta.length<54)
            {
                do{
                    N = nuale(0,Guardadas.length-1);
                    x = Guardadas[N];
                    if(!carta.includes(x))
                    {
                        Guardadas.splice(N, 1);
                        carta.push(x);
                        document.getElementById("carta").src = x;
                        //if(carta.length>50)
                        //{
                        //    alert(Guardadas.length);
                        //}
                        if(CartasUsando.includes(x))
                        {
                           Carta +=1;
                           indice = CartasUsando.indexOf(x);
                           document.getElementById(imgs[indice]).ht
                        }
                        if(Carta == 9)
                        {
                            alert("En hora buena chavalin, haz ganado");
                            Entrar = false;
                        }
                    }
                }while(!carta.includes(x))
            }
        }
    }