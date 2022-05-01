import * as React from 'react';
import {FacebookLoginButton, GoogleLoginButton} from "react-social-login-buttons";
import {styled} from '@mui/material/styles';


const SocialButtonBlock = styled("div")(({theme}) => ({
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
    // padding: '3% 10% 3% 10%',
}));

const SocialButtons = () => {
    return (
        <SocialButtonBlock>
            <GoogleLoginButton
                style={{display: 'flex', textAlign: 'center', borderRadius: 14, justifyContent: 'center'}}/>
            <FacebookLoginButton
                style={{display: 'flex', textAlign: 'center', borderRadius: 14, justifyContent: 'center'}}/>
        </SocialButtonBlock>
    )
}

export default SocialButtons