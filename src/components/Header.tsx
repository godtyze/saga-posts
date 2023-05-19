import { FC, useState } from 'react';

import { Button, Image, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import avatar from 'assets/avatar.jpg';
import routes from 'router/routes';

const Header: FC = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="pt-2">
      <Button variant="primary" onClick={handleShow}>
        Меню
      </Button>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Меню</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="d-flex flex-column gap-2">
          <div className="d-flex gap-2 align-items-center">
            <Image src={avatar} roundedCircle width={50} />
            <span>Никита</span>
            <span>nchubis.wrk@gmail.com</span>
          </div>
          <div className="d-flex gap-2 flex-column">
            <Link to={routes.about} onClick={() => handleClose()}>
              Обо мне
            </Link>
            <Link to={routes.main} onClick={() => handleClose()}>
              Список постов
            </Link>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default Header;
