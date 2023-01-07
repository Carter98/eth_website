// Import Assets
import binary from '../assets/binary.png';
import moroni from '../assets/moroni.jpg';
import yunque from '../assets/yunque.jpg';
import books from '../assets/books.jpg';

const Projects = () => {
    return (
        <section className="projects">
            <h2>My Thoughts</h2>

            <div className="projects__cards">

                <div className="projects__card">
                    <h3>Technology</h3>
                    <img src={binary} alt="binary image" />
                    <p>This will hopefullly link to blogs about my thoughts on technology trends.
                    </p>

                    <a href="https://www.mach37.com/blog" target="_blank" className="button">Site</a>
                </div>

                <div className="projects__card">
                    <h3>Gospel</h3>
                    <img src={moroni} alt="moroni image" />
                    <p>This will hopefullly link to blogs about my thoughts on Gospel topics.
                    </p>

                    <a href="https://www.churchofjesuschrist.org/?lang=eng" target="_blank" className="button">Site</a>
                </div>

                <div className="projects__card">
                    <h3>Travel</h3>
                    <img src={yunque} alt="yunque image" />
                    <p>This will hopefullly link to blogs about our travels.
                    </p>

                    <a href="https://aave.com/" target="_blank" className="button">Site</a>
                </div>
                
                <div className="projects__card">
                    <h3>Books</h3>
                    <img src={books} alt="books image" />
                    <p>This will hopefullly link to my book reviews.
                    </p>

                    <a href="https://aave.com/" target="_blank" className="button">Site</a>
                </div>
            </div>
        </section>
    );
}

export default Projects;