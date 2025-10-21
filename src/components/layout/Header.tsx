import React from 'react';
import { Navbar, Nav, Form, InputGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
	return (
		<header>
			<Navbar bg="light" expand="lg" className="px-4 py-3">
				<Navbar.Brand as={Link} to="/" className="fw-bold text-success fs-3">
					Atera
				</Navbar.Brand>
				
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/about" className="text-dark fw-medium">About</Nav.Link>
						<Nav.Link as={Link} to="/bookmark" className="text-dark fw-medium">Bookmark</Nav.Link>
						<Nav.Link as={Link} to="/recipe" className="text-dark fw-medium">Recipe</Nav.Link>
					</Nav>
					
					<Form className="d-flex me-3">
						<InputGroup>
							<InputGroup.Text className="bg-light border-end-0">
								<i className="bi bi-search"></i>
							</InputGroup.Text>
							<input
								type="search"
								placeholder="Search"
								className="form-control border-start-0"
								style={{ backgroundColor: '#f8f9fa' }}
							/>
						</InputGroup>
					</Form>
					
					<div className="bg-dark rounded-circle d-flex align-items-center justify-content-center" 
							style={{ width: '40px', height: '40px' }}>
						<i className="bi bi-person-fill text-white"></i>
					</div>
				</Navbar.Collapse>
			</Navbar>
		</header>
	);
};

export default Header;
