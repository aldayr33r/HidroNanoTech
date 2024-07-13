import express from 'express';
import { Server, ic, query } from 'azle';
import {
    HttpResponse,
    HttpTransformArgs,
} from 'azle/canisters/management';

export default Server(
    () => {
        const app = express();
        app.use(express.json());

        let productos = [
            { id: 1, nombre: 'Agua juan', porcentaje: '99.9 %', sugerencias: ["Uso doméstico", "Suministro de agua potable en comunidades rurales y urbanas"], precio: "$0.07 por litro" },
            { id: 2, nombre: 'Agua Sabor Fernanda', porcentaje: '90 %', sugerencias: ["Procesos de manufactura", "Refrigeración y calderas", "Limpieza y lavado industrial"], precio: "$0.05 por litro" },
            { id: 3, nombre: 'Agua sabor Marys', porcentaje: '90 %', sugerencias: ["Riego de cultivos", "Hidroponía y acuaponía", "Cría de ganado y aves"], precio: "$0.07 por litro" },
            { id: 4, nombre: 'Agua De Uso Recreativo', porcentaje: '95 %', sugerencias: ["Llenado de piscinas y parques acuáticos", "Fuentes y estanques ornamentales"], precio: "$0.07 por litro" },
            { id: 5, nombre: 'Aguas Grises', porcentaje: '70 %', sugerencias: ["Riego de parques", "Descarga de inodoros"], precio: "$0.07 por litro" }
        ];
        
        let carrito =[
            {}
        ]
        app.post('/price-oracle', async (req, res) => {
            ic.setOutgoingHttpOptions({
                maxResponseBytes: 20_000n,
                cycles: 500_000_000_000n, // HTTP outcalls cost cycles. Unused cycles are returned.
                transformMethodName: 'transform'
            });

            const date = '2024-04-01';
            const response = await fetch(`https://api.coinbase.com/v2/prices/${req.body.pair}/spot?date=${date}`)
                .then(res => res.json())
                .catch(error => {
                    console.error('Error fetching data:', error);
                    res.status(500).json({ error: 'Failed to fetch price' });
                });

            if (response) {
                res.json(response);
            }
        });

        app.get('/productos', (req, res) => {
            res.json(productos);
        });

        app.use(express.static('/dist'));
        return app.listen(3000); // Deberías especificar un puerto
    },
    {
        transform: query([HttpTransformArgs], HttpResponse, (args) => {
            return {
                ...args.response,
                headers: [] // Aquí puedes ajustar los headers según tus necesidades
            };
        })
    }
);
