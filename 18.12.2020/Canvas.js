function clearCanvas(){
    let canv = document.getElementById('battlefield');
    let ctx = canv.getContext('2d');
    ctx.clearRect(0,0, canv.width, canv.height);
}
