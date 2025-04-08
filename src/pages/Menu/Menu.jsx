import { MenuCard } from '../../components'
import './Menu.css'

const desayuno = [
    {
        id: 1,
        name: 'Cafe con Tostadas',
        description: 'Cafe,Pan,Jamón y queso',
        price: '$4.500',
    },
    {
        id: 2,
        name: 'Tostadas con palta y huevo',
        description: 'Pan Tostado,Palta,Huevo revuelto y queso crema',
        price: '$7.500',
    },
    {
        id: 3,
        name: 'Cafe y 3 medialunas o tortillas',
        description: 'Cafe,2 medialunas o tortillas ',
        price: '$4.000',
    },

]

const almuerzo = [
    {
        id: 1,
        name: 'Napolitana con papas',
        description: 'Milanesa Napolitana, Queso,Salsa y papas fritas',
        price: '$10.000',
    },
    {
        id: 2,
        name: 'Pollo Al verdeo ',
        description: 'Pollo Salteado,Fideos,Crema y Verdeo',
        price: '$8.500',
    },
    {
        id: 3,
        name: 'Cabrito con papas doradas',
        description: 'Cabrito Asado con porcion de papas al horno ',
        price: '$25.000',
    },

]

const cena = [
    {
        id: 1,
        name: 'Bife de chorizo con ensalada',
        description: 'Bife de chorizo a la parrilla acompañado de ensalada mixta',
        price: '$12.000',
    },
    {
        id: 2,
        name: 'Salmón a la manteca de hierbas',
        description: 'Filete de salmón grillado con manteca de hierbas y puré de papas',
        price: '$18.000',
    },
    {
        id: 3,
        name: 'Lasagna de carne y espinaca',
        description: 'Capas de pasta con carne, espinaca, salsa bechamel y queso gratinado',
        price: '$10.500',
    }
];

const postres = [
    {
        id: 1,
        name: 'Tiramisú',
        description: 'Delicioso postre italiano con capas de café, crema de mascarpone y cacao',
        price: '$6.000',
    },
    {
        id: 2,
        name: 'Flan casero con dulce de leche',
        description: 'Flan de huevo acompañado de dulce de leche y crema',
        price: '$4.500',
    },
    {
        id: 3,
        name: 'Cheesecake de frutos rojos',
        description: 'Tarta de queso cremoso con una capa de frutos rojos frescos',
        price: '$7.000',
    }
];


function Menu() {
    return (
        <div className='menu-page'>
            <header className='mt-5'>
                <div className='container h-100 d-flex align-items-center justify-content-center'>
                    <h1 className='text-light'>
                        Nuestro Menú
                    </h1>
                </div>
            </header>

            <MenuCard
                menu={desayuno}
                img="https://images.pexels.com/photos/23158189/pexels-photo-23158189/free-photo-of-desayuno.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                tittle='Desayuno: Comenzá el día con un buen desayuno'
                bg='bg-white'
                text=''
            />

            <MenuCard
                menu={almuerzo}
                img="https://images.pexels.com/photos/20670978/pexels-photo-20670978/free-photo-of-plato-mano-comida-mesa.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                tittle='Almuerzo: Energía y sabor para tu tarde'
                bg='bg-dark '
                text='text-white'
            />

            <MenuCard
                menu={cena}
                img="https://images.pexels.com/photos/1251208/pexels-photo-1251208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                tittle='Cena: Cerrá el día con una cena inolvidable'
                bg='bg-ligh '
                text=''
            />

            <MenuCard
                menu={postres}
                img="https://images.pexels.com/photos/26890889/pexels-photo-26890889/free-photo-of-tiramisu-en-taza-de-chocolate.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                tittle='Postre: El toque dulce que merecés'
                bg='bg-dark '
                text='text-white'
            />


        </div>
    )
}

export default Menu