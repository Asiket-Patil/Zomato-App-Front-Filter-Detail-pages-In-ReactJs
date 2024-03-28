import React from 'react';
import '../styles/Filter.css'

function Filter() {
  return (
    <div>
      <section className="main">
        <header className="main-head">
          <p className="logo">e!</p>
          <section>
            <button className="btn">Login</button>
            <button className="btn create">Create an account</button>
          </section>
        </header>
      </section>
      <section className="sec">
        <section className="high">
          <p>Breakfast places in Mumbai</p>
        </section>
        <section className="do">
          <section className="filter">
            <p className="fil">Filters</p>
            <div>
              <label htmlFor="" className="sell">Select Location</label>
              <select className="sel" name="" id="">
                <option value="">select location</option>
                <option value="">select location</option>
                <option value="">select location</option>
                <option value="">select location</option>
              </select>
              <div>
                <div className="di">
                  <label className="blue cui">Cuisine</label>
                  <div className="har">
                    <input type="checkbox" />
                    <label htmlFor="">North Indian</label>
                  </div>
                  <div className="har">
                    <input type="checkbox" />
                    <label htmlFor="">chinese</label>
                  </div>
                  <div className="har">
                    <input type="checkbox" />
                    <label htmlFor="">Fast food</label>
                  </div>
                  <div className="har">
                    <input type="checkbox" />
                    <label htmlFor="">Street Food</label>
                  </div>
                </div>
                <div className="di">
                  <label className="blue cost">Cost For Two</label>
                  <div className="pr">
                    <input type="radio" name="cost" />
                    <label htmlFor="">Less Than 500</label>
                  </div>
                  <div className="pr">
                    <input type="radio" name="cost" />
                    <label htmlFor="">500 To 1000</label>
                  </div>
                  <div className="pr">
                    <input type="radio" name="cost" />
                    <label htmlFor="">1000 TO 1500</label>
                  </div>
                  <div className="pr">
                    <input type="radio" name="cost" />
                    <label htmlFor="">1500 To 2000</label>
                  </div>
                  <div className="pr">
                    <input type="radio" name="cost" />
                    <label htmlFor="">2000+</label>
                  </div>
                </div>
                <div className="di">
                  <label className="blue sort">Sort</label>
                  <div className="so">
                    <input type="radio" name="cost" />
                    <label htmlFor="">Price Low To High</label>
                  </div>
                  <div className="so">
                    <input type="radio" name="cost" />
                    <label htmlFor="">Price High To Low</label>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="resu">
            <section className="resul-1">
              <section className="dub">
                <section className="over">
                  <img src={require("../Assets/shutterstock_1154073754.png")} alt="" className="img" />
                </section>
                <section>
                  <p className="big">The Big Chill Cakerey</p>
                  <p className="fort">FORT</p>
                  <p className="Shop">shop 1, plot D , Samruddhi Complex , Chincholi...</p>
                </section>
              </section>
              <hr />
              <section className="duo">
                <section>
                  <p>CUISINES</p>
                  <p>COST FOR TWO:</p>
                </section>
                <section className="dark">
                  <p>Bakery</p>
                  <p>₹700</p>
                </section>
              </section>
            </section>
            <section className="resul-1">
              <section className="dub">
                <section className="over">
                  <img src={require("../Assets/shutterstock_1154073754.png")} alt="" className="img" />
                </section>
                <section>
                  <p className="big">The Bake Shop</p>
                  <p className="fort">FORT</p>
                  <p className="Shop">shop 1, plot D , Samruddhi Complex , Chincholi...</p>
                </section>
              </section>
              <hr />
              <section className="duo">
                <section>
                  <p>CUISINES</p>
                  <p>COST FOR TWO:</p>
                </section>
                <section className="dark">
                  <p>Bakery</p>
                  <p>₹700</p>
                </section>
              </section>
            </section>
            <section>
              <ul className="page">
                <li>
                  <span className="fa fa-angle-left"></span>
                </li>
                <li className="cal active">1</li>
                <li className="cal">2</li>
                <li className="cal">3</li>
                <li className="cal">4</li>
                <li className="cal">5</li>
                <li>
                  <span className="fa fa-angle-right"></span>
                </li>
              </ul>
            </section>
          </section>
        </section>
      </section>
    </div>
  );
}

export default Filter;
