import { FcMoneyTransfer, FcBullish, FcCandleSticks } from "react-icons/fc";

const features = [
  {
    icon: FcMoneyTransfer,
    label: "Wallet transfer",
    description:
      "Lorem ipsum dolor sit amet consectur dolor lorem ipsum dolor lorem.",
  },
  {
    icon: FcBullish,
    label: "Wallet transfer",
    description:
      "Lorem ipsum dolor sit amet consectur dolor lorem ipsum dolor lorem.",
  },
  {
    icon: FcCandleSticks,
    label: "Wallet transfer",
    description:
      "Lorem ipsum dolor sit amet consectur dolor lorem ipsum dolor lorem.",
  },
];

export const Features = () => {
  return (
    <div className="p-4 py-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row ">
        {features.map((feature) => (
          <div
            key={feature.label}
            className="flex flex-1 flex-col items-center justify-center gap-4 rounded-md  bg-yellow-50 p-4 text-center"
          >
            <div className="relative h-12 w-12 rounded-full bg-brand/50 p-2">
              <feature.icon className="absolute -bottom-3 -right-3 h-10 w-10" />
            </div>
            <h1 className="font-bold">{feature.label}</h1>
            <p className="text-balance">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
