const Footer = () => {
    return (
        <footer>
        <div class="footer-content">
            <img src="image/KhuttaMaJutta.png" class="logo" alt="" />
            <div class="footer-ul-container">
                <ul class="category">
                    <li class="category-title">Men</li>
                    <li><a href="#" class="footer-link">brands</a></li>
                    <li><a href="#" class="footer-link">brands</a></li>
                    <li><a href="#" class="footer-link">brands</a></li>
                    <li><a href="#" class="footer-link">brands</a></li>
                    <li><a href="#" class="footer-link">brands</a></li>
                    <li><a href="#" class="footer-link">brands</a></li>
                    <li><a href="#" class="footer-link">brands</a></li>
                    <li><a href="#" class="footer-link">brands</a></li>

                </ul>
                <ul class="category">
                    <li class="category-title">Women</li>
                    <li>
                        <a href="#" class="footer-link">brands</a>
                    </li>
                    <li>
                        <a href="#" class="footer-link">brands</a>
                    </li>
                    <li>
                        <a href="#" class="footer-link">brands</a>
                    </li>
                    <li>
                        <a href="#" class="footer-link">brands</a>
                    </li>
                    <li>
                        <a href="#" class="footer-link">brands</a>
                    </li>
                    <li>
                        <a href="#" class="footer-link">brands</a>
                    </li>
                    <li>
                        <a href="#" class="footer-link">brands</a>
                    </li>
                    <li>
                        <a href="#" class="footer-link">brands</a>
                    </li>
                </ul>
            </div>

        </div>
        <p class="footer-title">About Company</p>
        <p class="info"> KhuttaMaJutta, Here we can find differnt brands of shoes. This is our second year project. Our team member are Mr. Bibhushan Poudel Mr.Santosh Bashyal and Mr. Aaditya Khanal .</p>
        <p class="info"> support emails - KhuttaMaJutta@nec.edu.np, help@khuttamajutta.com</p>
        <div class="footer-social-container">
            <div>
                <a href="#" class="social-link">Terms & Services</a>
                <a href="#" class="social-link">Privacy page</a>
            </div>
            <div>
                <a href="#" class="social-link">Instagram</a>
                <a href="#" class="social-link">Facebook</a>
                <a href="#" class="social-link">Twitter</a>
            </div>
        </div>
        <p class="footer-credit">KhuttaaMaJutta, Best shoes collection of all time.</p>

        <div class="gotoTop" onClick={() =>{
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        }} id="gotoTop">
            <p>^</p>
        </div>
    </footer>
    )
}

export default Footer