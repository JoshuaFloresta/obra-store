import { Artist  } from "@/types";

const URL=`${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getArtist = async (): Promise<Artist[]> => {
  const res = await fetch(URL);

  return res.json();
};

export default getArtist;

