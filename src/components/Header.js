import React, {Fragment} from 'react';

/* function Header(props) {
    console.log(props)
    return (  
        <Fragment>
                <h1>{props.titulo}</h1>
            <p>{props.descripcion}</p>
        </Fragment>
        
    );
} */
/* class Header extends React.Component {

} */
const Header = ({titulo}) => {
    return (
        <Fragment>
                <h1>{titulo}</h1>
        </Fragment>
    )
}
export default Header;