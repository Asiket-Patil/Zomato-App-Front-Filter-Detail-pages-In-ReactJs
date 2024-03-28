import React from 'react';
import Header from '../components/Header';
import Search from '../components/Search';
import QuickSearchItem from '../components/quickSearchItem';


const MainSection = () => {
  return (
    <main className="container-fluid">
      <section className="row bg-warning mb-2 main">
        <Header />
        <div className="d-flex flex-column align-items-center">
          <Search />
        </div>
      </section>

      <section className="row">
        <section className="col-10 m-auto">
          <p className="my-3 fw-bold fs-2 mb-2">Quick Searches</p>
          <p className="fs-5 text-secondary mb-4">Discover restaurants by type of meal</p>
          <section className="row justify-content-evenly mb-2">
            
            <QuickSearchItem
              imagePath={require('../Assets/shutterstock_1154073754.png')}
              title="Breakfast"
              description="Start your day with exclusive breakfast options"
            />
            <QuickSearchItem
              imagePath={require('../Assets/shutterstock_1130181932.png')}
              title="Lunch"
              description="Start your day with exclusive lunch options"
            />
            <QuickSearchItem
              imagePath={require('../Assets/shutterstock_351721442@2x.png')}
              title="snacks"
              description="Start your day with exclusive lunch options"
            />
            
            
          </section>
          <section className="row justify-content-evenly mb-2">
            <QuickSearchItem
              imagePath={require('../Assets/shutterstock_476864884 (1).png')}
              title="Dinner"
              description="Start your day with exclusive breakfast options"
            />
            <QuickSearchItem
              imagePath={require('../Assets/shutterstock_305270834.png')}
              title="Drink"
              description="Start your day with exclusive lunch options"
            />
            <QuickSearchItem
              imagePath={require('../Assets/shutterstock_1304064250.png')}
              title="Nightlife"
              description="Start your day with exclusive lunch options"
            />
            
          </section>
          

          

        </section>
      </section>
    </main>
  );
};

export default MainSection;
