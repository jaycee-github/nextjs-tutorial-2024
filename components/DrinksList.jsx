import Link from "next/link";
import Image from "next/image";

// Refactored Version
const DrinksList = ({ drinks }) => {
    return (
        <ul className="grid sm:grid-cols-2 gap-6 mt-6">
            {drinks.map((drink) => {
                return (
                    <li key={drink.idDrink}>
                        <Link
                            href={`/drinks/${drink.idDrink}`}
                            className="text-xl font-medium"
                        >
                            <div className="relative h-48 mv-4">
                                <Image
                                    src={drink.strDrinkThumb}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                                    alt={drink.strDrink}
                                    className="rounded-md object-cover"
                                />
                            </div>
                            {drink.strDrink}
                        </Link>
                    </li>
                );
            })}
        </ul>
    );
};

export default DrinksList;

// Original Version
// const DrinksList = ({ drinks }) => {
//     console.log(drinks);

//     return (
//         <ul className="menu menu-vertical pl-0">
//             {drinks.map((drink) => {
//                 return (
//                     <li key={drink.idDrink}>
//                         <Link
//                             href={`/drinks/${drink.idDrink}`}
//                             className="text-xl font-medium"
//                         >
//                             {drink.strDrink}
//                         </Link>
//                     </li>
//                 );
//             })}
//         </ul>
//     );
// };

// NOTES :
/*
    Whenever we use the "fill" prop, we must have a parent.
    The parent has to be display : block, which is the default for div.
    Also we need to set it up to "relative".
*/
