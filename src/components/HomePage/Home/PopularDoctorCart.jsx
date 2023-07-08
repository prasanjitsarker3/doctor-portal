import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
const PopularDoctorCart = ({ doctor }) => {
    const { id, name, specialist, rating, photo } = doctor;
    return (
        <div className="mx-auto">
            <div  data-aos="zoom-in" className="card">
                <figure className="">
                    <img src={photo} alt="Shoes" className="rounded-xl h-[200px]" />
                </figure>
                <div className="card-body items-center ">
                    <h2 className="card-title">{name}</h2>
                    <div className="w-full flex justify-between ">
                        <p className='text-2xl font-serif'>{specialist}</p>
                        <Rating
                            style={{ maxWidth: 120 }}
                            value={rating}
                            readOnly 
                        />
                    </div>
                    <Link to="/consultation" className="card-actions w-full">
                        <button className="btn  bg-[#19D3AE] hover:bg-[#34bea3] text-white w-full">Consultation</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PopularDoctorCart;