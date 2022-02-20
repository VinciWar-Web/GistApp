import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import { getAllGistPublic, spinnerLoading } from '../../Redux/Actions/gistPublicActios';

import { GridCells } from './GridCells';
import { Footer } from './Footer';
import { Div } from '../Components-Style/Div';

export const Pagination = () => {
  // Helpers
  const dispatch = useDispatch();

  // Registro
  const { GistAllPublic } = useSelector((state) => state.gistPublic);

  const [users, setUsers] = useState([]); // Cantidad de archivos para traer a todoas las paginaciones
  const [pageNumber, setPageNumber] = useState(0); // Numero de la pagina donde iniciara

  const [pageSize, setageSize] = useState(5) // Cantidad de Item en cada pagina

  const usersPerPage = pageSize; // cantidad de archivos para mostrar por paginas
  const pagesVisited = pageNumber * usersPerPage; // cantidad de archivos visitados
  
  const displayUsers = users.slice(pagesVisited, pagesVisited + usersPerPage) // controla los archivos a mostrar
  .map((Gist, index) => {
    return <GridCells key={index} {...Gist} />
  });

  /*controla la cantidad de paginadores a mostrar ya que hay 10 archivos en pantalla
    dividiaria todos los usuarios entre la cantidad de archivo mostrados en pantalla y lo redondeamos con Map.ceil*/
  const pageCount = Math.ceil(users.length / usersPerPage); 
  
  // Actualiza el hooks pageNumber con la propiedad selected que nos regresa el numero de paginador
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  
  // dispara la carga inicial
  useEffect(() => {
    dispatch(getAllGistPublic());
  }, [dispatch]);

  // dispara la carga de los gist
  useEffect(() => {
    setUsers(GistAllPublic.slice(0, 500))
  }, [dispatch, GistAllPublic]);
    
  return (
    <Div $container_paginate_primary>

      <Div $gist_box>
        {displayUsers}
      </Div>

      <Div $box_paginate_primary>

        <Div $footer_box_primary>
          < Footer setageSize={ setageSize }/>
        </Div>

        <Div $box_paginate>
          <ReactPaginate
            previousLabel={"<<"}
            nextLabel={">>"}
            breakLabel={"..."}
            marginPagesDisplayed={0}
            pageCount={pageCount}
            onPageChange={changePage}
            containerClassName={"paginationBttns"}
            previousLinkClassName={"previousBttn"}
            nextLinkClassName={"nextBttn"}
            disabledClassName={"paginationDisabled"}
            activeClassName={"paginationActive"}
          />
        </Div>

      </Div>
      
    </Div>
  );
}

