import { TEventPanel } from "@/app/constants/events.constant";
import Image from "next/image";
import { FC } from "react";
import { H3 } from "../headers/h3.component";

interface EventPanelCardProps {
  eventPanel: TEventPanel;
}

export const EventPanelCard: FC<EventPanelCardProps> = ({ eventPanel }) => {
  return (
    <div className="grid xl:grid-cols-2 border-2 bg-primary-blue border-primary-red rounded-lg p-4 text-center space-y-8 shadow-md shadow-black">
      <div className="w-full pb-[56.25%] xl:pb-0 xl:h-auto relative">
        <Image
          src={eventPanel.image}
          alt={`${eventPanel.time} event panel image.`}
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          fill={true}
        />
      </div>

      <div className="p-2 lg:text-left lg:pl-8">
        <H3>{eventPanel.title}</H3>
        <p>{eventPanel.description}</p>
        <p>
          <span className="font-bold">Presented By:</span>{" "}
          {eventPanel.presenter}
        </p>
        <p className="flex">
          <pre className="font-bold">{eventPanel.date} </pre>{" "}
          <pre className="italic">{eventPanel.time}</pre>
        </p>
      </div>
    </div>
  );
};
