import './Profile.css';

const Profile = (props) => {
    // console.log(props);
    const {name, age, position, image, institution, salary} = props.data;

    return (
        <div className="profile-container">
            <div className="profile-img">
                <img src={image} alt={name} />
            </div>
            <div className="profile-content">
                <h3>Name : {name}</h3>
                <h4>Age : {age}</h4>
                <h5>Position : {position}</h5>
                <h5>Affiliation :{institution}</h5>
                <h5>Salary :{salary}</h5>
            <button
              onClick={() => props.handleAddToCart(props.data)} className="btn">
                <i class="fas fa-cart-arrow-down">Add to cart</i>
            </button>
            <div className="icon">
                <i className="icon fab fa-facebook"></i>
                <i className="icon fab fa-twitter"></i>
            </div>
        </div>
    </div>
    )
};

export default Profile;