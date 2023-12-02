/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

interface ExpandableRowVentasProps {
    data: any;
}

export const ExpandableRowVentas: React.FC<ExpandableRowVentasProps> = ({ data }) => {
    
    return (
        <>
            {data.nombres_productos.map((producto: string, i: number) => (
                <h6 key={i}>{producto}</h6>
            ))}
        </>
    );
};