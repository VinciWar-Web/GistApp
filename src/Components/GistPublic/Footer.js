import { useDispatch } from 'react-redux';

import { spinnerLoading } from '../../Redux/Actions/gistPublicActios';
import { Div } from '../Components-Style/Div';
import { Select } from '../Components-Style/Select'

export const Footer = ({setageSize}) => {

  //Herlper
  const dispatch = useDispatch();

  //Controlamos la cantidad de item a listar
  const handleSelect = (e) => {
    setageSize(Number(e.target.value))
    dispatch(spinnerLoading(true)); //Activa el Spinner
    setTimeout(() => {
      dispatch(spinnerLoading(false)); //Cierra el Spinner
    }, 500)
  }

  return (
    <Div $footer_box>
        <Select $select_size onChange={ handleSelect }>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
        </Select>
    </Div>
  )
}
