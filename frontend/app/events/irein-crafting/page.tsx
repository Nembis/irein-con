import { H1 } from "@/app/components/headers/h1.component";
import Image from "next/image";

export default function IreinCraftingPage() {
  return (
    <div className="p-4 space-y-4">
      <H1 className="text-center">Crafting and why Sanji isn't better</H1>
      <div className="w-full pb-[56.25%] relative">
        <Image
          src="/images/irein-crafting.webp"
          alt="Summonning Irein Hero Picture"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          fill={true}
        />
      </div>
      <p>
        Sanjiro has stated they wanted absolutely nothing to do with this
        project unless they had the opportunity to clear their name and
        unilaterally declare Irein the absolute master in all things crafting
        for the acclaimed MMORPG Final Fantasy XIV which now has a free trial
        that include the base game and the award winning expansions Heavensward
        and Stormblood. Sure, Sanjiro has the ability to craft amazing gear, but
        Irein has been known to toil endlessly in gathering only the highest
        quality of materials by hand at very specific time frames, go back to
        the FC house to make use of the crafting facilities, swear up a storm
        from bleeding hands, and make the most exquisite of gear that can only
        come from a goddess of threads. Even Hironobu Sakaguchi would strive to
        own one of these things (note: no, this statement is false).
      </p>
    </div>
  );
}
