import moment from 'moment';
import More from '../../Img/More.svg';
import { useDispatch } from 'react-redux';
import { gistDetailed, spinnerLoading } from '../../Redux/Actions/gistPublicActios';
import { useNavigate } from 'react-router-dom';

import { Div } from '../Components-Style/Div';
import { Img } from '../Components-Style/Img';

export const GridCells = ({
  owner,
  description,
  created_at,
}) => {

  //Helpers
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Desestructuramos la data del owner
  const {id, login, avatar_url, html_url } = owner

  //Validamos si en descripción no hay datos, que pinte Not description
  let Description
  description === "" || description === null ? Description = "Not description" : Description = description

  // Controlamos los datos de los gist detallados y direccionamos a una nueva pantalla
  const handleClic = () => {
    dispatch(gistDetailed(id,{
      avatar_url,
      login,
      Description,
      created_at,
      html_url
    }))

    dispatch(spinnerLoading(true)); //Activa el Spinner
    navigate('/detailed')
  }

  return (
    <>
        <Div key={owner.id} $grid_box>

          <Div>
            <Img $img_list src={avatar_url} alt={avatar_url} />
          </Div>

          <Div $user_info>
            <p>{login}</p>
          </Div>

          <Div $text_info>
            <p>{Description}</p>
          </Div>

          <Div $date_info>
            <p>{moment(created_at).format("LLL")}</p>
          </Div>

          <Div $date_info>
            <Img 
              $img_more 
              src={More} 
              alt={More} 
              onClick={ handleClic }
            />
          </Div>

        </Div>
    </>
  )
}


