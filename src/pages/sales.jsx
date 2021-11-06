import { Link } from 'react-router-dom';
import tech_fun_horizontal_white from '../assets/tech_fun_horizontal_white.png';
import Modal from "react-bootstrap/Modal";
/* import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle"; */
import {Button} from 'react-bootstrap';
import React, {useEffect,useState} from 'react';


const Sales = () => {
  const [mostrarTabla, setmostrarTabla] = useState(true);
  const [nombreBoton, setnombreBoton] = useState ("Crear Nuevo Producto");
  const [productos, setproductos] = useState([]);
  
  useEffect (() => {
    if (mostrarTabla) {
       setnombreBoton("Crear Nuevo Producto");
   } else {
       setnombreBoton("Mostrar Todos los productos");
   }
   },[mostrarTabla]); 

 
      

  const TablaProdructos = ( { listaProductos } ) => {
    useEffect(() => {
        console.log("Este es el listado de productos", listaProductos);
    }, [listaProductos]);

    return (
        <div>
            <div>
        <nav className="navbar navbar-expand-lg navbar-dark py-0 barColor">
          <a className="navbar-brand" href="#">
            <img className="ml-4" src={tech_fun_horizontal_white} width={167} height={59} alt="Tech & Fun Logo" loading="lazy" />
          </a>
          <div className="collapse navbar-collapse justify-content-end navbar-margin" id="navBar">
            <div className="navbar-nav">
              <Link to='/sales' className="nav-link mx-1 active" href="#">Ventas<span className="sr-only">(current)</span></Link>
              <Link to='/Products' className="nav-link mx-1" href="./views/companies.html">Productos</Link>
              <Link to='/Users' className="nav-link mx-1" >Usuarios</Link>
            </div>
          </div>
        </nav>
        <main className="main mx-4">
          <section>
            <h1 className="title mt-5 mb-3">Ventas</h1>
            {/* Search Bar and filter*/}
            <div className="d-flex flex-row justify-content-between">
              <div className="d-flex flex-row">
                <div className="input-group filter mr-2">
                  <input type="text" className="form-control filter-input" aria-label="Text input" id="searchBar" />
                </div>
                {/* Button Search */}
                <button type="button" className="btn btn-outline-secondary btn-search" id="btnSearch"><i className="fa fa-search" aria-hidden="true" /></button>
              </div>
              {/* New Contact Button */}
              <div className="d-flex flex-row justify-content-end">
                <button onClick={() => {setmostrarTabla(!mostrarTabla)}} > {nombreBoton} type="button" className="btn btn-size float-right btnColor" data-toggle="modal" data-target="#newContactModal" id="addContactBtn">Agregar Venta</button>
                {/* {mostrarTabla ? (
                <TablaProdructos listaProductos={productos} />
                ) : (
                <FormularioCreaciónProductos 
                mostarTablaAlGuardar ={setmostrarTabla}
                listaProductos={productos}
                registrarNuevo = {setproductos}
                /> */}
            )
            
              </div>
              {/* END New Contact Button */}
            </div>
            {/* END Search Bar and Filter */}
            <div className="selected-contacts d-flex justify-content-between align-items-center mt-4 mb-1">
              <button type="button" className="btn btn-xsm btn-tag disable contacts-selected d-none" id="numberSelectedContacts"> </button>
              <button type="button" className="btn btn-outline-primary btn-size border-0 delete-contacts d-none" data-toggle="modal" data-target="#deleteManyContactsModal" id="deleteSelectedContactsBtnModal"><i className="fa fa-trash" aria-hidden="true" />
                Eliminar Venta</button>
            </div>
            {/* Contacts Grid */}
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
            {/* END Contacts Grid */}
          </section>
        </main>
        {/* Delete ONE Contact Modal */}
        <div className="modal fade" id="deleteContactModal" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered modal-sm">
            <div className="modal-content">
              <div className="modal-body text-center mt-1">
                <img src="./assets/delete_company.png" alt="Delete logo" />
                <input type="hidden" id="deleteContactID" name="deleteCompanyID" />
                <p className="pt-4">¿Seguro que deseas eliminar la venta?</p>
              </div>
              <div className="modal-footer border-top-0 justify-content-around">
                <button type="button" className="btn btn-success btn-lg border-0 btnColor" data-dismiss="modal">Cancelar</button>
                <button type="button" className="btn btn-success btn-lg btn-danger delete" data-dismiss="modal" id="deleteContactModalBtn">Eliminar</button>
              </div>
            </div>
          </div>
        </div>
        {/* END ONE Delete Contacts Modal */}
        
        {/* Modify Contacts Modal */}
        <div className="modal fade" id="editContactModal" tabIndex={-1}>
          <div className="modal-dialog modal-dialog-centered modal-xl">
            <div className="modal-content">
              <div className="modal-header barColor new-contact-modal-header">
                <h1 className="title m-0 text-white">Actualizar Venta</h1>
                <button type="button" className="close text-white" data-dismiss="modal">×</button>
              </div>
              <div className="modal-body">
                <div id="editContactForm">
                  <div className="form-group form-row border py-4 px-2 borders-new-user-modal bg-white">
                    <div className="col">
                      <label htmlFor="editContactName" className="col-form-label col-form-label-sm">ID Cliente<span className="text-danger">*</span></label>
                      <input type="hidden" id="editContactID" />
                      <input type="text" className="form-control form-control-sm" id="editContactName" name="editContactName" />
                    </div>
                    <div className="col">
                      <label htmlFor="editContactLastName" className="col-form-label col-form-label-sm">Nombre del Cliente<span className="text-danger">*</span></label>
                      <input type="text" className="form-control form-control-sm" id="editContactLastName" name="editContactLastName" />
                    </div>
                    <div className="col">
                      <label htmlFor="editContactPosition" className="col-form-label col-form-label-sm">Fecha de la Venta<span className="text-danger">*</span></label>
                      <input type="text" className="form-control form-control-sm" id="editContactPosition" name="editContactPosition" />
                    </div>
                  </div>
                  <div className="form-group form-row contact-channel-info">
                    <div className="col">
                      <label htmlFor="editContact_regionSelectID" className="col-form-label col-form-label-sm">Vendedor<span className="text-danger">*</span></label>
                      <select className="form-control form-control-sm" name="editContact_regionSelectID" id="editContact_regionSelectID">
                        <option selected disabled value={0}>Seleccionar Vendedor</option>
                        <option value="Marisol Vanegas">Marisol Vanegas</option>
                        <option value="Diego Parra">Diego Parra</option>
                      </select>
                    </div>
                    <div className="col">
                      <label htmlFor="editContact_countrySelectID" className="col-form-label col-form-label-sm">Estado de la Venta<span className="text-danger">*</span></label>
                      <select className="form-control form-control-sm" name="editContact_countrySelectID" id="editContact_countrySelectID">
                        <option selected disabled value={0}>Seleccionar Estado</option>
                        <option value="En Proceso">En Proceso</option>
                        <option value="Entregada">Entregada</option>
                        <option value="Cancelada">Cancelada</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group form-row ">
                    <div className="col">
                      <label htmlFor="editContactChannel" className="col-form-label col-form-label-sm">Productos</label>
                      <select className="form-control form-control-sm" name="editContactChannel" id="editContactChannel">
                        <option selected disabled value="Seleccionar canal">Seleccionar Producto</option>
                        <option value="Producto 001">Producto 001</option>
                        <option value="Producto 002">Producto 002</option>
                        <option value="Producto 003">Producto 003</option>
                        <option value="Producto 004">Producto 004</option>
                      </select>
                    </div>
                    <div className="col">
                      <label htmlFor="editProductPrice" className="col-form-label col-form-label-sm">Precio Unitario</label>
                      <input type="text" className="form-control form-control-sm" disabled id="editProductPrice" name="editProductPrice" />
                    </div>
                    <div className="col">
                      <label htmlFor="editProductCant" className="col-form-label col-form-label-sm">Cantidad</label>
                      <input type="text" className="form-control form-control-sm" id="editProductCant" name="editProductCant" />
                    </div>
                    <div className="col">
                      <label htmlFor="editProductSubTotal" className="col-form-label col-form-label-sm">Sub Total<span className="text-danger">*</span></label>
                      <input type="text" className="form-control form-control-sm" disabled id="editProductSubTotal" name="editProductSubTotal" />
                    </div>
                    <div className="col">
                      <button type="button" className="btn btn-secondary text-black btn-sm ml-3 buttonTreeAdd newChanelBtn" id="editContactNewChannelBtn"> <i className="fas fa-plus" /> Agregar Producto</button>    
                    </div>
                  </div>
                  <div className="form-group form-row mt-4 mb-0">
                    <label className="col-form-label col-form-label-sm"><span className="text-danger">Valor Total de la Venta: $ </span></label>
                  </div>
                  <div className="form-group form-row mt-4 mb-0">
                    <label className="col-form-label col-form-label-sm"><span className="text-danger">*</span>Información requerida</label>
                  </div>
                </div>
              </div>
              <div className="modal-footer border-top-0">
                <button type="button" className="btn btn-success  btn-lg border-0 btnColor border-0" data-dismiss="modal">Cancelar</button>
                <button type="button" className="btn btn-success btn-lg border-0 btnColor update-button" id="editContactModalBtn">Actualizar Venta</button>
              </div>
            </div>
          </div>
        </div>
        {/* END Modify Contacts Modal */}
        <div className="error-msg" />
        {/* Scripts */}
        {/* jQuery, Popper and Bootstrap JS */}
        {/* END jQuery, Popper and Bootstrap JS */}
        {/* END Scripts */}
      </div>               
        </div>
    )

  }

  return (
    
    <div className="modal-dialog modal-dialog-centered modal-xl">
      <div className="modal-content">
        <div className="modal-header barColor new-contact-modal-header">
          <h1 className="title m-0 text-white">Nueva Venta</h1>
          <button type="button" className="close text-white" data-dismiss="modal">×</button>
        </div>
        <div className="modal-body">
          <div id="new-contact-form">
            <div className="form-group form-row border py-4 px-2 borders-new-user-modal bg-white">
              <div className="col">
                <label htmlFor="newContactName" className="col-form-label col-form-label-sm">ID Cliente<span className="text-danger">*</span></label>
                <input type="text" className="form-control form-control-sm" id="newContactName" name="newContactName" />
              </div>
              <div className="col">
                <label htmlFor="newContactLastname" className="col-form-label col-form-label-sm">Nombre del Cliente<span className="text-danger">*</span></label>
                <input type="text" className="form-control form-control-sm" id="newContactLastname" name="newContactLastname" />
              </div>
              <div className="col">
                <label htmlFor="position" className="col-form-label col-form-label-sm">Fecha de la Venta<span className="text-danger">*</span></label>
                <input type="text" className="form-control form-control-sm" id="newContactPosition" name="position" />
              </div>
            </div>
            <div className="form-group form-row contact-channel-info">
              <div className="col">
                <label htmlFor="region" className="col-form-label col-form-label-sm">Vendedor<span className="text-danger">*</span></label>
                <select className="form-control form-control-sm" name="region" id="newContact_regionSelectID">
                  <option selected disabled value={0}>Seleccionar Vendedor</option>
                  <option value="Marisol Vanegas">Marisol Vanegas</option>
                  <option value="Diego Parra">Diego Parra</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="newContactEmail" className="col-form-label col-form-label-sm">Estado de la Venta<span className="text-danger">*</span></label>
                <select className="form-control form-control-sm" name="newContactChannel" id="newContactChannel">
                  <option selected disabled value="Seleccionar canal">Seleccionar Estado</option>
                  <option value="En Proceso">En Proceso</option>
                  <option value="Entregada">Entregada</option>
                  <option value="Cancelada">Cancelada</option>
                </select>
              </div>
            </div>
            <div className="form-group form-row ">
              <div className="col">
                <label htmlFor="newContactChannel" className="col-form-label col-form-label-sm">Producto</label>
                <select className="form-control form-control-sm" name="newContactChannel" id="newContactChannel">
                  <option selected disabled value="Seleccionar canal">Seleccionar Producto</option>
                  <option value="Producto 001">Producto 001</option>
                  <option value="Producto 002">Producto 002</option>
                  <option value="Producto 003">Producto 003</option>
                  <option value="Producto 004">Producto 004</option>
                </select>
              </div>
              <div className="col">
                <label htmlFor="newProductPrice" className="col-form-label col-form-label-sm">Precio Unitario<span className="text-danger">*</span></label>
                <input type="text" className="form-control form-control-sm" disabled id="newProductPrice" name="newProductPrice" />
              </div>
              <div className="col">
                <label htmlFor="newProductCant" className="col-form-label col-form-label-sm">Cantidad<span className="text-danger">*</span></label>
                <input type="text" className="form-control form-control-sm" id="newProductCant" name="newProductCant" />
              </div>
              <div className="col">
                <label htmlFor="newProductSubTotal" className="col-form-label col-form-label-sm">Sub Total<span className="text-danger">*</span></label>
                <input type="text" className="form-control form-control-sm" disabled id="newProductSubTotal" name="newProductSubTotal" />
              </div>
              <div className="col">
                <button type="button" className="btn btn-secondary text-black btn-sm ml-3 buttonTreeAdd newChanelBtn" id="newContactChannelBtn"> <i className="fas fa-plus" /> Agregar Producto</button>    
              </div>
            </div>
            <div className="form-group form-row mt-4 mb-0">
              <label className="col-form-label col-form-label-sm"><span className="text-danger">Valor Total de la Venta: $ </span></label>
            </div>
            <div className="form-group form-row mt-4 mb-0">
              <label className="col-form-label col-form-label-sm"><span className="text-danger">*</span>Información requerida</label>
            </div>
          </div>
        </div>
        <div className="modal-footer border-top-0">
          <button type="button" className="btn btn-success btn-lg border-0 btnColor" data-dismiss="modal">Cancelar</button>
          <button type="button" className="btn btn-success btn-lg btnColor create" id="saveContactModalBtn">Guardar Venta</button>
        </div>
      </div>
    </div>
  )
}
export default Sales