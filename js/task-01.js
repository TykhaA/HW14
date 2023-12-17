const quantity = document.querySelectorAll('.item');
console.log(`Number of categories: ${quantity.length}`);

quantity.forEach(element => {
    const title = element.querySelector('h2').innerHTML;
    const itemLength = element.querySelectorAll('li').length;
    console.log(`category : ${title}`);
    console.log(`Elements : ${itemLength}`)
});

