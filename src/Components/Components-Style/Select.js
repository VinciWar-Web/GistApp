import styled from 'styled-components';
import {colors} from '../Components-Style/theme'

export const Select = styled.select`

    ${props => props.$select_size && 
        `background-color: ${colors.background_pag}; border: none !important; outline: none; cursor: pointer;` 
    }

`