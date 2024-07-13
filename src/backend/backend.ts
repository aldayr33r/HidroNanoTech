import express from 'express';
import { Server, ic, query } from 'azle';
import { HttpResponse, HttpTransformArgs } from 'azle/canisters/management';

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

        let carritos = {}; // Usar un objeto para almacenar carritos por identity

        app.get('/productos', (req, res) => {
            res.json(productos);
        });

        app.get('/carrito', (req, res) => {
            const { identity } = req.headers;
            if (carritos[identity]) {
                res.json(carritos[identity]);
            } else {
                res.json([]);
            }
        });

        app.post('/carrito/agregar', (req, res) => {
            const { productoId, cantidad } = req.body;
            const { identity } = req.headers;

            if (!carritos[identity]) {
                carritos[identity] = [];
            }

            const carrito = carritos[identity];
            const producto = productos.find(p => p.id === productoId);

            if (producto) {
                const itemExistente = carrito.find(item => item.id === productoId);
                if (itemExistente) {
                    itemExistente.cantidad += cantidad;
                } else {
                    carrito.push({ ...producto, cantidad });
                }
                res.json(carrito);
            } else {
                res.status(404).json({ error: 'Producto no encontrado' });
            }
        });

        app.post('/carrito/comprar', (req, res) => {
            const { identity } = req.headers;

            if (carritos[identity]) {
                // Aquí podrías agregar lógica para procesar el pedido, como reducir inventario, registrar la compra, etc.
                carritos[identity] = [];
                res.json({ mensaje: 'Compra realizada con éxito' });
            } else {
                res.status(404).json({ error: 'Carrito vacío o no encontrado' });
            }
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
