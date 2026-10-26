function FoodCart ({food}){

    return(
        <div className="food-cart">
                 <img src={food.image} alt={food.name} />
                   <div className="food-content">
                    <h3>{food.name}</h3>
                    <p>{food.description}</p>

                    <div className="food-bottom">
                        <strong>₦{food.price.toLocaleString()}</strong>
                        <button> Add to cart </button>
                    </div>
                   </div>
        </div>
      
    )
    

}

export default FoodCart