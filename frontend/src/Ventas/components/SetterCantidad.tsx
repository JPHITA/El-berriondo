
interface SetterCantidadProps {
    cantActual: number;
    handleAumentar: () => void;
    handleDisminuir: () => void;
}

export const SetterCantidad = (props: SetterCantidadProps) => {

    return (
        <>
            <div className="input-group">
                <span role="button" className="input-group-text" onClick={props.handleAumentar}>-</span>

                <input
                    value={`llevar ${props.cantActual}`}
                    type="text"
                    className="form-control text-center"
                    disabled
                />

                <span role="button" className="input-group-text" onClick={props.handleDisminuir}>+</span>
            </div>
        </>
    )
}