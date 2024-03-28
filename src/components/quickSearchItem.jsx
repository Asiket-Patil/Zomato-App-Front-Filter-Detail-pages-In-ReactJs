import React from 'react';

const QuickSearchItem = ({ imagePath, title, description }) => {
  return (
    <section className="shadow-sm d-flex align-items-center gap-3 p-0 mb-4 col-sm-12 col-md-8 col-lg-3">
      <section className="zoom">
    
        <img src={imagePath} alt="" className="image" />
      </section>
      <section className="p-2">
        <p className="fs-5 fw-bold mb-0">{title}</p>
        <p className="text-muted">{description}</p>
      </section>
    </section>
  );
};

export default QuickSearchItem;
