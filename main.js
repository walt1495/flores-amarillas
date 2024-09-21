onload = () =>{
    setTimeout(() => {
        document.body.classList.remove("container");
        document.getElementById("cancion").play();
    }, 1500);
};