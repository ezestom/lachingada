import useEmblaCarousel from "embla-carousel-react";
import "./EmblaCarousel.css";
import Autoplay from "embla-carousel-autoplay";

export function EmblaCarousel() {
	const [emblaRef] = useEmblaCarousel({ loop: false }, [Autoplay()]);

	return (
		<div className="embla" ref={emblaRef}>
			<div className="embla__container">
				{
					[...Array(5)].map((_, index) => (
						<div className="embla__slide hover:cursor-grab" key={index}>
							<img
								className="embla__slide__img"
								src={`https://picsum.photos/800/600?random=${index}`}
								alt=""
							/>
						</div>
					))
				}
			</div>
		</div>
	);
}
