const hamburger = document.getElementById('hamburger-icon');

hamburger.addEventListener('click', () => {
    const navigation = document.getElementById('navigation');
    
    if (navigation.style.display === 'none') {
        navigation.style.display = 'block';
    } else {
        navigation.style.display = 'none';
    }
})

