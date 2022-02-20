import styled from 'styled-components';
import {colors} from '../Components-Style/theme'

export const Div = styled.div`

    ${props => props.$container_app && 
        `display: flex; justify-content: center; margin-top: 50px;` 
    }

    ${props => props.$container_app_box && 
        `width: 95%; background-color: ${colors.background}; border-radius: 18px; border: 1px solid ${colors.border};` 
    }

    ${props => props.$title_primary && 
        ` width: 180px; padding-top: 35px; padding-bottom: 35px; padding-left: 45px;` 
    }

    ${props => props.$header_title && 
        `display: flex; margin-top: 15px;` 
    }

    ${props => props.$img_user_detail && 
        `width: 100%; height: 150px; margin-right: 20px; display: flex; justify-content: end;` 
    }

    ${props => props.$input_box && 
        `margin-left: 30px;` 
    }

    ${props => props.$input_view && 
        `background-color: ${colors.background_input}; width: 98%; height: 45px; margin-top: 5px; margin-bottom: 15px; padding-left: 15px; border-radius: 5px; display: flex; align-items: center;` 
    }

    ${props => props.$box_btn_primary && 
        `margin-right: 25px; margin-bottom: 30px; margin-top: 30px; display: flex; justify-content: end;` 
    }

    ${props => props.$container_paginate_primary && 
        `display: flex; align-items: center; justify-content: center; flex-direction: column; width: 100%;` 
    }

    ${props => props.$box_paginate_primary && 
        `display: flex;` 
    }

    ${props => props.$box_paginate && 
        `width: 92%; display: flex; justify-items: center; align-items: center;` 
    }

    ${props => props.$gist_box && 
        `display: flex; align-items: center; justify-content: center; flex-direction: column; width: 100%;` 
    }

    ${props => props.$footer_box_primary && 
        `width: 92%; display: flex; justify-items: center; align-items: center; margin-right: 10px; outline: 0px;` 
    }

    ${props => props.$footer_box && 
        `background-color: ${colors.background_pag}; width: 45px; height: 38px; border-radius: 5px; display: flex; justify-content: center; align-items: center;` 
    }

    ${props => props.$grid_primary && 
        `display: flex; align-items: center; justify-content: center; flex-direction: column; width: 100%;` 
    }

    ${props => props.$grid_box && 
        `width: 90%; padding: 15px; color: #414141; display: grid; grid-template-columns: 70px auto auto auto auto; grid-template-rows: auto; border: 1px solid ${colors.border}; background-color: ${colors.background};` 
    }

    ${props => props.$user_info && 
        `display: flex; align-items: center;` 
    }

    ${props => props.$text_info && 
        `display: flex; justify-content: center; align-items: center; margin-left: 80px; margin-right: 80px;` 
    }

    ${props => props.$date_info && 
        `margin-right: 5px; display: flex; justify-content: end; align-items: center;` 
    }

    ${props => props.$date_header && 
        `display: flex; justify-content: end; align-items: center;` 
    }

`