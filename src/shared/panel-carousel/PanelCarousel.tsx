import "./PanelCarousel.scss";


export interface PanelCarouselProps {
    children: React.ReactNode;
}

export const PanelCarousel = ({children}: PanelCarouselProps) => {
    return (
        <>
            <div className="panel-carousel">
                {children}
            </div>
        </>
    )
}