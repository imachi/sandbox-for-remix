import { ReactNode } from "react";

export type CardProps = {
  size?: "sm" | "md"
  image: string
  title: string
  description: string
  label?: ReactNode
};

export default function Card({ size = "md", image, title, description }: CardProps): JSX.Element {
  return (
    <div className={`bg-white rounded-[4px] p-[8px] flex gap-[16px] w-full ${size === "md" ? "max-w-[640px]" : "max-w-[440px]"}`}>
      <div className="w-[29%]">
        <img alt="card-image" src={image} />
      </div>
      <div>
        <p className="font-bold text-black text-[14px]">{title}</p>
        <span className="text-black text-[10px]">{description}</span>
      </div>
    </div>
  );
}
