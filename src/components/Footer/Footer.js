import React from "react";

const Footer = () => {
    return (
        <div className="footer-unique">
            <div className="footer-container">
                <ul className="footer-link">
                    <div className="link-header">Đường dẫn</div>
                    <li>
                        <a className="link-a" href="/">
                            Trang chủ
                        </a>
                    </li>
                    <li>
                        <a href="/">Giới thiệu</a>
                    </li>
                    <li>
                        <a href="/">Liên hệ</a>
                    </li>
                </ul>
                <ul className="footer-social">
                    <div className="social-header">Mạng xã hội</div>
                    <li>
                        <a href="/">Facebook</a>
                    </li>
                    <li>
                        <a href="/">Instagram</a>
                    </li>
                    <li>
                        <a href="/">Youtube</a>
                    </li>
                </ul>
            </div>
            <div className="footer-copyright">© 2021 FoodShop</div>
        </div>
    );
};

export default Footer;
