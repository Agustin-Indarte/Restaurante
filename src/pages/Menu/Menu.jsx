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
                img="https://scontent.faep29-1.fna.fbcdn.net/v/t39.30808-6/292479053_4566854670084760_5495906188809353487_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEt-uc3ZRC0E4Qqn2aOlpbTn6ssOuwnTPmfqyw67CdM-YG24PSlYSZjgt3slp7pWnnPsLHsyMv8UqB9z-EgQNbY&_nc_ohc=BBS4n2qjBJYQ7kNvgFgmVfd&_nc_oc=AdgwHWAsJ3riH0d3WrTyC6KOG3kZLM1wj_hVULWquAH-WcddgC_SfqbuxBNZIzGYt80&_nc_zt=23&_nc_ht=scontent.faep29-1.fna&_nc_gid=AOaN5AOuB4b5JkCVO0qucle&oh=00_AYBHRGv_nEhVw5T43Xkewl0N2QvWyfWljxynxfsv94MteQ&oe=67A5E853"
                tittle='Desayuno: Comenzá el día con un buen desayuno'
                bg='bg-white'
                text=''
            />

            <MenuCard
                menu={almuerzo}
                img="https://scontent.faep29-1.fna.fbcdn.net/v/t39.30808-6/278934225_4350382345065328_3031504667674692391_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGdzvbJK2xJFsLN8W5emuVA2snsaKT7irXayexopPuKtQFQ1K1jtzFzfxLN8jhTJUIBlSFeqIVxoV50huMvk83D&_nc_ohc=uX_HGWL35wEQ7kNvgGct_5t&_nc_oc=AdjkE59uKm1c6a0h5fbTT1vSn5tRLb0JNntfiaUzgw0NM9XtDj7cSZR9Sl49KsxDiK0&_nc_zt=23&_nc_ht=scontent.faep29-1.fna&_nc_gid=AF52RP1L46PkaRyimq4HToB&oh=00_AYBZZUU2C5vypAgC7FFnA4qocf7SV2lXSHjaABd1LBoGLA&oe=67A5FFCE"
                tittle='Almuerzo: Energía y sabor para tu tarde'
                bg='bg-dark '
                text='text-white'
            />

            <MenuCard
                menu={cena}
                img="https://scontent.faep29-1.fna.fbcdn.net/v/t39.30808-6/283979950_4444608382309390_6871088184795274087_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGXuasDOxEbGyf_jDQ20jExe9sjaUeUtkp72yNpR5S2ShRQf4__1Bysib45EAu-aFiuCMwH8sSD6rkau33gm0ql&_nc_ohc=eNL091d5ULcQ7kNvgHvjL7U&_nc_oc=AdiTb0o_MIrwsOvwYwWRQpeWaaoS9oqF3oFjoLi5wFJQ9CfA6VD9ZXD8CRYlj1YdPRo&_nc_zt=23&_nc_ht=scontent.faep29-1.fna&_nc_gid=A-bKWBIuwOvNHeSN1_byY5J&oh=00_AYD0ugOvQH_thgF1UnZnatTje97dP1Ev5NRbVebL4t1J8w&oe=67A5ED7D"
                tittle='Cena: Cerrá el día con una cena inolvidable'
                bg='bg-ligh '
                text=''
            />

            <MenuCard
                menu={postres}
                img="https://scontent.faep29-2.fna.fbcdn.net/v/t39.30808-6/345189384_1028488211455601_6174061834785290663_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGBDMMYPHMxpQKYXa-NL8Ctdcdw6NwbYWJ1x3Do3BthYnEUAzePo00QeocmTEWLzb4IvGjF01H7kRwmlh8pC1dr&_nc_ohc=OLxBOC_eXssQ7kNvgFEKBMg&_nc_oc=Adj_BxIbtf20CMADYTSwyQkneCyNLJ9QeZcNQeRT0jtsIz0krt8TVtX4cGfhXmkmmmc&_nc_zt=23&_nc_ht=scontent.faep29-2.fna&_nc_gid=A-Zu3-TGZqQSwf7nscXKblk&oh=00_AYBKVMesuRLR-7S-dWPQm843rQH2czk6fonzy8WFGFhpSw&oe=67A5FF99"
                tittle='Postre: El toque dulce que merecés'
                bg='bg-dark '
                text='text-white'
            />


        </div>
    )
}

export default Menu