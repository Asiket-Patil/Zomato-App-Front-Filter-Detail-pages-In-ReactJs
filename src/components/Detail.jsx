import React from 'react';
import "../styles/Detail.css"




const App = () => {
    return (
        <div>
            <section>
                <header className="main-head">
                    <p className="logo bg-green">e!</p>
                    <section>
                        <button className="btn">Login</button>
                        <button className="btn create">Create an account</button>
                    </section>
                </header>
                <section className="middle">
                    <section>
                        <img className="img" src={require("../Assets/shutterstock_1154073700.png")} alt="" />
                        <button className="Gallery">Click to see Image In Gallery</button>
                    </section>
                    <section className="three">
                        <h3 className="text">The Big Chill Cakery</h3>
                        <section className="one">
                            <section className="two">
                                <button>Overview</button>
                                <button>Contact</button>
                            </section>
                            <button className="place">Place The Order</button>
                        </section>
                        <hr className="hr" />
                        <section>
                            <p className="fs-5 fw-bold my-5">About This page</p>
                            <p className="cusine">Cuisine</p>
                            <p className="bakery">Bakery Fast Food</p>
                            <p className="avg">Average Cost</p>
                            <p className="cost">₹700 for two people (approx.)</p>
                        </section>
                    </section>
                </section>
            </section>
        </div>
    );
};

export default App;
