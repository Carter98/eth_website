// Import Assets
import carter from '../assets/carter.jpg';

const Header = () => {
    return (
        <section className='header'>
            <img src={carter} alt="Carter Hartmann" />

            <div className='header__content'>
                <h1>Carter's website</h1>
            </div>
        </section>
    );
}

export default Header;