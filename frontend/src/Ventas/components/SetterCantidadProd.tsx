interface SetterCantidadProps {
    cantActual: number;
    handleDisminuir: () => void;
    handleAumentar: () => void;
}

// Componente que muestra un input para establecer la cantidad de un producto

export const SetterCantidadProd = (props: SetterCantidadProps) => {

    return (
        <>
            <div className="input-group">
                <span role="button" className="input-group-text" onClick={props.handleDisminuir}>-</span>

                <input
                    value={props.cantActual || 0}
                    type="text"
                    className="form-control text-center"
                    disabled
                />

                <span role="button" className="input-group-text" onClick={props.handleAumentar}>+</span>
            </div>
        </>
    )
}