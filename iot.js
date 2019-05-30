function AlteraPorta(){
    var estado = document.getElementById("estado").innerHTML;
    if(estado === "0"){
        document.getElementById("estado").innerHTML="1";
        document.getElementById("porta").innerHTML="<div class='portaAberta'></div>";
		document.getElementById("botao").innerHTML="<a href='/?abrirPorta' class='botao'>Fechar</a>";
    } else {
        document.getElementById("estado").innerHTML="0";
        document.getElementById("porta").innerHTML="<div class='portaFechada'></div>";
        document.getElementById("botao").innerHTML="<a href='/?fecharPorta' class='botao'>Abrir</a>";
    }
}
