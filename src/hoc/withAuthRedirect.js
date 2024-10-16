import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

export const withAuthRedirect = (Component) => {
    const RedirectComponent = (props) => {
        const navigate = useNavigate()
        if(!props.auth && props.auth !== null) navigate('/login')
        
            return <Component {...props} />
    }
    const ConnectedRedirect = connect(mapStateToProps)(RedirectComponent)
    return ConnectedRedirect
}

const mapStateToProps = (state) => {
    return {
        auth: state.auth.auth
    }
}

// ЭТО РАБОТАЕТ

// import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import { useNavigate } from 'react-router-dom';

// export const withAuthRedirect = (Component) => {
//   const RedirectComponent = (props) => {
//     const navigate = useNavigate();

//     useEffect(() => {
//       // Проверка состояния авторизации
//       if (!props.auth) {
//         navigate('/login');
//       }
//     }, [props.auth, navigate]); // Добавь auth и navigate в зависимости, чтобы они отслеживались

//     return props.auth ? <Component {...props} /> : null; // Возвращай компонент только если авторизован
//   };

//   const mapStateToProps = (state) => ({
//     auth: state.auth.auth, // Предполагается, что это флаг авторизации
//   });

//   return connect(mapStateToProps)(RedirectComponent);
// };




