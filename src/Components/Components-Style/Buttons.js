import styled from 'styled-components';
import {colors} from '../Components-Style/theme'

export const Button = styled.button`

    ${props => props.$btn_primary && 
        `width: 120px; height: 40px; background-color: ${colors.primary_btn}; border-radius: 10px; cursor: pointer; border: none; font-size: 20px; color: #2e2e2e;` 
    }
`