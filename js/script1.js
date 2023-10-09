const pq = document.querySelectorAll('.row  .img-section');
console.log(pq)

pq.forEach(item =>{
    setInterval(()=>{
        item.style.transform='translateY(0)';
        item.style.opacity =1;
    } ,10 );
})

