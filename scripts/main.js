const randomImages = [
    'https://smoothsailingcarclub.files.wordpress.com/2012/02/tumblr_lybv1bhjjo1rneby2o1_1280.jpg', 'https://images.unsplash.com/photo-1630859213948-8fd7babd8dfe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', 'https://images.unsplash.com/photo-1634118928862-a4b2be94a03e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80', 'https://images.unsplash.com/photo-1634118928361-63b4b70e8261?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80', 'https://images.unsplash.com/photo-1634118928871-46cfd8830a17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80', 'https://images.unsplash.com/photo-1628387826782-743f4a077b56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', 'https://images.unsplash.com/photo-1639928201917-e0b8d9755adb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80', 'https://images.unsplash.com/photo-1563496678502-47ba397e5ab5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80', 'https://images.unsplash.com/photo-1596473303142-2fa04390ab4d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80', 'https://images.unsplash.com/photo-1621782866603-87c82f074387?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80', 'https://images.unsplash.com/photo-1616520034715-17d7627bec9c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80', 'https://images.unsplash.com/photo-1632277697700-b62fe7ac924c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80', ''
];

const $randomImage1 = document.querySelector('.first-div');
const $randomImage2 = document.querySelector('.second-div');
const $randomImage3 = document.querySelector('.third-div');
const $randomButton = document.querySelector('.rando');

$randomButton.addEventListener('click', () => {
    $randomImage1.style.backgroundImage = `url('randomPhoto()')`;
    $randomImage2.style.backgroundImage = `url('randomPhoto()')`;
    $randomImage3.style.backgroundImage = `url('randomPhoto()')`;
})

function randomPhoto() {
    return randomImages[Math.floor(Math.random() * randomImages.length)]
}
console.log(randomPhoto());