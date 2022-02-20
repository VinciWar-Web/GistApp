import { Div } from '../Components-Style/Div'

export const GridItemsHeader = ({
    user,
    descriptions,
    date
}) => {

  return (
    <>
    <Div $grid_primary>
        <Div $grid_box>

            <div>
                
            </div>

            <Div $user_info>
                <p><b>{user}</b></p>
            </Div>

            <Div $text_info>
                <p><b>{descriptions}</b></p>
            </Div>

            <Div $date_header>
                <p><b>{date}</b></p>
            </Div>
        </Div>
    </Div>
    </>
  )
}
