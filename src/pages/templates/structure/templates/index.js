import React from 'react';
import Structure1 from './structure1';

const PDFFactory = ({info, options}) => {
    const structure = {
        bluewave :  Structure1,
        triwave :  Structure1,
        topwave :  Structure1,
    }

    const OptionPicked = structure[options.template] || Structure1;

    return <>{<OptionPicked info={info} options={options} />}</>

}

export default PDFFactory;


