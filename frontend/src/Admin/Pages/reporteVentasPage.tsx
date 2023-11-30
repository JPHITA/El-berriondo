/* eslint-disable @typescript-eslint/no-explicit-any */
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { Header } from '../Components/HeaderAdmin.tsx';
import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { fetchBackend } from '../../services/backend.ts';

import { ExpandableRowVentas } from "./../Components/ExpandableRowVentas.tsx";

function actualizarEstados(estadoFila: string) {
    let estados: string[] = []
    if (estadoFila == 'En proceso') {
        estados = ['Completada', 'Cancelada']
    } else if (estadoFila == 'Completada') {
        estados = ['Cancelada']
    } else if (estadoFila == 'Cancelada') {
        estados = ['En proceso']
    } else {
        //error
    }
    return estados
}

export const ReporteVentasPage = () => {
    const [Ventas, setVentas] = useState([]);
    const [loading, setLoading] = useState(true);

    function getVentas() {
        fetchBackend("/Admin/getVentas", {
            method: "GET",
        }).then(async (response) => {
            const data = await response.json();

            setVentas(data);
            setLoading(false);
        });
    }

    useEffect(getVentas, []);

    function actualizarEstado(id: number, estado: string) {
        setLoading(true);

        fetchBackend("/Admin/updateStateVenta", {
            method: "POST",
            body: JSON.stringify({id, estado}),
            headers: {
                "Content-Type": "application/json",
            },
        }).then(async (response) => {
            const res = await response.json();
            console.log(res);

            if (res.success) getVentas();
        });
    }

    const columns = [
        {
            name: 'ID',
            selector: (row: any) => row.id,
            sortable: true,
        },
        {
            name: 'ESTADO',
            cell: (row: any) => (
                    <DropdownButton
                        as={ButtonGroup}
                        key={row.id}
                        id={`dropdown-${row.id}`}
                        variant={"success"}
                        title={row.estado}
                    >
                        {actualizarEstados(row.estado).map((estado, i) => (
                            <Dropdown.Item key={i} onClick={() => actualizarEstado(row.id, estado)}>
                                {estado}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
            ),
            selector: (row: any) => row.estado,
            sortable: false,
        },
        {
            name: 'USUARIO',
            selector: (row: any) => row.nombre_usuario,
            sortable: true,
        },
        {
            name: 'GANANCIA',
            selector: (row: any) => row.valor_total.toLocaleString("es-ES", {style: "currency", currency: "COP"}),
            sortable: true,
        },
        {
            name: 'CANTIDAD PRODUCTOS',
            selector: (row: any) => row.cantidad_productos,
            sortable: true,
        },
        {
            name: 'FECHA',
            selector: (row: any) => row.fecha_registro,
            sortable: true,
        }
    ];

    return (
        <>
            <Header />
            <Container fluid >
                <h1 style={{ textAlign: "center" }}>Registro de Ventas</h1>
                <Row>
                    <Col style={{ justifyContent: 'center' }}>

                    </Col>
                </Row>
                <DataTable
                    columns={columns}
                    data={Ventas}
                    pagination
                    progressPending={loading}
                    expandableRows
                    expandableRowsComponent={ExpandableRowVentas}
                />
            </Container>
        </>
    );
}