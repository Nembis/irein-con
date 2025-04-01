import Image from "next/image";
import { H1 } from "./components/headers/h1.component";
import { H3 } from "./components/headers/h3.component";
import { STAFF } from "./constants/sponsors.constant";
import { StaffCard } from "./components/sponsor-card/staff-card.component";
import { EventPanelCard } from "./components/event-panel-card/event-panel-card.component";
import { EVENTS_PANELS } from "./constants/events.constant";

export default function Home() {
  return (
    <>
      <section className="w-full grid md:grid-cols-2 gap-8 p-8 bg-black overflow-hidden">
        <div className="w-full text-center space-y-8 md:flex md:flex-col md:justify-center md:items-center">
          <H1>
            <span className="underline font-extrabold text-secondary-blue text-str">
              Irein
            </span>{" "}
            <span className="text-primary-blue">Con</span>
          </H1>
          <p className="text-center text-white text-xl font-light">
            Everything and more about the Good Irein!
          </p>
        </div>

        <Image
          src="/images/irein-head-picture.webp"
          alt="Irein"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto translate-y-10"
        />
      </section>

      <section className="w-full grid gap-8 p-8 bg-background overflow-hidden">
        <div className="w-full text-center md:my-8">
          <H3 className="">Staff</H3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {STAFF.map((sponsor, idx) => (
            <StaffCard key={idx} staff={sponsor} />
          ))}
        </div>
      </section>

      <section className="w-full grid gap-8 p-8 bg-secondary-blue overflow-hidden">
        <div className="w-full text-center md:my-8">
          <H3 className="text-white">Events</H3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {EVENTS_PANELS.map((eventPanel, idx) => (
            <EventPanelCard key={idx} eventPanel={eventPanel} />
          ))}
        </div>
        <div></div>
      </section>

      <section className="w-full grid gap-8 p-8 bg-background overflow-hidden">
        <div className="w-full text-center md:my-8">
          <H3 className="">Merch</H3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="w-full pb-[100%] border-2 bg-primary-blue border-primary-red rounded-lg p-4 text-center space-y-8 shadow-md shadow-black relative">
            <Image
              src="/images/blank-T-Shirt.webp"
              alt="Blank T Shirt"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              fill={true}
            />
          </div>
          <div className="w-full pb-[100%] border-2 bg-primary-blue border-primary-red rounded-lg p-4 text-center space-y-8 shadow-md shadow-black relative">
            <Image
              src="/images/blank-T-Shirt-mail.webp"
              alt="Blank T Shirt"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              fill={true}
            />
          </div>
          <div className="w-full pb-[100%] border-2 bg-primary-blue border-primary-red rounded-lg p-4 text-center space-y-8 shadow-md shadow-black relative">
            <Image
              src="/images/blank-T-Shirt-female.webp"
              alt="Blank T Shirt"
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto"
              fill={true}
            />
          </div>
          <a
            target="blank"
            href="https://www.etsy.com/shop/craftyacai/?etsrc=sdt"
            className="w-full md:col-start-2 md:row-start-2 p-4 bg-primary-red text-white text-center rounded-lg hover:cursor-pointer"
          >
            Suport our Artists
          </a>
        </div>
      </section>
    </>
  );
}
