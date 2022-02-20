import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import moment from 'moment';

import { Div } from '../Components/Components-Style/Div';
import { Img } from '../Components/Components-Style/Img';
import { Button } from '../Components/Components-Style/Buttons';
import { Spinner } from '../Components/Spinner';
import { spinnerLoading } from '../Redux/Actions/gistPublicActios';
import { useEffect } from 'react';

export const GistDetailed = () => {
  //Herlper
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Registro
  const { gistDetailed, SpinnerActive } = useSelector((state) => state.gistPublic);
  const { Description, avatar_url, created_at, html_url, id, login } = gistDetailed

  // Controlamos el Retorno
  const handleReturn = () => {
    dispatch(spinnerLoading(true));
    navigate('/')
  }

  // dispara el cierre del spinner
  useEffect(() => {
    setTimeout(() => {
      dispatch(spinnerLoading(false));
    }, 1000)
  }, [dispatch]);

  return ( 
    <>

      {
        SpinnerActive === true && <Spinner />
      }

      <Div $container_app>
        <Div $container_app_box>

          <Div $header_title>
            <Div $title_primary>
              <h1>Gist App</h1>
            </Div>
            <Div $img_user_detail>
              <Img $img_user src={ avatar_url } alt={ avatar_url } />
            </Div>
          </Div>

          <Div $input_box>
            <label>Usuario</label>
            <Div $input_view><h3>{login}</h3></Div>
          </Div>

          <Div $input_box>
            <label>Descripción</label>
            <Div $input_view><h3>{Description}</h3></Div>
          </Div>

          <Div $input_box>
            <label>Fecha de creación</label>
            <Div $input_view><h3>{moment(created_at).format("LLL")}</h3></Div>
          </Div>

          <Div $input_box>
            <label>link a Github</label>
            <Div $input_view><h3><a href={html_url} target="blank">{html_url}</a></h3></Div>
            
          </Div>

          <Div $input_box>
            <label>Id</label>
            <Div $input_view><h3>{id}</h3></Div>
          </Div>

          <Div $box_btn_primary onClick={handleReturn}>
            <Button $btn_primary>Volver</Button>
          </Div>

        </Div>
      </Div>
    </>
  )
}
