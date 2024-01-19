import type { Meta, StoryObj } from "@storybook/react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./Carousel";

const CarouselDemo = () => (
  <div className="flex h-screen items-center justify-center">
    <Carousel>
      <CarouselContent>
        {Array.from({ length: 15 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3 md:basis-1/5">
            <div className="flex aspect-square w-full items-center justify-center rounded-md border-2 bg-gray-500 text-white">
              {index + 1}
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  </div>
);

const meta = {
  title: "UI/Carousel",
  component: CarouselDemo,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
