import getProductsForCategory from "../productList";
import "../Style/Random.css"
import Carousel from 'react-bootstrap/Carousel';
import Ratio from 'react-bootstrap/Ratio'


const Random = ({customDate}) => {

    let pick1 = Math.floor(Math.random() * 3) +1;
    let pick2 = Math.floor(Math.random() * 3) +1;
    let pick3 = Math.floor(Math.random() * 3) +1;
    let length1 = getProductsForCategory(pick1).length;
    let length2 = getProductsForCategory(pick2).length;
    let length3 = getProductsForCategory(pick3).length;
    let randomProduct1 = getProductsForCategory(pick1)[Math.round(Math.random() * length1)];
    let randomProduct2 = getProductsForCategory(pick2)[Math.round(Math.random() * length2)];
    let randomProduct3 = getProductsForCategory(pick3)[Math.round(Math.random() * length3)];



    return(
        <div className="random-container">
            <Carousel fade className=" w-50">
                <Carousel.Item>
                    <Ratio aspectRatio="4x3">
                        <img
                        className=" w-100"
                        src={randomProduct1.image}
                        alt="First slide"
                        />
                    </Ratio>
                    <Carousel.Caption>
                    <h4 className="text-danger bg-white rounded-pill border border-danger border-3 p-1 fs-6 bg-opacity-75">For the {customDate}, {randomProduct1.name}: from {randomProduct1.price} to ${randomProduct1.price.substring(1)/2} !</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                
                <Carousel.Item>
                    <Ratio aspectRatio="4x3">
                        <img
                        className=" w-100"
                        src={randomProduct2.image}
                        alt="Second slide"
                    />
                    </Ratio>

                    <Carousel.Caption>
                    <h4 className="text-danger bg-white rounded-pill border border-danger border-3 p-1 fs-6 bg-opacity-75">For the {customDate}, {randomProduct2.name}: from {randomProduct2.price} to ${randomProduct2.price.substring(1)/2} !</h4>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Ratio aspectRatio="4x3">
                        <img
                        className=" w-100"
                        src={randomProduct3.image}
                        alt="Third slide"
                        />
                    </Ratio>

                    <Carousel.Caption>
                    <h4 className="text-danger bg-white rounded-pill border border-danger border-3 p-1 fs-6 bg-opacity-75">For the {customDate}, {randomProduct3.name}: from {randomProduct3.price} to ${randomProduct3.price.substring(1)/2} !</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}


export default Random;