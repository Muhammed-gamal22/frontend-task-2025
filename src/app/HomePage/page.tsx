import Footer from "../components/Footer";
import Header from "../components/Header";
import ProductDetails from "../components/ProductDetails";
import RatingAndReviews from "../components/RatingAndReviews";
import SimilarItems from "../components/SimilarItems";

const HomePage = ()=>{
    return(
        <div className="rounded-2xl bg-white">
            <Header/>
            <ProductDetails/>
            <RatingAndReviews/>
            <SimilarItems/>
            <Footer/>
        </div>
    )
}
export default HomePage;