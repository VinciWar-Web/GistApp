import styled from 'styled-components';

export const Img = styled.img`

    ${props => props.$img_user && 
        `margin-right: 20px; border-radius: 10px;` 
    }

    ${props => props.$img_more && 
        `cursor: pointer;` 
    }

    ${props => props.$img_list && 
        `width: 50px; border-radius: 8px;` 
    }
`