import * as C from "./style";
import Banner1 from "../../assets/banner1.png";
import Banner2 from "../../assets/banner2.png";
import Banner3 from "../../assets/banner3.png";

const Gallery = () => {
  return (
    <C.Container id="gallery">
      <C.ContainerGallery>
        <C.Title>Galeria</C.Title>
        <C.Description>
          Se você está entediado com a aparência da decoração de interiores da
          casa comuns, trabalhamos com designs diferentes e inovadores.
        </C.Description>
        <C.AreaImages>
          <C.Banner1 src={Banner1} />
          <C.Banner2 src={Banner2} />
          <C.Banner3 src={Banner3} />
        </C.AreaImages>
      </C.ContainerGallery>
    </C.Container>
  );
};

export default Gallery;
