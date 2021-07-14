import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { AuthRoutes } from './auth.routes';

// funcao responsavel pela navegacao no aplicativo
export function Routes() {
    return (
        <NavigationContainer>
            <AuthRoutes />
        </NavigationContainer>

    )
}