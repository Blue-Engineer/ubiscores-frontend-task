import router from "next/router";
import {
  BrandImageStyledContainer,
  BrandImageStyledComponent,
} from "./brand-image.styles";

const BrandImage = () => {
  return (
    <BrandImageStyledContainer onClick={() => router.push("/")}>
      <BrandImageStyledComponent src="/logo.png" alt="Ubiscore" />
    </BrandImageStyledContainer>
  );
};
export default BrandImage;
