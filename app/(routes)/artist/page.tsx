import getBillboard from "@/actions/get-billboard";
import getProducts from "@/actions/get-products";
import ProductList from "@/components/product-list";
import Billboard from "@/components/ui/billboard";
import Container from "@/components/ui/container";
import NoResults from "@/components/ui/no-results";
import Maintenace from "../assets/images/4ee5ca990c4a7ec5ff5207719caa2e5c.png"
import Image from "next/image";

export const revalidate = 0;

const HomePage = async () => {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("d941a534-4ec0-456f-b689-08b42adb783f");

  return (
    <Container>
      <div className="space-y-10 pb-10 flex justify-center mx-auto">
      <Image src={Maintenace} alt =""/>
      </div>
      <NoResults/>
    </Container>
  )
};

export default HomePage;
