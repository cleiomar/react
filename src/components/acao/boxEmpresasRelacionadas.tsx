import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSpringCarousel } from 'react-spring-carousel'

interface BoxEmpresasRelacionadasProps {
    empresas: Array<any>
}
interface mockItems {
    lista_ativos_id: number;
    ativo_codigo: string;
    logo: string;
    title: string;
}
const BoxEmpresasRelacionadas = ({ empresas }: BoxEmpresasRelacionadasProps) => {
    let mockItems: Array<any>;

    mockItems = empresas.map((slide, index) => ({
        id: (slide.lista_ativos_id != undefined ? slide.lista_ativos_id : index ),
        title: (slide.ativo_codigo != undefined ? slide.ativo_codigo : 'NENHUMA' ),
        logo: (slide.logo != undefined ? slide.logo : './src/assets/images/none.jpg' )
    }));

function Upper(val:string){
    let nova = val+"";
        nova = nova.toString()
        nova = nova.toUpperCase()
    return nova;
}
    function calculateItemsPerSlide() {
        const windowWidth = window.innerWidth;

        if (windowWidth >= 1024) {
            return {
                itemsPerSlide: 9,
                windowWidth: windowWidth
            };
        } else if (windowWidth >= 600) {
            return {
                itemsPerSlide: 5,
                windowWidth: windowWidth
            };
        } else {
            return {
                itemsPerSlide: 3,
                windowWidth: windowWidth
            };
        }
    }

    const [currentSlide, setCurrentSlide] = useState([mockItems[0].id])
    const [itemsPerSlide, setItemsPerSlide] = useState(calculateItemsPerSlide().itemsPerSlide);
    const [windowWidth, setWindowWidth] = useState(calculateItemsPerSlide().windowWidth);

    const handleResize = () => {
        setItemsPerSlide(calculateItemsPerSlide().itemsPerSlide);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [currentSlide]);

    const {
        carouselFragment,
        slideToPrevItem,
        slideToNextItem,
        useListenToCustomEvent,
    } = useSpringCarousel({
        itemsPerSlide: itemsPerSlide,
        withLoop: true,
        initialStartingPosition: 'center',
        gutter: 24,
        items: mockItems.map((item) => ({
            ...item,
            renderItem: (
                <Link to={'/acoes/' + item.title} key={item.id}>
                    <div
                        className={`grid w-full place-items-center text-2xl text-white transition-all duration-700 ${currentSlide === item.id
                            ? 'z-10 scale-150  wh-90'
                            : ' wh-90'
                            }`}>
                        <img src={item.logo} alt={`Logo ${item.title}`} width={'100%'} height={'100%'} />
                        <div
                            className='ft-micro'
                            style={{ position: 'absolute', marginTop: '110px', color: '#000000' }}>
                            <b>
                                {Upper(item.title)}
                            </b>
                        </div>
                    </div>
                </Link>
            ),
        })),
    });

    useListenToCustomEvent((event) => {
        if (event.eventName === 'onSlideStartChange') {
            setCurrentSlide(event?.nextItem?.id);
            handleResize();
        }
    });

    useEffect(() => {
        let intervalId;
        intervalId = setInterval(() => {
            slideToNextItem();
        }, 3000);
        return () => clearInterval(intervalId);
    }, [slideToNextItem]);

    return (
        <div className="relative">
            <button onClick={slideToPrevItem} className="absolute top-1/2 -translate-y-1/2 -translate-x-full left-[2%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <div className="mx-auto w-[95%] overflow-x-clip py-[4%] relative">
                {carouselFragment}
            </div>
            <button onClick={slideToNextItem} className="absolute top-1/2 -translate-y-1/2 translate-x-full right-[2%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    );
}

export default BoxEmpresasRelacionadas;
