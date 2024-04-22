import Image from 'next/image';

interface CardBurguer {
  name: string;
  image: string;
  calories: string;
  price: string;
  promotionalPrice: string;
}
export const CardBurguer = ({ image, calories, price, promotionalPrice, name }: CardBurguer) => {
  return (
    <div>
      <div className=" rounded-[50px] bg-white  text-center h-48 mt-6 text-gray-600">
        <div className="relative h-24">
          <Image src={`/image/${image}.png`} width={500} height={500} alt="Picture of the author" className="absolute -top-16 rounded-full" />
        </div>
        <div className="relative">
          <p className="font-semibold	">{name}</p>
          <p className="font-light text-sm">{calories}Kcal</p>
          <div className="flex gap-2 justify-center items-center">
            <span className="line-through	 text-sm">{price}</span>
            <span className="font-semibold	 text-lg">{promotionalPrice}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
