const productList = document.querySelectorAll('.product-slider');

productList.forEach(item => {

  const mySiema = new Siema({
    selector: item.id,
    duration: 200,
    easing: 'ease-out',
    perPage: 1,
    startIndex: 0,
    draggable: true,
    multipleDrag: true,
    threshold: 20,
    loop: true,
    rtl: false,
    onInit: () => {},
    onChange: () => {},
  });

  
  item.parentNode.querySelectorAll('.prev').forEach(btn => {
    btn.addEventListener('click', () => mySiema.prev());
  })  
  item.parentNode.querySelectorAll('.next').forEach(btn => {
    btn.addEventListener('click', () => mySiema.next());
  })
});


