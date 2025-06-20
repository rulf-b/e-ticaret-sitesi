// src/components/Footer.tsx
import React from 'react';

const Footer: React.FC = () => {
return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
                <h3 className="text-xl font-bold mb-4">Eliziahsap</h3>
                <p className="text-gray-400 mb-4">
                Doğal ahşap ürünlerin eşsiz güzelliğini yaşam alanlarınıza
                taşıyoruz.
                </p>
                <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <i className="fab fa-instagram"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <i className="fab fa-twitter"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <i className="fab fa-pinterest"></i>
                </a>
                </div>
            </div>

            <div>
                <h3 className="text-xl font-bold mb-4">Hızlı Linkler</h3>
                <ul className="space-y-2">
                    <li><a href="/" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Ana Sayfa</a></li>
                    <li><a href="/products" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Ürünler</a></li>
                    <li><a href="/about" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Hakkımızda</a></li>
                    <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors cursor-pointer">İletişim</a></li>
                    <li><a href="/faq" className="text-gray-400 hover:text-white transition-colors cursor-pointer">SSS</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-bold mb-4">Yardım</h3>
                <ul className="space-y-2">
                    <li><a href="/shipping" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Kargo Bilgileri</a></li>
                    <li><a href="/returns" className="text-gray-400 hover:text-white transition-colors cursor-pointer">İade Koşulları</a></li>
                    <li><a href="/privacy" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Gizlilik Politikası</a></li>
                    <li><a href="/terms" className="text-gray-400 hover:text-white transition-colors cursor-pointer">Kullanım Koşulları</a></li>
                </ul>
            </div>

            <div>
                <h3 className="text-xl font-bold mb-4">İletişim</h3>
                <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                    <i className="fas fa-map-marker-alt mt-1 mr-3"></i>
                    <span>İstanbul, Türkiye</span>
                </li>
                <li className="flex items-center">
                    <i className="fas fa-phone-alt mr-3"></i>
                    <span>+90 555 123 4567</span>
                </li>
                <li className="flex items-center">
                    <i className="fas fa-envelope mr-3"></i>
                    <span>info@eliziahsap.com</span>
                </li>
                </ul>
            </div>
            </div>

            <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Eliziahsap. Tüm hakları
                saklıdır.
            </p>

            <div className="flex space-x-4">
                <i className="fab fa-cc-visa text-2xl text-gray-400"></i>
                <i className="fab fa-cc-mastercard text-2xl text-gray-400"></i>
                <i className="fab fa-cc-amex text-2xl text-gray-400"></i>
                <i className="fab fa-cc-paypal text-2xl text-gray-400"></i>
            </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;