import React from 'react';
import { Carousel } from 'react-bootstrap';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section mb-5">
      <div className="container-fluid px-4">
        <Carousel indicators={true} controls={false} className="rounded-3 overflow-hidden">
          <Carousel.Item>
            <div 
              className="hero-image d-flex align-items-center justify-content-center"
              style={{
                height: '400px',
                backgroundImage: 'url("https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="text-center text-white">
                <h1 className="display-4 fw-bold mb-3">Discover Amazing Recipes</h1>
                <p className="lead">Find the perfect dish for every occasion</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div 
              className="hero-image d-flex align-items-center justify-content-center"
              style={{
                height: '400px',
                backgroundImage: 'url("https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="text-center text-white">
                <h1 className="display-4 fw-bold mb-3">Cook Like a Pro</h1>
                <p className="lead">Master new techniques with our step-by-step guides</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div 
              className="hero-image d-flex align-items-center justify-content-center"
              style={{
                height: '400px',
                backgroundImage: 'url("https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="text-center text-white">
                <h1 className="display-4 fw-bold mb-3">Fresh Ingredients</h1>
                <p className="lead">Create healthy meals with quality ingredients</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </section>
  );
};

export default HeroSection;
