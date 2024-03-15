import React from "react";
import { useSelector } from "react-redux";
import { sliderimgUrl } from "../util/constant";

const Cart = () => {
  const products = useSelector((state) => state.cart.cartitems);

  return (
    <section className="h-100 gradient-custom">
      <div className="container py-5">
        <div className="row d-flex justify-content-center my-4">
          <div className="col-md-8">
            <div className="card mb-4">
              <div className="card-header py-3">
                <h5 className="mb-0">Cart ({products.length})</h5>
              </div>
              <div className="card-body">
                {products.map((item) => (
                    
                 <>
                 {console.log(item)}
                  <div className="row mb-4">
                    <div className="col-md-4">
                      <img
                        src={sliderimgUrl + item.imageId}
                        className="img-fluid rounded"
                        alt={item.name}
                      />
                    </div>
                    <div className="col-md-8">
                      <h5 className="mb-0">{item.name}</h5>
                      <p className="mb-1">Total Price: Rs{(item.price / 100) * item.cartTotalQty}</p>
                      <div className="d-flex mb-2">
                        <input
                          type="number"
                          min="1"
                          className="form-control me-2"
                          value={item.cartTotalQty}
                          onChange={(e) => {e.item.cartTotalQty}}
                        />
                        <button className="btn btn-primary">Update</button>
                        <button className="btn btn-danger ms-2">Remove</button>
                      </div>
                    </div>
                  </div>
                 </>
                ))}
              </div>
            </div>
            {/* Summary Section */}
            {/* Checkout Button */}
          </div>
          {/* Summary Card */}
        </div>
      </div>
    </section>
  );
};

export default Cart;
