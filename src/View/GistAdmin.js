import { Div } from '../Components/Components-Style/Div';
import { GridItemsHeader } from '../Components/GistPublic/GridItemsHeader';
import { Pagination } from '../Components/GistPublic/Pagination';
import { Spinner } from '../Components/Spinner';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllGistPublic, spinnerLoading } from '../Redux/Actions/gistPublicActios';

export const GistAdmin = () => {

  // Helpers
  const dispatch = useDispatch();

  // Registro
  const { GistAllPublic, SpinnerActive } = useSelector((state) => state.gistPublic);

  // dispara la carga inicial
  useEffect(() => {
    setTimeout(() => {
      dispatch(getAllGistPublic());
      dispatch(spinnerLoading(false));
    }, 1000)
  }, [dispatch]);


    return ( GistAllPublic.length === 0 ? <Spinner /> : (
      <>

        {
          SpinnerActive === true && <Spinner />
        }

          <Div $container_app>
            <Div $container_app_box>

              <Div $title_primary>
                <h1>Gist App</h1>
              </Div>


              < GridItemsHeader 
                  user = "USUARIOS"
                  descriptions = "DESCRIPCIONES"
                  date = "FECHAS"
              />

              < Pagination />
            </Div>
          </Div>
      </>
    )
  )
}
