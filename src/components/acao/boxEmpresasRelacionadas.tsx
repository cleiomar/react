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
}
const BoxEmpresasRelacionadas = ({ empresas }: BoxEmpresasRelacionadasProps) => {

    const mockItems= empresas.map((slide, index) => ({
        id: slide.lista_ativos_id,
        title: slide.ativo_codigo,
        logo: slide.logo
    }));

    const [currentSlide, setCurrentSlide] = useState(mockItems[0].id)
    const [itemsPerSlide, setItemsPerSlide] = useState(calculateItemsPerSlide());

    const handleResize = () => {
        setItemsPerSlide(calculateItemsPerSlide());
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [currentSlide]);

    function calculateItemsPerSlide() {
        const windowWidth = window.innerWidth;

        if (windowWidth >= 1024) {
            return 9; // Exemplo: 3 itens por slide para telas maiores que 1024px
        } else if (windowWidth >= 768) {
            return 7; // Exemplo: 2 itens por slide para telas maiores que 768px
        } else {
            return 3; // Exemplo: 1 item por slide para telas menores que 768px
        }
    }

    const {
        carouselFragment,
        slideToPrevItem, // go back to previous slide
        slideToNextItem, // move to next slide
        useListenToCustomEvent //custom hook to listen event when the slide changes
    } = useSpringCarousel({
        itemsPerSlide: itemsPerSlide, // number of slides per view
        withLoop: true, // will loop
        initialStartingPosition: 'center', // the active slide will be at the center
        gutter: 24, // to add the space between slides
        items: mockItems.map((item) => {
            return {
                ...item,
                renderItem: (
                    <Link to={'/acoes/' + item.title}>
                        <div
                            className={`grid w-full place-items-center text-2xl text-white transition-all duration-700 ${currentSlide === item.id
                                ? 'z-10 scale-150  wh-90'
                                : ' wh-90'
                                }`}>
                            <img src={item.logo} width={'100%'} height={'100%'} />
                            <div className='ft-micro' style={{ position: 'absolute', marginTop: '110px', color: '#000000' }}><b>{item.title}</b></div>
                        </div>
                    </Link>
                )
            }
        })
    })

    useListenToCustomEvent((event) => {
        if (event.eventName === 'onSlideStartChange') {
            setCurrentSlide(event?.nextItem?.id)
            handleResize();
        }
    })
    useEffect(() => {
        const intervalId = setInterval(() => {
            slideToNextItem();
        }, 3000); // Ajuste o intervalo conforme necessário (3000 ms = 3 segundos)

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
    )
}

export default BoxEmpresasRelacionadas;
