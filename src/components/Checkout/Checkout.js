import React from 'react';

const Checkout = ({total}) => {
    return (
        <section id="do_action">
		<div className="container">
			<div className="row">
				<div className="col-sm-12">
					<div className="total_area">
						<ul>
							<li>Cart Sub Total <span>${total}</span></li>
							<li>Eco Tax <span>$0</span></li>
							<li>Shipping Cost <span>Free</span></li>
							<li>Total <span>${total}</span></li>
						</ul>
							<a className="btn btn-default update" href="#nourl">Update</a>
							<a className="btn btn-default check_out" href="#nourl">Check Out</a>
					</div>
				</div>
			</div>
		</div>
	</section>
    );
};

export default Checkout;