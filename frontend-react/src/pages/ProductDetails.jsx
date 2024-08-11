import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import ReviewCard from "../components/ReviewCard";

export default function ProductDetails() {
  return (
    <div className="page-container">
      <NavBar />
      <div className="content-container container mt-4">
        <div className="d-flex justify-content-between">
          <div className="d-flex flex-col">
            <img
              class="w-60 h-60 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
              src="/assets/SubCategory.jpg"
            />
            <h1 className="categoryHeading">SubCategoryName</h1>
          </div>
          <div>
            <div class="container d-flex flex-col text-center justify-content-center align-items-center">
              <div class="time text-6xl mb-4">25:30</div>{" "}
              <div class="price  text-6xl mb-4">$2500</div>{" "}
              <div class="rating d-flex justify-content-center">
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                  checked
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
                <input
                  type="radio"
                  name="rating-2"
                  class="mask mask-star-2 bg-orange-400"
                />
              </div>
              <div className="d-flex flex-col m-2">
                <Link to={"/payment"}>
                  <button
                    class="w-40 m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="button"
                  >
                    Book
                  </button>
                </Link>

                <button
                  class=" 2-40 m-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                >
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <br></br>
        <div className="indent-0 text-wrap text-balance text-pretty">
          <h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam neque
            officia minima doloremque dignissimos, sequi beatae nihil quidem
            voluptas qui atque eveniet ducimus, repudiandae explicabo saepe.
            Voluptatum expedita facilis at. Possimus officiis quos ducimus iure.
            Temporibus vero praesentium est dignissimos laborum labore, animi
            ipsam ipsa tenetur, magni mollitia rem fuga nisi. Minima porro
            officia aliquam blanditiis id saepe vel labore. Ea fugit inventore
            culpa dolores dolorum, voluptate, ipsum dicta beatae quod laboriosam
            cum nemo consequatur porro quisquam fuga esse odio voluptates. Non
            omnis impedit recusandae repellat maxime corrupti sit unde! Quam,
            cupiditate quis, minima dolores consequatur, necessitatibus magnam
            ipsum commodi reiciendis dicta consectetur tempore voluptas facilis
            non deserunt. Inventore obcaecati voluptate dignissimos sunt quos
            consectetur voluptates dolorem velit tempore eligendi. Tempora velit
            dolor natus fugit illum. Est, repellendus. Mollitia repudiandae,
            nemo enim doloribus possimus quam similique unde. Iure vero, rem
            eligendi, quas, saepe voluptatum doloribus laboriosam exercitationem
            libero deleniti maxime?
          </h2>
        </div>
        <br />

        <div id="reviews">
          <ReviewCard />
          <ReviewCard />
          <ReviewCard />
        </div>
      </div>
      <div className="footer-pin">
        <Footer />
      </div>
    </div>
  );
}
