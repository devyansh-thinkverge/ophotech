import type { ComponentProps } from "react";
import Image, { type StaticImageData } from "next/image";

import BackgroundDots from "@/components/ui/background";

export type IconCardsSectionItem = {
  title: string;
  description?: string;
  icon: string | StaticImageData;
};

export type IconCardsSectionProps = {
  title: string;
  subtitle?: string;
  items: IconCardsSectionItem[];
  stackTitleWords?: boolean;
  withBackgroundDots?: boolean;
  backgroundDotsProps?: Omit<ComponentProps<typeof BackgroundDots>, "children">;
  sectionClassName?: string;
  titleClassName?: string;
  subtitleClassName?: string;
  cardsRowClassName?: string;
  cardClassName?: string;
  titleTextClassName?: string;
  descriptionClassName?: string;
  dividerContainerClassName?: string;
  dividerBarClassName?: string;
  dividerImageHeight?: number;
};

export function IconCardsSection({
  title,
  subtitle,
  items,
  stackTitleWords = false,
  withBackgroundDots = false,
  backgroundDotsProps,
  sectionClassName = "mx-auto max-w-5xl mb-2 px-4",
  titleClassName = "text-center text-4xl font-medium mt-10 text-[#111827]",
  subtitleClassName = "text-center text-base text-[#6b7280] mt-5 mb-2",
  cardsRowClassName =
    "mt-5 flex flex-col items-center lg:flex-row lg:items-end lg:justify-center lg:gap-0",
  cardClassName = "flex-1 min-w-[200px] rounded-[20px] lg:px-5 xl:px-2 py-15 text-center flex flex-col items-center",
  titleTextClassName =
    "text-base font-medium leading-[20px] text-[#111827] mx-auto max-w-[180px]",
  descriptionClassName = "mt-2 text-sm text-[#6b7280]",
  dividerImageHeight = 290,
}: IconCardsSectionProps) {
  const content = (
    <section className={sectionClassName}>
      <h2 className={titleClassName}>{title}</h2>
      {subtitle ? <p className={subtitleClassName}>{subtitle}</p> : null}

      <div className="hidden lg:flex lg:items-start lg:justify-center lg:gap-0">
        {items.map((item, index, array) => (
          <div key={`card-group-${index}`} className="flex items-start gap-0">
            <article className={cardClassName}>
              <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full bg-[#f0fdf4] border border-[#22c55e]/20">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={40}
                  height={40}
                  className="h-10 w-10"
                  style={{ filter: "brightness(0) sepia(1) saturate(3) hue-rotate(95deg)" }}
                />
              </div>

              <p className={titleTextClassName}>
                {stackTitleWords
                  ? item.title.split(" ").map((word, wordIndex) => (
                      <span key={wordIndex} className="block">
                        {word}
                      </span>
                    ))
                  : item.title}
              </p>

              {item.description?.trim() ? (
                <p className={descriptionClassName}>{item.description}</p>
              ) : null}
            </article>

            {index < array.length - 1 ? (
              <div
                className="w-[1px] bg-gradient-to-b from-transparent via-[#22c55e]/30 to-transparent lg:mx-2 xl:mx-6 flex-shrink-0"
                style={{ height: `${dividerImageHeight}px` }}
                aria-hidden
              />
            ) : null}
          </div>
        ))}
      </div>

      <div className="lg:hidden">
        {items.map((item, index, array) => (
          <div key={`mobile-card-${index}`}>
            <article className={cardClassName}>
              <div className="mx-auto mb-4 grid h-20 w-20 place-items-center rounded-full bg-[#f0fdf4] border border-[#22c55e]/20">
                <Image
                  src={item.icon}
                  alt={`${item.title} icon`}
                  width={40}
                  height={40}
                  className="h-10 w-10"
                  style={{ filter: "brightness(0) sepia(1) saturate(3) hue-rotate(95deg)" }}
                />
              </div>

              <p className={titleTextClassName}>
                {stackTitleWords
                  ? item.title.split(" ").map((word, wordIndex) => (
                      <span key={wordIndex} className="block">
                        {word}
                      </span>
                    ))
                  : item.title}
              </p>

              {item.description?.trim() ? (
                <p className={descriptionClassName}>{item.description}</p>
              ) : null}
            </article>

            {index < array.length - 1 ? (
              <div
                className="h-[1px] w-full bg-gradient-to-r from-transparent via-[#22c55e]/30 to-transparent"
                aria-hidden
              />
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );

  if (!withBackgroundDots) return content;

  return <BackgroundDots {...backgroundDotsProps}>{content}</BackgroundDots>;
}
