import React from 'react'
import tech_fun_horizontal_white from '../assets/tech_fun_horizontal_white.png';
import {Link} from 'react-router-dom';

function Products() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark py-0 barColor">
          <a className="navbar-brand" href="#">
            <img className="ml-4" src={tech_fun_horizontal_white} width={167} height={59} alt="Tech & Fun Logo" loading="lazy" />
          </a>
          <div className="collapse navbar-collapse justify-content-end navbar-margin" id="navBar">
            <div className="navbar-nav">
              <Link to='/sales' className="nav-link mx-1" >Ventas</Link>
              <Link to='/Users' className="nav-link mx-1" >Usuarios</Link>
              <Link to='/Products' className="nav-link mx-1 active" href="#" id="navLinkUsers">Productos<span className="sr-only">(current)</span></Link>
            </div>
          </div>
        </nav>
        <h1 className="title mt-5 mb-3">Productos</h1>
            {/* Search Bar  */}
            <div className="d-flex flex-row justify-content-between ">
              <div className="d-flex flex-row hiddenControl">
                <div className="input-group filter mr-2">
                  <input type="text" className="form-control" aria-label="Text input with dropdown button" />
                </div>
                {/* Button Search */}
                <button type="button" className="btn btn-outline-secondary btn-search"><i className="fa fa-search" aria-hidden="true" /></button>
              </div>
              {/* New User Button */}
              <div className="col">
                <button type="button" className="btn btn-size float-right btnColor" data-toggle="modal" data-target="#newUserModal" id="addUserBtnModal">Agregar
                  Productos</button>
              </div>
              {/* END New User Button */}
            </div>
         <table className="table table-borderless table-bordered table-responsive-lg table-hover">
        <thead>
          <tr className="table-bordered">
            <th className="align-middle" scope="col">ID Venta</th>
            <th className="align-middle" scope="col">Producto</th>
            <th className="align-middle" scope="col">Cantidad</th>
            <th className="align-middle" scope="col">Precio Unitario</th>
            <th className="align-middle" scope="col">Valor total</th>
            <th className="align-middle" scope="col">fecha de venta </th>
            <th className="align-middle" scope="col">ID Cliente</th>
            <th className="align-middle" scope="col">Cliente </th>
            <th className="align-middle" scope="col">Vendedor </th>
            <th className="align-middle" scope="col">Estado </th>
            <th className="align-middle text-center" scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody className="contactsBodyTable" id="contactsBodyTable">
          <tr className="contact-row">
            <td className="align-middle text-center">001</td>
            <td className="align-middle text-center">Producto 001</td>
            <td className="align-middle text-center"> 2</td>
            <td className="align-middle text-center">$ 50.000</td>
            <td className="align-middle text-center">$ 100.000</td>
            <td className="align-middle text-center">01/02/2021</td>
            <td className="align-middle text-center">1098665961</td>
            <td className="align-middle text-center">Fulanito de Tal</td>
            <td className="align-middle text-center">Marisol Vanegas</td>
            <td className="align-middle text-center">En proceso</td>
            <td className="align-middle text-center">
              <button type="button" className="btn btn-lg text-black-50 deleteContact" data-id="${contactID}" data-toggle="modal" data-target="#deleteContactModal"><i className="fa fa-trash" aria-hidden="true" /></button>
              <button type="button" className="btn btn-lg text-black-50 editContact" data-id="${contactID}" data-toggle="modal" data-target="#editContactModal"><i className="fas fa-edit" aria-hidden="true" /></button>
            </td>
          </tr>
          <tr className="contact-row">
            <td className="align-middle text-center">002</td>
            <td className="align-middle text-center">Producto 002</td>
            <td className="align-middle text-center"> 5</td>
            <td className="align-middle text-center">$ 40.000</td>
            <td className="align-middle text-center">$ 200.000</td>
            <td className="align-middle text-center">01/09/2021</td>
            <td className="align-middle text-center">1098665581</td>
            <td className="align-middle text-center">Pepito Perez</td>
            <td className="align-middle text-center">Diego Parra</td>
            <td className="align-middle text-center">Cancelada</td>
            <td className="align-middle text-center">
              <button type="button" className="btn btn-lg text-black-50 deleteContact" data-id="${contactID}" data-toggle="modal" data-target="#deleteContactModal"><i className="fa fa-trash" aria-hidden="true" /></button>
              <button type="button" className="btn btn-lg text-black-50 editContact" data-id="${contactID}" data-toggle="modal" data-target="#editContactModal"><i className="fas fa-edit" aria-hidden="true" /></button>
            </td>
          </tr>
        </tbody>
      </table> 
        </div>
    )
}

export default Products
