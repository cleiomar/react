import React, { useState, useEffect } from 'react'
import { useSpringCarousel } from 'react-spring-carousel'

const BoxEmpresasRelacionadas = () => {
    const mockItems = [
        {
            id: 'item-1',
            title: 'slide 1'
        },
        {
            id: 'item-2',
            title: 'slide 2'
        },
        {
            id: 'item-3',
            title: 'slide 3'
        },
        {
            id: 'item-4',
            title: 'slide 4'
        },
        {
            id: 'item-5',
            title: 'slide 5'
        },
        {
            id: 'item-6',
            title: 'slide 6'
        },
        {
            id: 'item-7',
            title: 'slide 7'
        },
        {
            id: 'item-8',
            title: 'slide 8'
        },
        {
            id: 'item-9',
            title: 'slide 9'
        }
    ]
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
                    <div
                        className={`grid w-full place-items-center text-2xl text-white transition-all duration-700 ${currentSlide === item.id
                            ? 'z-10 scale-150 bg-yellow-600 wh-90'
                            : 'bg-violet-500 wh-90'
                            }`}>
                        {item.title}
                    </div>
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

    return (
        <div className="relative">
            <button onClick={slideToPrevItem} className="absolute top-1/2 -translate-y-1/2 -translate-x-full left-[10%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </button>
            <div className="mx-auto w-[80%] overflow-x-clip py-[1%] relative">
                {carouselFragment}
            </div>
            <button onClick={slideToNextItem} className="absolute top-1/2 -translate-y-1/2 translate-x-full right-[10%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </button>
        </div>
    )
}

export default BoxEmpresasRelacionadas;
