import { useContext } from "react";
import { ShopContext } from "../Context/ShopContext";
import { useParams } from "react-router-dom";
import Breadcrum from "./Breadcrum";
import ProductDisplay from "./ProductDisplay";
import DescriptionBox from "./DescriptionBox";
import NewCollection from "./NewCollection";

const SingalProduct=()=>{
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product= all_product.find((e)=>e.id ===Number(productId));
    return(
        <div className="max-w-7xl mx-auto mb-32 mt-32">
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
        <DescriptionBox />
        <NewCollection/>
        </div>
    );
}
export default SingalProduct;