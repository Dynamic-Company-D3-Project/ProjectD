function SubCategoryCard() {
  return (
    <div className="card card-compact w-64 bg-base-100 shadow-xl ml-2 mr-2 mt-2 mb-2">
      <figure>
        <img
          src="https://res.cloudinary.com/urbanclap/image/upload/t_high_res_template/w_233,dpr_1,fl_progressive:steep,q_auto:low,f_auto,c_limit/images/growth/home-screen/1659096798036-9b40ee.png"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">SubCategory1</h2>

        <div>
          <p>SubCategory Description</p>
        </div>
        <div style={{ display: "inline-flex", alignItems: "space-between" }}>
          <p>Rating ⭐⭐⭐☆☆</p>
          <p>Price $100</p>
        </div>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default SubCategoryCard;
