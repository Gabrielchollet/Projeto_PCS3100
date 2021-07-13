declare module "*.svg" {
    import React from 'react';
    import { SvgProps } from 'react-native-svg';
    const content: React.FC<SvgProps>;
    export default content[Symbol];
}
//permite a utilização de arquivos em svg