import { H1 } from "@/app/components/headers/h1.component";
import Image from "next/image";

export default function SummonIreinPage() {
  return (
    <div className="p-4 space-y-4">
      <H1 className="text-center">How to Sumon Irein</H1>
      <div className="w-full pb-[56.25%] relative">
        <Image
          src="/images/summon-irein-hero.webp"
          alt="Summonning Irein Hero Picture"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          fill={true}
        />
      </div>
      <p>
        What are the advantages of summoning Irein? What aren't the advantages?
        Good Ireins are great. They will gather things for you if you whine you
        need things, they will craft things for you if you whine you're
        undergeared for progressing through MSQ, they'll bake a cheesecake for
        you if you threaten to throw money at them, they'll sing musical numbers
        if you mention you love musical theater, and they'll take fantastic
        pictures of you with a happy trail!
      </p>
      <p>
        Some of these things are hypothetical. Some of them are made up. But
        having your very own Irein in your life can only bring good tidings and
        joy!
      </p>
      <p>Theoretically.</p>
      <p>So what do you have to do? It's simple.</p>
      <div className="w-full pb-[56.25%] relative">
        <Image
          src="/images/summon-irein-event-second-picture.webp"
          alt="Summon Irein second picture"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full h-auto"
          fill={true}
        />
      </div>
      <p>
        Don't be a shit human being and say hi to her occasionally. Really. Not
        that hard. What? Did you expect some sort of weird summong ritual where
        you had to sacrifice the blood of a virgin Elezen on the night of the
        harvest moon? It doesn't work like that. Just say you need help with
        something and she'll likely ask if she can help.
      </p>
      <p>
        Then you intermittently send sugar-free Red Bull (tm) to their doorstep
        or find some farming sim they want on their Steam wishlist and block
        them so they can't yell at you in return.
      </p>
      <p>This presentation really could have been an email.</p>
    </div>
  );
}
